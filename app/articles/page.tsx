'use client'

import { useEffect, useState } from "react"
import ArticleItem from "@/components/template/ArticleItem"
import WaterFallFlow from '@/components/WaterfallFlow'


export default function Articles() {

    const [cols, setCols] = useState(0)
    const [data, setData] = useState([])
    useEffect(() => {
        let arr = new Array(150).fill(0).map((_, index) => {
            return {
                title: `文章标题${index}`,
                desc: `文章描述${index}`,
                url: urls[Math.ceil(Math.random() * 2)],
                id: index
            }
        })
        setData(arr as [])
        let fn = () => {
            if (window.innerWidth < 768) {
                setCols(3)
            } else if (window.innerWidth < 1440) {
                setCols(4)
            } else if (window.innerWidth < 1920) {
                setCols(5)
            } else {
                setCols(6)
            }
        }
        fn()
        window?.addEventListener('resize', fn)
    }, [])

    let urls = [
        'https://sns-webpic-qc.xhscdn.com/202408142049/7b1f0f3a4173aa75a02d964890b6c11a/1040g2sg3165rphsv0s705o5v905g9aim9t9m6f8!nc_n_webp_mw_1',
        'https://sns-webpic-qc.xhscdn.com/202408142049/d6ea5a5fee22ba31ad29a841ec21899f/1040g2sg315hrr7ckhe705nidls4082114oseqko!nc_n_webp_mw_1',
        'https://sns-webpic-qc.xhscdn.com/202408142049/a4deb5cba9bd7a81823e71092a5c4815/1040g2sg3163r8a9vgs0049eal0h4tk8mef5ujog!nc_n_webp_mw_1',
    ]



    const [loading, setloading] = useState(true)

    let n = 0
    const load = () => {
        n++
        if (n >= data.length) {
            setloading(false)
        }
    }

    return (
        <div className="flex flex-col  min-h-screen">
            <div id="containter" className="w-5/6 px-4 pb-4 mx-auto">

                <WaterFallFlow gap={10} cols={cols} >

                    {data.map((_item, index) => {
                        return <ArticleItem key={index} data={_item} loading={loading} onLoaded={load}></ArticleItem>
                    })}
                </WaterFallFlow>
            </div>
        </div>

    )
}