import type { Ulid } from "@vinorcola/utils/types"

export interface IdentifiedResponse {
    readonly id: string
    readonly version: Ulid
}

export function getHttp<T = any>(uri: string): Promise<T> {
    return request<T>("GET", uri, undefined)
}

export function postHttp<T = any>(uri: string, data?: any): Promise<T> {
    return request<T>("POST", uri, data)
}

export function deleteHttp<T = any>(uri: string, data?: any): Promise<T> {
    return request<T>("DELETE", uri, data)
}

async function request<T = any>(method: string, uri: string, data?: any): Promise<T> {
    const response = await fetch(`/api${uri}`, {
        headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...(data === undefined || data instanceof FormData
                ? {}
                : {
                      "Content-Type": "application/json",
                  }),
        },
        method,
        body: data === undefined ? undefined : data instanceof FormData ? data : JSON.stringify(data),
    })

    if (!response.ok) {
        // TODO
        throw new Error(`Erreur HTTP ${response.status}.`)
    }

    return response.json()
}
