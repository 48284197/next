
type PropsType = {
    data: any
}

const HomeSwiperItem = ({ data }: PropsType) => {
    return (
        <>
            <div className="px-2">
                <div className="relative">
                    <img src={data.image} className="" alt={data.image} />
                    <div className="absolute top-0 left-0 w-full h-full p-5">
                        <div className="text-white text-sm font-bold">以太币</div>
                        <div  className="mt-2 text-white text-3xl font-bold">$5000.12</div>
                        <div className="mt-14  text-white text-xl font-bold">2926869845685255</div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default HomeSwiperItem;