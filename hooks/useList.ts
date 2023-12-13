import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useList = () => {
    const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
        revalidateIfStale: false,
        revalidateOnReconnect: false,
        revalidateOnFocus: false
    })

    return {
        data,
        error,
        isLoading
    }
}

export default useList