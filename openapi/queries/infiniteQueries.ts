// generated with @7nohe/openapi-react-query-codegen@1.5.0 

import { InfiniteData, UseInfiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
export const useDefaultServiceGetPetsInfinite = <TData = InfiniteData<Common.DefaultServiceGetPetsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseDefaultServiceGetPetsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => DefaultService.getPets({ limit, page: pageParam as number }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
