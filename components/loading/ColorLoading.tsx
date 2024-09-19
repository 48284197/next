'use client'

import React from "react"

type PropsType = { 
    color?: string,
    children: React.ReactNode,
    minHeight?: number,
    addHeight?: number,
    loading: boolean
}

export default function ColorLoading({ color = '#eee', children, minHeight = 200, addHeight = 200,loading }: PropsType) {


    const height = {
        height: Math.floor(Math.random() * minHeight + addHeight) + 'px'
    }



    const zIndex = {
        zIndex: loading ? 9999 : -2,
        backgroundColor: color,
        display: loading ? 'block' : 'none'
    }

    const maskStyle = {...height, ...zIndex}
    const contentStyle = {height:loading?height.height:'fit-content'}


    return (
        <>
            <div className=" h-fit w-full " style={contentStyle}>
                {children}
                <div className="loading  rounded-md w-full z-10 absolute top-0 left-0 " style={maskStyle}> </div>
            </div>

        </>
    )
}