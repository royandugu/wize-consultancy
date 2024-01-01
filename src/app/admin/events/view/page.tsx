"use client"

import { QueryClientProvider, QueryClient } from 'react-query';

import EventViewDisplay from "../../../../../components/adminComponents/secondaryComponents/eventsComponents/eventViewDisplay";

const Page = () => {
    const queryClient = new QueryClient(
        {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    retry: false
                },
            },
        }
    );

    return (
        <QueryClientProvider client={queryClient}>
            <EventViewDisplay />
        </QueryClientProvider>
    )
}
export default Page;