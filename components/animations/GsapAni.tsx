'use client'
import React, { useEffect, useState } from "react";
import { Use3D } from './use3D'
import data from './data'
import * as THREE from 'three'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

let data2 = [{}]

for (let i = 0; i < 3000; i++) {
    if(!data[i]){
        data[i] = {
            x: Math.random() * 6 - 3,
            y: Math.random() * 6 - 3,
            z: Math.random() * 6 - 4

        }
    }

    if(!data2[i]){
        if(i<1900){
            data2[i] = {
                x:Math.random() * 2 - 1,
                y:Math.random() * 2 - 1,
                z:Math.random() * 2 - 1


            }

        }else{
            data2[i] = {
                x: Math.random() * 6 - 3,
                y: Math.random() * 6 - 3,
                z: Math.random() * 6 - 4
    
            }
        }
      
    }

}


type PropsType = {
    children: React.ReactNode
}

async function loadModel() {
    const U3D = new Use3D(document.querySelector('#threecanvas'))
    let res = await Use3D.loadGlbLoader('https://xuxiweii.s3.bitiful.net/models/py-lod300000.glb') as any
    let mesh: any = res.scene.children[0];
    mesh = mesh.geometry.clone()
    let numbers = {
        n: 0.05
    }

    let matrix = new THREE.Matrix4().makeRotationX(Math.PI).makeScale(numbers.n, numbers.n, numbers.n)
    mesh.applyMatrix4(matrix)
    let meshs = new THREE.InstancedMesh(mesh, mesh.material, data.length)






    U3D.init()

    U3D.addObject(meshs)

    U3D.addLoopArr(() => {
        meshs.instanceMatrix.needsUpdate = true;
        const dummy = new THREE.Object3D();
        dummy.scale.set(.5, .5, .5)
        const time = Date.now() * 0.001;
        if (meshs) {

            for (let i = 0; i < data.length; i++) {
                dummy.position.set(data[i].x, data[i].y, data[i].z);
                dummy.rotation.set(time / 2, time / 3, time / 4);
                dummy.updateMatrix();
                meshs.setMatrixAt(i, dummy.matrix);
            }
        }

    })



}

const GsapAni = ({ children }: PropsType) => {
    useEffect(() => {


        loadModel()

        for (let i = 0; i < data.length; i++) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    start: "top 0%", // 动画开始的滚动位置
                    end: "bottom 100%", // 动画结束的滚动位置
                    scrub: 1, // 1表示动画将随着滚动实时更新

                }
            });

            tl.to(data[i], {
                ...data[i]
            }).to(data[i], {
                ...data2[i]
            })
        }


        return () => {

        }
    }, [])

    return (
        <>
            <div id="threecanvas" className="fixed top-0 left-0 w-full h-full z-[-1] bg-black/20"></div>
            {children}
        </>
    );
}

export default GsapAni;