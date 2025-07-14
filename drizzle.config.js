import { defineConfig } from "drizzle-kit";
import 'dotenv/config';



export default defineConfig({
  schema: "./utils/schema.js",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL 
  },
});