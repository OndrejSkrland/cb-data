import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiError {
    errorCode: number;
    errorData?: any;
}

export async function getData<TResponse = any>(url: string, urlParamsRequest?: any, options?: AxiosRequestConfig) {
    url = getUrl(url, urlParamsRequest);
    const response = await axios.get(url, options);
    return processResponse(response) as TResponse;
}

export function getUrl(url: string, urlParamsRequest?: any) {
    if (urlParamsRequest) {
        const params = new URLSearchParams();
        appendParams(params, urlParamsRequest);
        url = `${url}?${params.toString()}`;
    }
    return url;
}

function processResponse(response: AxiosResponse<any>) {
    const errorCode = response.status
    if (errorCode !== 200) {
        const error: ApiError = { errorCode, errorData: response.data };
        throw error;
    }
    if (response.status === 200) return response.data;

}

export function appendParams(params: { append: (key: string, val: string) => void }, rq: any) {
    for (const key in rq) {
        const val = rq[key];
        if (val) {
            if (val instanceof Array && !val.length) continue;
            if (val instanceof Array) params.append(key, val.join(","));
            else params.append(key, val);
        }
    }
}