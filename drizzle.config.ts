import type { Config } from "drizzle-kit";
import { parse, string } from "valibot";
export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: parse(string(), process.env["DATABASE_HOST"]),
    user: parse(string(), process.env["DATABASE_USERNAME"]),
    password: parse(string(), process.env["DATABASE_PASSWORD"]),
    database: parse(string(), process.env["DATABASE_NAME"]),
  },
} satisfies Config;
