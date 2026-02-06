import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

// For edge environments, you'd use a different driver, but for VPS/aaPanel, postgres.js is best.
const client = postgres(connectionString);
export const db = drizzle(client, { schema });
