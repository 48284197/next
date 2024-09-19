export default function Item({ data }) {
    return (
        <div className="flex flex-col gap-2 bg-lime-400 rounded-md pb-2">
            <img src={data?.album?.picUrl} alt="" className={` object-cover rounded-md`} />
            <div className="flex flex-row gap-2 items-center px-2">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="text-sm font-semibold text-gray-700">{data.album.name}</div>
            </div>
            <div className="text-sm px-2 text-gray-500">{data?.album?.name}</div>
        </div>
    )
}