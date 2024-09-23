import { musicType } from "@/type/searchMusicType";

const MusicTem = ({ data ,onPlay}: { data: musicType,onPlay:Function }) => {
    return (
        <>
            <div onClick={()=>onPlay(data.id)}> {data.name}</div>
        </>
    );
}

export default MusicTem;