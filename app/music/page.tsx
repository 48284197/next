'use client'

import { useEffect } from 'react'
import K from 'keyboardjs'
import { useReactive } from 'ahooks'
import { AiOutlineSearch } from "react-icons/ai";
import { musicType } from '@/type/searchMusicType';
import MusicTem from '@/components/template/MusicTem';


export default function Music() {


  const MusicState = useReactive({
    search: false,
    searchValue: '',
    searchResult: [] as musicType[],
    searchLoading: false,
    searchClass: '',
    fullscreen: false,
    musicDetail: {},
    bg: {
      backgroundImage: `url(https://www4.bing.com//th?id=OHR.MunichBeerfest_ZH-CN0304560562_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backdropFilter: 'blur(10px)',
      filter: 'blur(2px)'
    }
  })



  const keyMap = {
    'ctrl + f': () => {
      MusicState.search = !MusicState.search
    },
    'enter': () => {
      searchMusic()
    }
  }

  let play = async () => {
    // let lyric =await (await fetch('/music/lyric?id=' + id)).json()
    // let url = (await (await fetch('/music/song/url?id=' + id)).json()).data[0].url


    
  }


  let searchMusic = async () => {
    MusicState.searchLoading = true
    const res = await fetch(`/music/search?keywords=${MusicState.searchValue}`)
    const data = await res.json()
    MusicState.searchResult = data.result.songs as musicType[] || null
    MusicState.searchLoading = false
  }


  useEffect(() => {
    Object.keys(keyMap).forEach(key => {
      K.bind(key, keyMap[key])
    })



    return () => {
      Object.keys(keyMap).forEach(key => {
        K.unbind(key, keyMap[key])
      })
    }
  }, [])
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[200vh] text-white" >

      </div>

      <div className='fixed top-0 left-0 w-full h-screen ' style={MusicState.bg}>

      </div>


      <div className={`dialog fixed top-0 left-0 bg-white/0 w-full h-screen grid place-content-center ${MusicState.search ? 'block' : 'hidden'}`}>
        <div className='relative bg-white/50 rounded-md px-4 py-2'>
          <div className="search flex items-center gap-1 text-white border-b-[1px] border-black/30 border-solid pb-2">
            <AiOutlineSearch />
            <input type="text" className='w-96 px-2 py-1 bg-white/0 text-black rounded-md  outline-none font-bold' placeholder='搜索'
              value={MusicState.searchValue} onChange={(e) => {
                MusicState.searchValue = e.target.value
              }} />
          </div>
          <div className='border-b-1 border-black'></div>
          <div className='w-[50vw] h-[50vh] grid gap-2 scroll-m-3 overflow-scroll py-4 no-scrollbar'>
            {
              MusicState.searchResult.map((item, index) => (
                <MusicTem data={item} key={index} onPlay={play}></MusicTem>
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}