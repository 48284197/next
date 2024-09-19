'use client'
import { RiBtcFill } from "react-icons/ri";
import { TbCurrencyDogecoin } from "react-icons/tb";
import { TbCurrencyEthereum } from "react-icons/tb";


const ICONS = {
    BTC: <RiBtcFill />,
    DOGE: <TbCurrencyDogecoin />,
    ETH: <TbCurrencyEthereum />,
    LTC: <RiBtcFill />,
}

const CLASSS = {
    BTC: 'cardModel-1 ',
    DOGE: 'cardModel-2 ',
    ETH: 'cardModel-3 ',
    LTC: 'cardModel-4 ',
}

const HomeTopCard = ({ mode = 1 }: { mode: number }) => {
    const arr = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            price: "5999",
            change: "+6%",
        },
        {
            name: "Dogecoin",
            symbol: "DOGE",
            price: "0.015",
            change: "+6%",
        },
        {
            name: "Ethereum",
            symbol: "ETH",
            price: "4999",
            change: "+6%",
        },
        {
            name: "Litecoin",
            symbol: "LTC",
            price: "2999",
            change: "+6%",
        },

    ] as any[]

    arr.forEach((item) => {
        item.icon = ICONS[item.symbol]
        item.class = CLASSS[item.symbol]
    })


    return (
        <div className={`grid ${mode == 1 ? 'grid-cols-2' : 'grid-cols-1'} text-white gap-2`}>
            {arr.map(e => (

                <div key={e.symbol} className={`rounded-xl h-40 box-content p-4 flex flex-col justify-between ${e.class}`}>
                    <div className="">
                        <div className="flex justify-between items-center">
                            <div className="text-xs">{e.name}</div>
                            <div className="text-xs text-white/70 scale-95">{e.change}</div>
                        </div>
                        <div className="mt-1.5 text-sm font-bold">{e.price}</div>
                    </div>
                    <div className="flex gap-1 items-center">
                        {e.icon}
                        Bitcoin
                    </div>

                </div>
            ))}
        </div>
    )
}

export default HomeTopCard;