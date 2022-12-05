let container = document.querySelector('.container');
        import * as THREE from 'three';
        import { GLTFLoader } from 'GLTFLoader';
        import { RectAreaLightHelper } from 'RectAreaLightHelper';
        import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib';
        import { PointerLockControls } from 'PointerLockControls';
        
        let posz;
        let posx;
        let posy;

        function init() {
            //Key
            let keyboard=[];
            addEventListener('keydown',(e)=>{
                keyboard[e.key] = true;
            })
            addEventListener('keyup',(e)=>{
                keyboard[e.key] = false; 
            })

            function processKeyboard(){
                if(keyboard['w']){
                    controls.moveForward(0.05)
                    posy=camera.position.y
                    posx=camera.position.x
                    posz=camera.position.z
                    function move(){
                        cubeBody2.position.z=posz;
                        cubeBody2.position.y=posy;
                        cubeBody2.position.x=posx;
                    }
                    move()
                }
                if(keyboard['s']){
                    controls.moveForward(-0.05);
                    posy=camera.position.y
                    posx=camera.position.x
                    posz=camera.position.z
                    function move(){
                        cubeBody2.position.z=posz;
                        cubeBody2.position.y=posy;
                        cubeBody2.position.x=posx;
                    }
                    move()
                }
                if(keyboard['d']){
                    controls.moveRight(0.05);
                    posy=camera.position.y
                    posx=camera.position.x
                    posz=camera.position.z
                    function move(){
                        cubeBody2.position.z=posz;
                        cubeBody2.position.y=posy;
                        cubeBody2.position.x=posx;
                    }
                    move()
                }
                if(keyboard['a']){
                    controls.moveRight(-0.05);
                    posy=camera.position.y
                    posx=camera.position.x
                    posz=camera.position.z
                    function move(){
                        cubeBody2.position.z=posz;
                        cubeBody2.position.y=posy;
                        cubeBody2.position.x=posx;
                    }
                    move()
                }
            }
            
            //Scene
            const scene = new THREE.Scene()
            scene.background = new THREE.Color("#E2DFE1");
            
            //Camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
            camera.position.set(0, 1, 5)

            //render
            const renderer = new THREE.WebGLRenderer({antialias: true})
            renderer.setSize(window.innerWidth, window.innerHeight)
            container.appendChild(renderer.domElement)

            //Box
            {
                const geometry = new THREE.BoxGeometry( 10, 1, 10);
			    const material = new THREE.MeshBasicMaterial( { color: 0x808080 } );
                const cube = new THREE.Mesh( geometry, material );
                cube.position.set(0,-0.51,0)
			    scene.add( cube );
            }
            //Box2
            {
                const geometry2 = new THREE.BoxGeometry( 1.23, 0.06, 1.23);
			    const material2 = new THREE.MeshBasicMaterial( { color: 'black' } );
                const cube2 = new THREE.Mesh( geometry2, material2 );
                cube2.position.set(0,0.74,0)
			    scene.add( cube2 );
            }
            // Model gallery
            {
                const loader = new GLTFLoader();
                loader.load('./model/gallery/scene.gltf', gltf => {
                scene.add(gltf.scene);
                }, 
                    function (error) {
                        console.log('Error: ' + error)
                    }
                )
            }
            // Model Lion
            {
                const loader = new GLTFLoader();
                loader.load('./model/lion/scene.gltf', gltf => {
                    gltf.scene.position.set(-1.85,6.94,-7);
                    gltf.scene.scale.set(0.65,0.65,0.65)
                    scene.add(gltf.scene);
                    },
                    function (error) {
                        console.log('Error: ' + error)
                    }
                )
            }
            //Лого
            {
                const geometryLogo = new THREE.BoxGeometry( 1.3, 0.61, 0.01);
                const textureLogo=new THREE.TextureLoader().load('image/logo.png')
			    const materialLogo = new THREE.MeshBasicMaterial( { map:textureLogo,flatShading:false } );
                const cubeLogo = new THREE.Mesh( geometryLogo, materialLogo );
                cubeLogo.position.set(0,0.4,0.68)
			    scene.add( cubeLogo );
            }
            //Картина
            {
                const geometryImage = new THREE.BoxGeometry( 1.5, 2, 0.01);
                const textureImage=new THREE.TextureLoader().load('image/image1.jpg')
			    const materialImage = new THREE.MeshBasicMaterial( { map:textureImage,flatShading:true } );
                const cubeImage = new THREE.Mesh( geometryImage, materialImage );
                cubeImage.position.set(-4,1.5,-5)
			    scene.add( cubeImage );
            }
            //Картина2
            {
                const geometryImage2= new THREE.BoxGeometry( 1.5, 2, 0.01);
                const textureImage2=new THREE.TextureLoader().load('image/image1.jpg')
			    const materialImage2 = new THREE.MeshBasicMaterial( { map:textureImage2,flatShading:true } );
                const cubeImage2 = new THREE.Mesh( geometryImage2, materialImage2 );
                cubeImage2.position.set(-2,1.5,-5)
			    scene.add( cubeImage2 );
            }
            //Картина3
            {
                const geometryImage3 = new THREE.BoxGeometry( 1.5, 2, 0.01);
                const textureImage3=new THREE.TextureLoader().load('image/image1.jpg')
			    const materialImage3 = new THREE.MeshBasicMaterial( { map:textureImage3,flatShading:true } );
                const cubeImage3 = new THREE.Mesh( geometryImage3, materialImage3 );
                cubeImage3.position.set(0,1.5,-5)
			    scene.add( cubeImage3 );
            }
            //Картина4
            {
                const geometryImage4= new THREE.BoxGeometry( 1.5, 2, 0.01);
                const textureImage4=new THREE.TextureLoader().load('image/image1.jpg')
			    const materialImage4 = new THREE.MeshBasicMaterial( { map:textureImage4,flatShading:true } );
                const cubeImage4 = new THREE.Mesh( geometryImage4, materialImage4 );
                cubeImage4.position.set(2,1.5,-5)
			    scene.add( cubeImage4 );
            }
            //Картина5
            {
                const geometryImage5= new THREE.BoxGeometry( 1.5, 2, 0.01);
                const textureImage5=new THREE.TextureLoader().load('image/image1.jpg')
			    const materialImage5 = new THREE.MeshBasicMaterial( { map:textureImage5,flatShading:true } );
                const cubeImage5 = new THREE.Mesh( geometryImage5, materialImage5 );
                cubeImage5.position.set(4,1.5,-5)
			    scene.add( cubeImage5 );
            }

            //Light
            {
                const light = new THREE.DirectionalLight(0xffffff, 1)
                light.position.set(-2, 0, 10)
                light.lookAt(0, -1, 0)
                scene.add(light)
            }
            {
                const light = new THREE.DirectionalLight(0xffffff, 1)
                light.position.set(2, 0, 5)
                light.lookAt(0, 1, 0)
                scene.add(light)
            }
            RectAreaLightUniformsLib.init();
            {
                const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
                rectLight.position.set(-10,0,0)
                rectLight.rotation.y = Math.PI + Math.PI/4;
                scene.add(rectLight)
            }
            {
                const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
                rectLight.position.set(10,0,0)
                rectLight.rotation.y = Math.PI - Math.PI/4;
                scene.add(rectLight)
            }
            
            //Point lock controls
            const controls = new PointerLockControls( camera, container );
            const clock = new THREE.Clock(true);
            let btn=document.getElementById('btn')
            btn.addEventListener('click',()=>{
                controls.lock();
            })

            //Cannon
            //Cannon world
            const world = new CANNON.World() // Создаём мир
            world.gravity.set(0, -9.8, 0)
            //Плоскость пол
            let groundBody = new CANNON.Body({
                mass: 0
            }) //Создаём тело
            let groundShape = new CANNON.Plane(0.1, 0.2)
            groundBody.addShape(groundShape)
            groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2) //Поворот
            world.addBody(groundBody)
            window.addEventListener('resize', onWindowResize, false)
            
            // Плоскости - стенки
            //plane
            var planeBody = new CANNON.Body({
                mass: 0,
                position: new CANNON.Vec3(0, 0, 5) // Изменяем позицию 
            });
            var planeShape = new CANNON.Plane(0.1 ,0.2);
            planeBody.addShape(planeShape);
            planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), Math.PI); //Поворачиваем
            world.addBody(planeBody);
            
            //plane2
            var planeBody1 = new CANNON.Body({
                mass: 0,
                position: new CANNON.Vec3(-5, 0, 0)
            });
            var planeShape1 = new CANNON.Plane(0.1 ,0.2);
            planeBody1.addShape(planeShape1);
            planeBody1.quaternion.setFromAxisAngle(new CANNON.Vec3(0,1,0), Math.PI / 2);
            world.addBody(planeBody1);
            //plane3
            var planeBody2 = new CANNON.Body({
                mass: 0,
                position: new CANNON.Vec3(5, 0, 0)
            });
            var planeShape2 = new CANNON.Plane(0.1 ,0.2);
            planeBody2.addShape(planeShape2);
            planeBody2.quaternion.setFromAxisAngle(new CANNON.Vec3(0,1,0), -Math.PI / 2);
            world.addBody(planeBody2);
            //plane4
            var planeBody3 = new CANNON.Body({
                mass: 0,
                position: new CANNON.Vec3(0, 0, -5)
            });
            var planeShape3 = new CANNON.Plane(0.1 ,0.2);
            planeBody3.addShape(planeShape2);
            planeBody3.quaternion.setFromAxisAngle(new CANNON.Vec3(0,0,1), -Math.PI);
            world.addBody(planeBody3);
            //cube lion
            var cubeBody = new CANNON.Body({
                mass: 0,
                position: new CANNON.Vec3(0, 0, 0)
            })
            var cubeShape = new CANNON.Box(new CANNON.Vec3(0.6,  1, 0.6)) //(new CANNON.Vec3(0.3,  0.5 , 0.2)) - размеры скелета куба
            cubeBody.addShape(cubeShape)
            world.addBody(cubeBody)
            // cube camera
            var cubeBody2 = new CANNON.Body({
                mass: 20,
                position: new CANNON.Vec3(0, 1, 3) //Позиция шара
            })
            var cubeShape2 = new CANNON.Box(new CANNON.Vec3(0.6,  1, 0.6)) // 0.5 - радиус сферы
            cubeBody2.addShape(cubeShape2)
            world.addBody(cubeBody2)

            //resize
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight)
            }
            
            //Audio background
            /*{
                const listener= new THREE.AudioListener();
                camera.add(listener);
                const audioLoader= new THREE.AudioLoader();
                const backgroundSound= new THREE.Audio(listener);
                audioLoader.load('./audio/backgroundmusic.mp3', function ( buffer ) {
                    backgroundSound.setBuffer(buffer);
                    backgroundSound.setLoop(true);
                    backgroundSound.setVolume(0.2);
                    addEventListener('click', function(event) {
                        backgroundSound.play();
                        
                    });
                    addEventListener("keydown", function(event) {
                        if (event.keyCode == 87) //w
                        backgroundSound.stop();
                    });
                });
            }*/
            // Animate
            function animate() {
                requestAnimationFrame(animate)
                processKeyboard()
                world.step(1 / 60)
                //cube camera
                camera.position.z = cubeBody2.position.z 
                camera.position.y = cubeBody2.position.y
                camera.position.x = cubeBody2.position.x
                
                renderer.render(scene, camera)
            }
            animate()
        }
        init()