import { Api } from "@/app/services/api";
import { PlanetsGetErrorModel, PlanetsGetResponseModel } from "@/app/services/v1/planets";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

interface PlanetsContextType {
  api: UseQueryResult<PlanetsGetResponseModel, PlanetsGetErrorModel>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PlanetsContext = createContext<PlanetsContextType | null>(null);

export interface PlanetsProviderProps {
    children: React.ReactNode;
}

export function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [page, setPage] = useState<number>(1);

  const api = useQuery<PlanetsGetResponseModel, PlanetsGetErrorModel, PlanetsGetResponseModel, string[]>({
      queryKey: [page.toString()],
      queryFn: () => Api.getPlanets({page}),
      retry: false
  });

  return (
    <PlanetsContext.Provider value={{ api, page, setPage }}>
      {children}
    </PlanetsContext.Provider>
  );
}

export function usePlanets() {
  const context = useContext(PlanetsContext);
  if(context) return context;
  else throw new Error('usePlanets must be used within a PlanetsProvider');
}