import { UseQueryResult } from "@tanstack/react-query";
import { Loader } from "./Loader";
import { Alert } from "./Alert";
import React, { ComponentType, ReactNode } from "react";
import { Button } from "./Button";

export interface AsyncContentProps<TData, TError> {
    api: UseQueryResult<TData, any> | undefined
    getErrorMessage?: (error: TError) => React.ReactNode;
    loader?: ComponentType
    children: (data: TData) => ReactNode;
}

export const defaultErrorMessage = "Ooops, data were not loaded due to some unexpected error. Please check the internet connection and try again."

export function AsyncContent<TData, TError>({getErrorMessage , api, children, loader: LoaderComp}: AsyncContentProps<TData ,TError>) {
    const refetch = () => api?.refetch();
    if(api?.isPending || !api) return LoaderComp ? <LoaderComp /> : <Loader />;
    if(api.isError) return <Alert severity="error" className="flex justify-between gap-3">
        {getErrorMessage ? getErrorMessage(api.error?.response?.data as TError) : defaultErrorMessage}
        <Button onClick={refetch} color="secondary">Refetch</Button>
    </Alert>
    if(api.isSuccess) return children(api.data)
}