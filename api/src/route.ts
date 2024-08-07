import { createRoute } from "@hono/zod-openapi";
import { z } from "@hono/zod-openapi";

export const PetsParamSchema = z.object({
  limit: z
    .string()
    .optional()
    .openapi({
      param: {
        name: "limit",
        in: "query",
      },
      example: "10",
      type: "integer",
    }),
  page: z
    .string()
    .optional()
    .openapi({
      param: {
        name: "page",
        in: "query",
      },
      example: "1",
      type: "integer",
    }),
});

export const PetSchema = z
  .object({
    name: z.string(),
    id: z.number(),
  })
  .openapi("Pet");

export const PetsSchema = z.object({
  pets: z.array(PetSchema),
  nextPage: z.number(),
});

export const petsRoute = createRoute({
  method: "get",
  path: "/pets",
  request: {
    query: PetsParamSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: PetsSchema,
        },
      },
      description: "Returns a list of pets",
    },
  },
});
