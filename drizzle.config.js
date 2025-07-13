import { defineConfig } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config({ path: ".env" });

export default defineConfig({
  schema: "./utils/schema.js",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_cMl0WKRzNZ9Y@ep-plain-queen-a1i85jwl-pooler.ap-southeast-1.aws.neon.tech/neondb",
  },
});