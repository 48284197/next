'use client'

import React, { useEffect } from 'react'

type PropsType = {
    gap: number,
    cols: number,
    children: React.ReactNode,
}
export default function WaterfallFlow(props: PropsType) {
    useEffect(()=>{
        if (typeof document != 'undefined') import('wc-waterfall')
    },[props])

    return (
        <wc-waterfall gap={props.gap} cols={props.cols} style={{ width:'100%',}} >
            {props.children}
        </wc-waterfall>
    )
}