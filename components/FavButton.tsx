import React, { useCallback, useMemo } from 'react'
import axios from 'axios'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import useFavouriteList from '@/hooks/useFavouriteList';
import useCurrentUser from '@/hooks/useCurrentUser';

type favButtonProps = {
    movieId: string;
}
const FavButton: React.FC<favButtonProps> = ({ movieId }) => {

    const { mutate: mutateFavorites } = useFavouriteList();
    const { data: currentUser, mutate } = useCurrentUser();

    const isFav = useMemo(() => {
        const favList = currentUser?.favouriteIds || []

        return favList.includes(movieId)
    }, [currentUser, movieId])

    const toggleFav = useCallback(async () => {
        let res;
        if (isFav) {
            res = await axios.delete('/api/favourites', { data: { movieId } })
        } else {
            res = await axios.post('/api/favourites', { movieId })
        }

        const updatedFavIds = res?.data?.favouriteIds

        mutate({
            ...currentUser,
            favouriteIds: updatedFavIds
        })

        mutateFavorites();
    }, [movieId, isFav, currentUser, mutate, mutateFavorites])

    const Icon = isFav ? AiOutlineCheck : AiOutlinePlus

    return (
        <React.Fragment>
            <div 
                onClick={toggleFav}
                className='
                    cursor-pointer
                    group/item
                    w-6
                    h-6
                    lg:w-10
                    lg:h-10
                    border-white
                    border-2
                    rounded-full
                    flex
                    justify-center
                    items-center
                    hover:border-neutral-300
            '>
                <Icon className='text-white' size={20} />
            </div>
        </React.Fragment>
    )
}

export default FavButton