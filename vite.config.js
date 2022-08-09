import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  define: {
    "process.env.VITE_NAME": `"${process.env.VITE_NAME}"`,
  },
  base: "/",
  server: {
    port: 80,
  },
  plugins: [react(), svgr()],
});
