import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider as RawQueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useMemo, type ReactNode } from "react"

import { PROD_ENV } from "../env.js"
import { useNotifier } from "./NotifierProvider.js"

interface Props {
    children?: ReactNode
}

export default function QueryClientProvider(props: Props) {
    const notifier = useNotifier()

    return (
        <RawQueryClientProvider
            client={useMemo(() => {
                const queryClient = new QueryClient({
                    queryCache: new QueryCache({
                        onError: notifier.error,
                    }),
                    mutationCache: new MutationCache({
                        onError: notifier.error,
                        onSuccess: () => {
                            queryClient.invalidateQueries().catch(notifier.error)
                        },
                    }),
                    defaultOptions: {
                        queries: {
                            retry: PROD_ENV,
                            refetchOnWindowFocus: PROD_ENV,
                            staleTime: 20 * 1000, // 20 seconds
                            gcTime: 30 * 60 * 1000, // 30 minutes
                        },
                    },
                })
                return queryClient
            }, [notifier])}
        >
            {props.children}
            <ReactQueryDevtools initialIsOpen={false} />
        </RawQueryClientProvider>
    )
}
