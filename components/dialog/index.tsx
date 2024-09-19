'use client'

import React, { useState, useEffect } from "react"
import { create } from 'zustand'

type PosSize = {
    w: number,
    h: number,
    x: number,
    y: number,
    normalW?: string,
    normalH?: string,
}
export type DialogStore = {
    show: boolean,
    content: React.ReactNode,
    posSize?: PosSize,
    setShow: (show: boolean) => void,
    setContent: (content: React.ReactNode) => void
    setPosSize: (posSize: PosSize) => void
}


const useDialogStore = create<DialogStore>((set) => ({
    show: false,
    content: <div>Dialog</div>,
    posSize: {
        w: 0,
        h: 0,
        x: 0,
        y: 0,
        normalW: '50vw',
        normalH: '50vh',
    },
    setShow: (show) => set({ show: show }),
    setContent: (content) => set({ content: content }),
    setPosSize: (posSize) => set({ posSize: posSize }),
}))

let dialogStore
export default function Dialog() {
    dialogStore = useDialogStore()
    let [style, setStyle] = useState({

    })

    useEffect(() => {
        setStyle({
            width: dialogStore.posSize.w + "px",
            height: dialogStore.posSize.h + 'px',
            translate: dialogStore.posSize.x + "px " + dialogStore.posSize.y + "px",
        })

        setTimeout(() => {
            setStyle({
                width: '50vw',
                height: '70vh',
                translate: "25vw 15vh",
                transition: 'all .3s'
            })
        }, 100);

    }, [dialogStore.posSize])
    return (
        <div className={`w-screen h-screen overflow-hidden fixed top-0 left-0 bg-black/50 z-50 ${dialogStore.show ? '' : 'hidden'}`}>
            <div style={style} className={`absolute top-0  bg-white p-4 `}>
                {dialogStore.content}
            </div>
        </div>
    )
}



export function showDialog(content, e) {
    let pos = e.target.getBoundingClientRect()
    dialogStore.setPosSize({ w: pos.width, h: pos.height, x: pos.x, y: pos.y })
    dialogStore.setContent(content)
    dialogStore.setShow(true)

}

export function hideDialog() {
    dialogStore.setContent(<></>)
    dialogStore.setShow(false)

}