'use client'
import { AiFillHome, AiTwotoneSmile } from "react-icons/ai";
import { HiEmojiHappy } from "react-icons/hi"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const menu = [
    {
        name: "Home",
        path: '/',
        icon: <AiFillHome className="text-white" />
    },
    {
        name: "animation",
        path: '/animation',
        icon: <AiTwotoneSmile className="text-white" />
    },
    {
        name: "Me",
        path: '/goods',
        icon: <HiEmojiHappy className="text-white" />
    },
    {
        name: "Me",
        path: '/me',
        icon: <HiEmojiHappy className="text-white" />
    },




]

const TabBar = () => {
    const path = usePathname()
    const [active, setActive] = useState(-1)

    useEffect(() => {
        setActive(-1)
        for (let i = 0; i < menu.length; i++) {
            if (path == menu[i]?.path) {
                setActive(i)
                break
            }
        }
    }, [path])


    return active != -1 ? (
        <>
            <div className="fixed bottom-0 left-0 h-20  gap-6 px-6  bg-[#1E1E1EFF] w-full flex items-center  shadow-sm shadow-white/50">
                {
                    menu.map((e, index) => (
                        <Link href={e.path} className={`flex-1 border-2 px-2 py-2 border-t-4 border-[#1E1E1EFF] border-solid grid place-content-center 
                            ${index == active ? ' border-t-[#9089fc] text-[#9089fc]' : ''} `} key={index}>

                            {e.icon}
                        </Link>
                    ))
                }
            </div>
            <div className="h-24"></div>
        </>
    ) : <></>
}

export default TabBar;