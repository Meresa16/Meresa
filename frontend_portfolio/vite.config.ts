// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import checker from "vite-plugin-checker";
// import dns from "node:dns";

// dns.setDefaultResultOrder("verbatim");

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     checker({
//       typescript: true,
//     }),
//   ],
  
//   // --- ADDED BUILD CONFIGURATION HERE ---
//   build: {
//     // Vite's default output directory is 'dist'. We MUST change it to 'build'
//     // because Vercel is explicitly looking for a folder named 'build'.
//     outDir: 'build', 
//   },
//   // ------------------------------------

//   server: {
//     port: 3000,
//     host: true,
//     allowedHosts: true,
//   },
//   preview: {
//     port: 3000,
//     host: true,
//     allowedHosts: true,
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });










import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import checker from "vite-plugin-checker";
import dns from "node:dns";

dns.setDefaultResultOrder("verbatim");

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: true,
    }),
  ],
  
  // --- FINAL OPTIMIZED BUILD CONFIGURATION ---
  build: {
    // 1. Output Directory Fix (MUST be 'build' for Vercel)
    outDir: 'build', 
    
    // 2. Adjust warning limit (Optional: raises warning threshold to 1MB)
    chunkSizeWarningLimit: 1000, 

    // 3. Code-Splitting Optimization (Manual Chunks)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group the largest libraries into their own chunks
            if (id.includes('recharts') || id.includes('d3')) {
              return 'vendor_recharts';
            }
            if (id.includes('axios') || id.includes('google-auth')) {
                return 'vendor_api';
            }
            // All other smaller vendor packages go here
            return 'vendor_general'; 
          }
        },
      },
    },
  },
  // ------------------------------------

  server: {
    port: 3000,
    host: true,
    allowedHosts: true,
  },
  preview: {
    port: 3000,
    host: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
