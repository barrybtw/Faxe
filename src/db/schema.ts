import {
  bigint,
  boolean,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const Todos = mysqlTable("todos", {
  id: bigint("id", { mode: "number" }).primaryKey(),
  title: varchar("title", { length: 30 }).notNull(),
  description: text("description").notNull(),
  completed: boolean("completed").notNull().default(false),
});
