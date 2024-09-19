'use client'

import React from "react"

type PropsType = {
    gap: number,
    cols: number,
    children: React.ReactNode,
}

export default ({gap, cols, children}: PropsType) => {
    const style = {
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: `${gap}px`,

    }

    return (
        <div className={`grid grid-cols-7` } style={style}>
            {children}
        </div>
    )

}