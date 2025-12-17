import express, { Request, Response } from 'express';
import cors from 'cors';
import { BigQuery } from '@google-cloud/bigquery';
import path from 'path';
import fs from 'fs';

// --- CONFIGURATION ---
const app = express();
const PORT = 8000;
const PROJECT_ID = 'loyal-weaver-471905-p9';
// Make sure this file exists in your backend-node folder!
const KEY_PATH = path.join(__dirname, 'loyal-weaver-471905-p9-44de225b313c.json');

// --- MIDDLEWARE ---
app.use(cors({
    origin: 'http://localhost:3000' // Allow React App
}));
app.use(express.json());

// --- BIGQUERY CLIENT ---
// Function to get client safely
const getBigQueryClient = () => {
    if (!fs.existsSync(KEY_PATH)) {
        throw new Error(`CRITICAL: Key file not found at ${KEY_PATH}`);
    }
    return new BigQuery({
        projectId: PROJECT_ID,
        keyFilename: KEY_PATH,
    });
};

// --- LOGGING UTILITY ---
const log = (msg: string) => {
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    console.log(`${timestamp} [INFO] ${msg}`);
};

// --- ENDPOINTS ---

// 1. Root Check
app.get('/', (req: Request, res: Response) => {
    res.json({ status: 'online', message: 'Crypto Backend (Node/TS) is running' });
});

// 2. Market Overview (All Coins)
app.get('/api/market-overview', async (req: Request, res: Response) => {
    try {
        const bigquery = getBigQueryClient();
        log('📡 Received request: Market Overview');

        // Note: We select 'logo_url' directly as per your latest fix
        const query = `
            SELECT 
                symbol,
                name,
                price_usd,
                market_cap,
                total_volume,
                change_24h_pct,
                drawdown_pct,
                logo_url,
                rank
            FROM \`loyal-weaver-471905-p9.dbt_prod.fact_daily_trends\`
            WHERE report_date = (
                SELECT MAX(report_date) FROM \`loyal-weaver-471905-p9.dbt_prod.fact_daily_trends\`
            )
            ORDER BY market_cap DESC
        `;

        log('🔍 Executing BigQuery SQL...');
        
        // BigQuery API returns an array where the first element is the rows
        const [rows] = await bigquery.query({ query });

        log(`✅ Success! Retrieved ${rows.length} rows.`);
        res.json(rows);

    } catch (error: any) {
        console.error('🔥 Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// 3. Historical Trends (Specific Coin)
app.get('/api/crypto-trends', async (req: Request, res: Response) => {
    try {
        const bigquery = getBigQueryClient();
        // Get symbol from query params, default to 'btc'
        const symbol = (req.query.symbol as string) || 'btc';
        
        log(`📡 Received request: Trends for ${symbol}`);

        const query = `
            SELECT 
                CAST(report_date AS STRING) as date,
                price_usd,
                moving_avg_7d,
                total_volume
            FROM \`loyal-weaver-471905-p9.dbt_prod.fact_daily_trends\`
            WHERE lower(symbol) = @symbol
            ORDER BY report_date ASC
        `;

        // BigQuery Parameterized Query Options
        const options = {
            query: query,
            params: { symbol: symbol.toLowerCase() }, // Safe parameter injection
        };

        log('🔍 Executing BigQuery SQL...');
        const [rows] = await bigquery.query(options);

        log(`✅ Success! Retrieved ${rows.length} rows for ${symbol}.`);
        res.json(rows);

    } catch (error: any) {
        console.error('🔥 Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log('----------------------------------------------------------');
    console.log(`⚡ Server is ready! React can connect at: http://localhost:${PORT}`);
    console.log('----------------------------------------------------------');
    
    // Check key on startup
    if (fs.existsSync(KEY_PATH)) {
        console.log(`✅ GCP Credentials found at: ${KEY_PATH}`);
    } else {
        console.error(`❌ CRITICAL: gcp_key.json not found!`);
    }
});