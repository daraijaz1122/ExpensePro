import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
// import * as dotenv from "dotenv";

// dotenv.config({ path: ".env" });

const sql = neon("postgresql://neondb_owner:npg_cMl0WKRzNZ9Y@ep-plain-queen-a1i85jwl-pooler.ap-southeast-1.aws.neon.tech/neondb");
export const db = drizzle(sql, { schema });