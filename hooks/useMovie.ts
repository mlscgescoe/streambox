import fetcher from '@/lib/fetcher'
import React from 'react'
import useSWR from 'swr'

const useMovie = (id?: string) => {
    const { data, error, isLoading } = useSWR(id ? `/api/movies/${id}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnReconnect: false,
        revalidateOnFocus: false
    });

    return {
        data, error, isLoading
    }
}

export default useMovie