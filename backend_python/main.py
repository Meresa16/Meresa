# import logging
# import os
# import uvicorn
# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from google.cloud import bigquery
# from google.oauth2 import service_account

# # --- 1. SETUP LOGGING ---
# # This makes the console output look professional and informative
# logging.basicConfig(
#     level=logging.INFO,
#     format="%(asctime)s [%(levelname)s] %(message)s",
#     datefmt="%H:%M:%S"
# )
# logger = logging.getLogger("CryptoAPI")

# app = FastAPI(title="Crypto Intelligence Backend")

# # --- 2. CONFIGURATION ---
# # IMPORTANT: Ensure this path is correct relative to where you run the command
# KEY_PATH = "loyal-weaver-471905-p9-44de225b313c.json" 
# PROJECT_ID = "loyal-weaver-471905-p9"

# # --- 3. CORS SETUP ---
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"], 
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # --- 4. STARTUP CHECK ---
# @app.on_event("startup")
# async def startup_check():
#     """Runs immediately when the server starts to check health."""
#     logger.info("🚀 Starting Crypto Backend API...")
#     if os.path.exists(KEY_PATH):
#         logger.info(f"✅ GCP Credentials found at: {KEY_PATH}")
#     else:
#         logger.error(f"❌ CRITICAL: gcp_key.json not found at '{KEY_PATH}'")
#         logger.warning("   Please make sure the file is in the root folder or update KEY_PATH.")

# # --- 5. ENDPOINTS ---
# @app.get("/")
# def root():
#     """Simple check to see if server is running."""
#     return {"status": "online", "message": "Crypto Backend is running"}

# @app.get("/api/crypto-trends")
# def get_crypto_trends():
#     logger.info("📡 Received request: Fetching Bitcoin trends...")
    
#     # Safety Check: Key File
#     if not os.path.exists(KEY_PATH):
#         logger.error("❌ Key file missing during request.")
#         raise HTTPException(status_code=500, detail="Server Error: Key not found")

#     try:
#         # Connect to Google Cloud
#         credentials = service_account.Credentials.from_service_account_file(KEY_PATH)
#         client = bigquery.Client(credentials=credentials, project=PROJECT_ID)
        
#         # SQL Query
#         query = """
#             SELECT 
#                 CAST(report_date AS STRING) as date,
#                 price_usd,
#                 moving_avg_7d
#             FROM `loyal-weaver-471905-p9.dbt_prod.fact_daily_trends`
#             WHERE symbol = 'btc'
#             ORDER BY report_date ASC
#         """
        
#         logger.info("🔍 Executing BigQuery SQL...")
#         query_job = client.query(query)
        
#         # Convert to list of dicts
#         rows = [dict(row) for row in query_job]
        
#         logger.info(f"✅ Success! Retrieved {len(rows)} records from BigQuery.")
#         return rows

#     except Exception as e:
#         logger.error(f"🔥 BigQuery Error: {str(e)}")
#         raise HTTPException(status_code=500, detail=str(e))

# if __name__ == "__main__":
#     logger.info("----------------------------------------------------------")
#     logger.info("⚡ Server is ready! React can connect at: http://localhost:8000")
#     logger.info("----------------------------------------------------------")
#     uvicorn.run(app, host="0.0.0.0", port=8000)







import logging
import os
import uvicorn
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import bigquery
from google.oauth2 import service_account

# --- SETUP ---
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("CryptoAPI")

app = FastAPI()

# Key Configuration
KEY_PATH = "loyal-weaver-471905-p9-44de225b313c.json" 
PROJECT_ID = "loyal-weaver-471905-p9"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_bq_client():
    if not os.path.exists(KEY_PATH):
        raise FileNotFoundError("Key file not found")
    credentials = service_account.Credentials.from_service_account_file(KEY_PATH)
    return bigquery.Client(credentials=credentials, project=PROJECT_ID)

# --- ENDPOINT 1: MARKET OVERVIEW (ALL COINS) ---
@app.get("/api/market-overview")
def get_market_overview():
    """Gets the latest data for ALL coins to display in the main table."""
    try:
        client = get_bq_client()
        query = """
            SELECT 
                symbol,
                name,
                price_usd,
                market_cap,
                total_volume,
                change_24h_pct,
                drawdown_pct,
                logo_url as logo_url,
                rank
            FROM `loyal-weaver-471905-p9.dbt_prod.fact_daily_trends`
            WHERE report_date = (
                SELECT MAX(report_date) FROM `loyal-weaver-471905-p9.dbt_prod.fact_daily_trends`
            )
            ORDER BY market_cap DESC
        """
        query_job = client.query(query)
        rows = [dict(row) for row in query_job]
        return rows
    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# --- ENDPOINT 2: HISTORICAL TRENDS (ONE COIN) ---
@app.get("/api/crypto-trends")
def get_crypto_trends(symbol: str = Query("btc")):
    """Gets historical data for charts for a SPECIFIC coin."""
    try:
        client = get_bq_client()
        query = """
            SELECT 
                CAST(report_date AS STRING) as date,
                price_usd,
                moving_avg_7d,
                total_volume
            FROM `loyal-weaver-471905-p9.dbt_prod.fact_daily_trends`
            WHERE lower(symbol) = @symbol
            ORDER BY report_date ASC
        """
        job_config = bigquery.QueryJobConfig(
            query_parameters=[bigquery.ScalarQueryParameter("symbol", "STRING", symbol.lower())]
        )
        query_job = client.query(query, job_config=job_config)
        rows = [dict(row) for row in query_job]
        return rows
    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)