// generated with @7nohe/openapi-react-query-codegen@1.5.1 

import { UseQueryResult } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
export type DefaultServiceGetPetsDefaultResponse = Awaited<ReturnType<typeof DefaultService.getPets>>;
export type DefaultServiceGetPetsQueryResult<TData = DefaultServiceGetPetsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetPetsKey = "DefaultServiceGetPets";
export const UseDefaultServiceGetPetsKeyFn = ({ limit, page }: {
  limit?: number;
  page?: number;
} = {}, queryKey?: Array<unknown>) => [useDefaultServiceGetPetsKey, ...(queryKey ?? [{ limit, page }])];
