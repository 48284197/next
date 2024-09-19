'use client'

import { create } from 'zustand'

export type userInfo = {
    isLogin: boolean,
    name: string
}
export type SystemStore = {
    userInfo: userInfo,
    userPriviews: number, // 是否是预览模式
    setUserInfo: (userInfo: userInfo) => void,
    setUserPriviews: (userPriviews: number) => void

}



const useSystemStore = create<SystemStore>((set) => ({
    userInfo: {
        isLogin: false,
        name: '',
    },
    userPriviews:0,

    setUserInfo: (userInfo) => set(() => ({ userInfo })),
    setUserPriviews: (userPriviews) => set(() => ({ userPriviews }))



}))

export default useSystemStore

