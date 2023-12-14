import { create } from 'zustand'

export type modal = {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    onClose: () => void;
}

const useInfo = create<modal>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId }),
    onClose: () => set({ isOpen: false, movieId: undefined })
}))

export default useInfo