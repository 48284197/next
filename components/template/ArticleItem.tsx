import ColorLoading from "../loading/ColorLoading"
import useTranstion from "@/store/transtion"
export default function ArticleItem({ data, loading, onLoaded }) {

    const transtion = useTranstion()


    function clickItem(e) {
        let pos = e.currentTarget.getBoundingClientRect()
        transtion.setInfo({
            w: pos.width,
            h: pos.height,
            x: pos.x,
            y: pos.y,
            top: document.documentElement.scrollTop
        })
    }


    return (
        <ColorLoading loading={loading}>
            <div onClick={clickItem} className="block">
                <div className={`will-translate flex flex-col  h-fit gap-2 bg-lime-400 rounded-md z-1 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                    <img src={data?.url} alt="" className={` object-cover rounded-md block`} onLoad={() => onLoaded(12)} />
                </div>

            </div>

        </ColorLoading>

    )
}