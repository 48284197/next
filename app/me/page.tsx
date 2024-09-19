import MobileNav from "@/components/nav/mobileNav";
import SwiperCom from "@/components/swiper/swiper";

const Me = () => {
    return (
        <>
            <div className='h-10'></div>
            <div className={`text-3xl text-right w-fit  text-white leading-10 px-7`}>
                Good morning, <br></br>
                Jean
                <div className='mt-2 h-1 w-7 rounded bg-[#9089fc]'></div>
            </div>
            <div className='mt-8 px-1'>
                <SwiperCom></SwiperCom>
            </div>
            <div className="mt-8 px-3">
                <MobileNav></MobileNav>
            </div>
        </>
    );
}

export default Me;