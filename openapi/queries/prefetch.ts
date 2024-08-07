// generated with @7nohe/openapi-react-query-codegen@1.5.0 

import { type QueryClient } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseDefaultServiceGetPets = (queryClient: QueryClient, { limit, page }: {
  limit?: number;
  page?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetPetsKeyFn({ limit, page }), queryFn: () => DefaultService.getPets({ limit, page }) });
