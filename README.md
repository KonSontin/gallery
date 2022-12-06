<h1 align="center">Всем привет!
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
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
