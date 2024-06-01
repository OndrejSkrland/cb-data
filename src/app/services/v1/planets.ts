import { getData } from "@/app/utils/fetch";

export interface PlanetsGetResponseModel {
    count: number;
    next: string | null;
    previous: string | null;
    results: Planet[];
}

export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface PlanetsGetRequestModel {
    page: number
}

export interface PlanetsGetErrorModel {
    detail: string;
}

export class Planets {
    getPlanets(request: PlanetsGetRequestModel, signal?: AbortSignal) {
        return getData<PlanetsGetResponseModel>("https://swapi.dev/api/planets", request, { signal });
    }
}