
import { FaBuysellads } from "react-icons/fa";
// import { AiOutlineRight } from "react-icons/ai";
// const menu = [
//     {
//         name: '我的信息',
//         icon: <FaBuysellads />
//     },
//     {
//         name: '我的信息',
//         icon: <FaBuysellads />
//     },
//     {
//         name: '我的信息',
//         icon: <FaBuysellads />
//     },
//     {
//         name: '我的信息',
//         icon: <FaBuysellads />
//     },
//     {
//         name: '我的信息',
//         icon: <FaBuysellads />
//     },
// ]
const MobileNav = () => {
    return (
        <>
            <div className="w-full flex gap-4">
                <div className="flex justify-between w-full py-2 px-4 items-center rounded-xl">
                    <div className="left flex gap-4 items-center">
                        <div className="grid place-content-center  rounded-lg bg-[#8F92A1FF] w-8 h-8">
                            <FaBuysellads className="text-white/40" />
                        </div>
                        <div className="flex-1 grid gap-2">
                            <p className=" text-white font-semibold ">我的信息</p>
                            <p className="text-xs text-white/40">查看我的信息</p>
                        </div>
                    </div>
                    <div className="right font-bold px-2 py-1 rounded-lg bg-[#8F92A1FF]">
                        Go
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNav;