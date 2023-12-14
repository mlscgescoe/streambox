import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavouriteList = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/favouriteList', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useFavouriteList