import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader";


export class Use3D {
    container
    camera
    renderer
    scene
    loopArr
    args
    controls

    constructor(container, args?) {
        this.container = container
        this.camera = null
        this.renderer = null
        this.scene = null
        this.loopArr = []
        this.args = args
        this.controls = null

    }

    init() {

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0000001a);
        //相机参数
        const fov = 60; // fov = Field Of View
        const aspect = this.container.clientWidth / this.container.clientHeight;
        const near = 0.1;
        const far = 60;

        // PerspectiveCamera
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0.3, 0.3, 4);


 
        // Create a directional light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 8, 8);
        light.castShadow = true;
        this.scene.add(light);

        var ambientLight = new THREE.AmbientLight(0xffffff, 1) // 创建环境光

        this.scene.add(ambientLight);

        // 创建点光源辅助对象
        // const pointLightHelper = new THREE.DirectionalLightHelper(light, 1)
        // this.scene.add(pointLightHelper)


        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.shadowMap.enabled = true; // 启用阴影


        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        if(this.container.childElementCount){
            this.container.replaceChild(this.renderer.domElement, this.container.children[0])
        }else{
            this.container.appendChild(this.renderer.domElement)

        }



        const animate = () => {
            // 在这里编写渲染循环的逻辑
            // ...

            // renderer.render(scene, camera);
            this.render();

            requestAnimationFrame(animate); // 手动调用 requestAnimationFrame 来启动动画循环
        };
        animate()

        this.onWindowResize()

        if (this.args?.controls) {
            this.useControls()
        }



    }

    loadCameraAni(url) {
        let camera = this.camera
        return new Promise(res => {
            let loader = new MMDLoader()
            loader.loadAnimation(url, camera, function (cameraAnimation) {
                res({ camera, cameraAnimation })
            });
        })
    }


    render() {
        this.renderer.render(this.scene, this.camera);

        for (let i = 0; i < this.loopArr.length; i++) {
            this.loopArr[i]()
        }
    }

    addLoopArr(fn) {
        this.loopArr.push(fn)
    }

    addObject(o) {
        this.scene.add(o)
    }

    onWindowResize() {
        window.addEventListener('resize', (e) => {
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        });
    }

    useControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.minDistance = 2;
        this.controls.maxDistance = 100;
        this.controls.update();
    }


    getCamera() {
        return this.camera
    }

    static async loadBgm(data) {
        return new Promise(async (res) => {
            const audioLoader = new THREE.AudioLoader();
            const listener = new THREE.AudioListener();
            const audio = new THREE.Audio(listener);
            audioLoader.load(data, (buffer) => {
                audio.setBuffer(buffer);
                res(audio)
            });
        })
    }
    static async loadGlbLoader(url) {
        return new Promise(async (res) => {
            const loader = new GLTFLoader();
            loader.load(url, (gltf) => {
                res(gltf)
            });
        })
    }

}


