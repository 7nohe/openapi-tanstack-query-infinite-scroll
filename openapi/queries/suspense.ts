// generated with @7nohe/openapi-react-query-codegen@1.5.1 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
/**
* @param data The data for the request.
* @param data.limit
* @param data.page
* @returns unknown Returns a list of pets
* @throws ApiError
*/
export const useDefaultServiceGetPetsSuspense = <TData = Common.DefaultServiceGetPetsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetPetsKeyFn({ limit, page }, queryKey), queryFn: () => DefaultService.getPets({ limit, page }) as TData, ...options });
