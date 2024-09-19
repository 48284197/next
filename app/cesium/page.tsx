'use client'

import { useEffect } from 'react';
import * as Cesium from 'cesium';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MzQ5NWM0Yy00YWY4LTQzMzctOTgxMy00OGEyOTViZmE5MDQiLCJpZCI6MjM4NjE3LCJpYXQiOjE3MjUyODU1Nzl9.8rpQj_544zW-oHmR1m-OQTE3tjyD_CfAy4obZlXvV2E'
export default function CesiumPage() {

    const initCesium = () => {
        const viewer = new Cesium.Viewer('cesiumContainer', {
            infoBox: false, // 禁用沙箱，解决控制台报错
        });
    }

    useEffect(() => {
        initCesium()
    })
    return (
        <>
            <div id="cesiumContainer"></div>
        </>
    );
}