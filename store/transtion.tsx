'use client'

import { create } from 'zustand'


export type SystemStore = {
    info: {
        x: number,
        y: number,
        w: number,
        h: number,
        top: number
    },
    setInfo: (userInfo) => void,



}


const useTranstion = create<SystemStore>((set) => ({

    info: {
        x: 0,
        y: 0,
        w: 10,
        h: 10,
        hidden: false,
        top: 0
    },

    setInfo: (info) => set(() => ({ info: info }))


}))

export default useTranstion

