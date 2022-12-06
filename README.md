<h1 align="center">Всем привет!
<img src="https://github.com/KonSontin/gif/blob/master/cat_programmer.gif" height="32"/></h1>
<h3 align="center">Сборка 3D галлереи с помощью библиотек: Three.js, Cannon js</h3>
<hr>
<h4>Подключение в HTML:</h4>

```
"imports": {
    "three": "/three js/build/three.module.js",
    "OrbitControls": "/three js/examples/jsm/controls/OrbitControls.js",
    "GLTFLoader": "/three js/examples/jsm/loaders/GLTFLoader.js",
    "RectAreaLightHelper": "/three js/examples/jsm/helpers/RectAreaLightHelper.js",
    "RectAreaLightUniformsLib": "/three js/examples/jsm/lights/RectAreaLightUniformsLib.js",
    "PointerLockControls": "/three js/examples/jsm/controls/PointerLockControls.js"
}
```

<br>
<h4>Подключение в JS:</h4>

```
import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { RectAreaLightHelper } from 'RectAreaLightHelper';
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib';
import { PointerLockControls } from 'PointerLockControls';
```

<hr>
<h3>Three js</h3>
<h4>Для управления камеры и передвижения по сцене, используется Point lock controls:</h4>

```
//Point lock controls
const controls = new PointerLockControls( camera, container );
const clock = new THREE.Clock(true);
let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    controls.lock();
})
```

<hr>
<h3>Cannon js</h3>
<h4>С помощью Cannon настроили физику, создали скелет пола (чтобы не проваливаться) и стены.</h4>

```
//Cannon world
const world = new CANNON.World() // Создаём мир
world.gravity.set(0, -9.8, 0)
//Плоскость пол
let groundBody = new CANNON.Body({
    mass: 0
})
let groundShape = new CANNON.Plane(0.1, 0.2)
groundBody.addShape(groundShape)
groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2) //Поворот
world.addBody(groundBody)
window.addEventListener('resize', onWindowResize, false)
```

<h4>Создали Cannon скелет для камеры и связали. (Так как настроена физика, нужно привязать скелет к камере, для столкновений со стенками) </h4>

```
    //cube camera
    camera.position.z = cubeBody2.position.z 
    camera.position.y = cubeBody2.position.y
    camera.position.x = cubeBody2.position.x
    renderer.render(scene, camera)
```

<h4>Чтобы управлять камерой и скелетом создали нехитрый обработчик .</h4>

```
addEventListener('keydown',(e)=>{
    keyboard[e.key] = true;
})
addEventListener('keyup',(e)=>{
    keyboard[e.key] = false; 
})
```

<h4>Функция управлением камерой и объектом.(В функции мы двигаем камеру, параметры которой передаются в скелет той же камеры)</h4>

```
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
```
<h4>Ознакомьтесь внимательно с кодом. Для запуска используйте Open Server</h4>
<small>Проект не закончен, выкладываю вдруг кому пригодиться</small><img src="https://github.com/KonSontin/gif/blob/master/cat.gif" height="32"/>
