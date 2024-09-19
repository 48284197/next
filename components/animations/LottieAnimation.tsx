'use client'
import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const Animation = ({ path, loop, autoplay }) => {
    const animationContainer = useRef(null);
    let anim 
    let anim2 
    useEffect(() => {
        if (animationContainer.current) {
            anim = Lottie.loadAnimation({
                container: animationContainer.current, // 指定动画容器
                path: path, // 动画数据
                loop: true, // 是否循环
                autoplay: true, // 是否自动播放
            });


   

            anim2 = Lottie.loadAnimation({
                container: animationContainer.current, // 指定动画容器
                path: 'https://xuxiweii.s3.bitiful.net/json/Animation - 1725896631029.json', // 动画数据
                loop: true, // 是否循环
                autoplay: true, // 是否自动播放
            });

            anim.addEventListener('complete', () => {
                anim2.play()
              });

            // 保存 anim 实例，以便可以控制动画
            return () => {
                anim.destroy(); // 组件卸载时销毁动画
                // anim2.destroy()
            };
        }

        return () => { }

    }, [path, loop, autoplay]);

    const start = () => {
        anim2.play();
    }
    const paused = () => {
        anim.pause();
    }
    return (
        <>
            <div className='box fixed w-full g-full -z-10' ref={animationContainer} />

                <div className='text-white text-2xl font-bold cursor-pointer' onClick={start}>开始</div>
                <div className='text-white text-2xl font-bold cursor-pointer' onClick={paused}>暂停</div>
        </>
    );
};

export default Animation;