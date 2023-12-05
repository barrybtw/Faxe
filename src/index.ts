import { Elysia } from "elysia";
import { logger } from "@grotto/logysia";

const app = new Elysia()
  .use(logger())
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
