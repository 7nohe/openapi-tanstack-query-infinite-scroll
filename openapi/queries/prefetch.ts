// generated with @7nohe/openapi-react-query-codegen@1.5.1 

import { type QueryClient } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
/**
* @param data The data for the request.
* @param data.limit
* @param data.page
* @returns unknown Returns a list of pets
* @throws ApiError
*/
export const prefetchUseDefaultServiceGetPets = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetPetsKeyFn({ limit, page }), queryFn: () => DefaultService.getPets({ limit, page }) });
