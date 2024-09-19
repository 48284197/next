import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import arr3 from './data'


let objArr = arr3.map((item) => {

    return {

        x: item ? item[0] : (Math.random() - 0.5) * 10,

        y: item ? item[1] : (Math.random() - 0.5) * 10,

        z: item ? item[2] : (Math.random() - 0.5) * 10,

    }

})

console.log(objArr)

export const init3D = async (dom: HTMLElement) => {

    var scene, camera, controls, renderer, ambient, directional, index = 0;



    var bgc = '#15162f';



    //初始化一个场景

    function initScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(bgc);
    }

    // 初始化相机

    function initCamera() {

        //实例化一个相机，内部参数（角度，div的宽/div的高，距离视野中心最近距离，同前最远距离）

        //角度：类似于手机狭角、广角的效果

        //画面比例：div的宽高自己定义，全屏展示的话就按照官网给的window.innerWidth/window.innerHeight即可

        //视野最大（小）远近距离根据自身项目来定

        camera = new THREE.PerspectiveCamera(

            60,

            dom?.offsetWidth / dom?.offsetHeight,


            0.1,

            100

        );

        camera.position.set(-1,1,-1); //相机位置

        camera.rotation.y = Math.PI

        camera.lookAt(new THREE.Vector3(0, 0, 0)); // 相机视野中心

        //相机所展示画面的比例

        camera.aspect =

            dom.offsetWidth /

            dom.offsetHeight;

        //更新相机投影变换矩阵

        camera.updateProjectionMatrix();

        //将相机加入到场景中

        scene.add(camera);

    }

    // 初始化渲染器

    async function initRenderer() {

        renderer = new THREE.WebGLRenderer({

            alpha: true, // 是否可以设置背景色透明

            antialias: true, // 抗锯齿

            logarithmicDepthBuffer: true, // 图层叠加闪烁问题

            precision: 'lowp', // 着色器精度

            preserveDrawingBuffer: true, // 开启图层缓冲区

            autoClear: true,

        });

        renderer.setPixelRatio(window.devicePixelRatio); // 设置分辨率与电脑的分辨率相同

        renderer.setSize(

            dom.offsetWidth,

            dom.offsetHeight

        );



        renderer.shadowMap.enabled = true; // 渲染器渲染阴影效果

        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 阴影类型

        renderer.outputEncoding = THREE.sRGBEncoding; // 色域，鲜明渲染，常规rgb颜色渲染

        // 把这个canvas渲染到指定div里，不指定div则把setSize指定宽高

        dom.appendChild(renderer.domElement);

    }

    // 初始化控制器

    function initControls() {

        controls = new OrbitControls(camera, renderer.domElement);

        // controls.listenToKeyEvents(window); //监听操作，具体有哪些可以去底层扒一扒

        controls.enableDamping = true; // 开启控制阻尼,是否有惯性

        controls.dampingFactor = 0.05; // 阻尼强度,鼠标拖拽旋转灵敏度

        controls.enableZoom = true; // 是否可以缩放

        controls.minDistance = 1; // 相机距离原点最近距离

        controls.maxDistance = 100; // 相机距离原点最远距离

        controls.enablePan = false; // 是否开启右键拖拽

        // controls.maxPolarAngle = Math.PI / 1.8; // 最大角度，实际项目中一些模型限制视角到地下

        controls.maxPolarAngle = Math.PI;

        controls.screenSpacePanning = false; //false时只能前后左右平移，不能上下平移，true时哪个方向都可以

        // controls.target = new THREE.Vector3(0, 0, 0); // 设置控制器的旋转原点

        controls.dispose()



    }

    // 更新，实时渲染的时候加进去，有控制交互，就渲染

    function update() {

        controls.update();

    }

    // 光源

    function initLight() {

        // 环境光AmbientLight,影响整个场景的光源

        ambient = new THREE.AmbientLight(0xffffff, 1);

        ambient.name = '环境光';

        scene.add(ambient);



        // 平行光DirectionalLight，模拟太阳光，用于渲染阴影

        directional = new THREE.DirectionalLight(0xffffff, 1.2, 100); // 模拟远处类似太阳的光源

        directional.name = '平行光';

        directional.position.set(0, 3, -2);

        directional.castShadow = true; // 告诉平行光需要开启阴影投射

        // directional.shadowDarkness = 1;

        directional.shadow.mapSize.width = 512 * 4; // 阴影分辨率，默认512

        directional.shadow.mapSize.height = 512 * 4;

        // 平行光范围

        // directional.shadow.camera.left = -100;

        // directional.shadow.camera.right = 100;

        // directional.shadow.camera.top = 100;

        // directional.shadow.camera.bottom = -100;

        directional.shadow.camera.near = 0.5;

        // directional.shadow.camera.far = 1500;

        directional.shadow.bias = 0.0001; // 阴影偏移，否则会有阴影锯齿出现，阴影条纹，嗯写过的人应该都遇到过，很恶心的东西，可以用这个bias稍作偏移，具体参数调整起来比较烦



        scene.add(directional);

        // 平行光辅助线，添加辅助线后可以看到平行光笼罩的范围，用于细节调整

        // const directionalhelper = new THREE.CameraHelper(directional.shadow.camera);

        // directionalhelper1.visible = true;

        // 平时不用，注掉这个add

        // scene.add(directionalhelper);

    }


    // 初始化

    function init() {

        initRenderer(); // 渲染器

        initScene(); // 基础场景

        initCamera(); // 相机

        initControls(); // 控制器

        initLight(); // 光源

        // initGrid(); //网格

        initModel(); // 模型







    }

    // 循环渲染页面场景

    function render() {
        index++
        update();
        requestAnimationFrame(render); // 执行一个动画.并在动画执行后重新渲染
        // 传统渲染器，如果使用shader着色器，则注掉这个，增加效果合成器，增加通道渲染
        renderer.render(scene, camera);

        

    }


    function initModel() {

        index++

        let meshs

        const gltf_loader = new GLTFLoader();



        gltf_loader.load(

            'https://xuxiweii.s3.bitiful.net/models/py-lod300000.glb',

            (gltf) => {

                let mesh = gltf.scene.children[0];

                mesh = mesh.geometry.clone()

                // const material = new THREE.MeshPhongMaterial({ color: 0x457575 });

                let numbers = {

                    n: 0.1

                }

                let matrix = new THREE.Matrix4().makeRotationX(Math.PI).makeScale(numbers.n, numbers.n, numbers.n)

                mesh.applyMatrix4(matrix)

                const color = new THREE.Color();

                // const blossomPalette = [0xF20587, 0xF2D479, 0xF2C879, 0xF2B077, 0xF24405];

                meshs = new THREE.InstancedMesh(mesh, mesh.material, 3000)

                for (let i = 0; i < 3000; i++) {

                    matrix.setPosition(objArr[i].x, objArr[i].y, objArr[i].z)
                    meshs.setMatrixAt(i, matrix)

                    // meshs.setColorAt(i, new THREE.Color(Math.random() * 0xffffff))

                    // color.setHex(blossomPalette[Math.floor(Math.random() * blossomPalette.length)]);
                    color.setHex(0xfff8f8);

                    meshs.setColorAt(i, color);

                }

                // meshs.rotation.y = Math.PI

                scene.add(meshs)



            },

            onProgress,

            onError

        );

    }



    var onProgress = function (xhr) {

        if (xhr.lengthComputable) {

        }

    };

    var onError = function (err) {

        console.log('err', err);

    };



    init();

    render();

};


