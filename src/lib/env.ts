import { custom, object, string, parse, safeParse } from "valibot";

const Environment = object({
  NODE_ENV: string([
    custom((value) => ["development", "production", "testing"].includes(value)),
  ]),
  PORT: string(),
  DATABASE_HOST: string(),
  DATABASE_USERNAME: string(),
  DATABASE_PASSWORD: string(),
});

export const env = parse(Environment, Bun.env);

console.table([
  Bun.env["DATABASE_HOST"],
  Bun.env["DATABASE_USERNAME"],
  Bun.env["DATABASE_PASSWORD"],
  Bun.env["NODE_ENV"],
  Bun.env["PORT"],
]);
