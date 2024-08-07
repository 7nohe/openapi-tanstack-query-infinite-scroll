// This file is auto-generated by @hey-api/openapi-ts

export type Pet = {
    name: string;
    id: number;
};

export type GetPetsData = {
    limit?: number;
    page?: number;
};

export type GetPetsResponse = {
    pets: Array<Pet>;
    nextPage: number;
};

export type $OpenApiTs = {
    '/pets': {
        get: {
            req: GetPetsData;
            res: {
                /**
                 * Returns a list of pets
                 */
                200: {
                    pets: Array<Pet>;
                    nextPage: number;
                };
            };
        };
    };
};