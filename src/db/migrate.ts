import database from ".";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";

await migrate(database, { migrationsFolder: "drizzle" });
