import { PlanetsGetErrorModel, PlanetsGetResponseModel } from "@/app/services/v1/planets";
import { AsyncContent } from "../styled/AsyncContent";
import { usePlanets } from "./PlanetsProvider";
import { Title } from "../styled/Title";
import { PlanetBox } from "../styled/PlanetBox";
import { Pagination } from "../styled/Pagination";
import { Fragment } from "react";

export function PlanetsList() {
    const { api, page, setPage } = usePlanets()
    return (
        <div className="p-10">
            <Title className="text-center mb-5">Planets</Title>
            <AsyncContent<PlanetsGetResponseModel, PlanetsGetErrorModel> api={api} getErrorMessage={(e) => e.detail }>
                {data => (
                    <Fragment>
                        <div className="flex flex-col gap-3">
                            {data.results.map(planet => <PlanetBox key={planet.name}>{planet.name}</PlanetBox>)}
                        </div>
                        <Pagination 
                            setPage={setPage} 
                            actualPage={page} 
                            pageSize={data.results.length} 
                            totalRecords={data.count} 
                        />
                    </Fragment>
                )}
            </AsyncContent>
        </div>
    );
}