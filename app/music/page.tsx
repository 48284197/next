'use client'

import { useEffect } from 'react'
import K from 'keyboardjs'
import { useReactive } from 'ahooks'
import { AiOutlineSearch } from "react-icons/ai";

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari 和 Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
}





export default function Music() {
  const MusicState = useReactive({
    search: false,
    searchValue: '',
    searchResult: [],
    searchLoading: false,
    searchClass: '',
    fullscreen: false,
    bg:{
      backgroundImage: `url(https://www4.bing.com//th?id=OHR.MunichBeerfest_ZH-CN0304560562_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backdropFilter: 'blur(10px)',
      filter: 'blur(2px)'
    }
  })



  const keyMap = {
    'ctrl + f': (e) => {
      MusicState.search = !MusicState.search
    },
    'ctrl + s': (e) => {
      MusicState.fullscreen = !MusicState.fullscreen
      MusicState.fullscreen ? openFullscreen(document.documentElement) : document.exitFullscreen()

    },

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



      <div className={`dialog fixed top-0 left-0 bg-white/0 w-full h-screen grid place-content-center ${MusicState.search ? 'block' : 'hidden'}`}>
        <div className='relative bg-white/50 rounded-md px-4 py-2'>
          <div className="search flex items-center gap-1 text-white">
            <AiOutlineSearch />
            <input type="text" className='w-96 px-2 py-1 bg-white/0 text-black rounded-md  outline-none font-bold' placeholder='搜索' />
          </div>
          <div className='border-b-1 border-black'></div>
          <div className='w-96 h-96 '></div>
        </div>
      </div>
    </>
  )
}