import { OpenAPIHono } from "@hono/zod-openapi";
import { petsRoute } from "./route";
import { swaggerUI } from "@hono/swagger-ui";
import { cors } from "hono/cors";

const app = new OpenAPIHono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.openapi(petsRoute, (c) => {
  const { limit = 10, page = 1 } = c.req.valid("query");

  const pets = Array.from({ length: Number(limit) }).map((_, i) => ({
    name: `Pet ${i + 1 + Number(page) * Number(limit)}`,
    id: i + 1 + Number(page) * Number(limit),
  }));

  return c.json({
    pets,
    nextPage: Number(page) + 1,
  });
});

app.doc31("/doc", {
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get("/ui", swaggerUI({ url: "/doc" }));

export default app;
