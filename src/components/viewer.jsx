import React from "react";
import { useEffect } from "react";
import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { useParams } from "react-router-dom";
import data from '/public/modelsData';
import { Link } from "react-router-dom";



export default function Viewer() {

  //--------------GET MODEL PATH--------------//

  let params = useParams();
  var obj = data.find(o => o.id === params.id);
  var asset = obj.path;

  useEffect(() => {
    

    //--------------MODEL LOADER--------------//

    const canvasId = document.getElementById('c');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x7b95e0 );
    const loader = new GLTFLoader();

    loader.load( asset , function(glb) {
      
      const root = glb.scene;
      
      root.scale.set(4,4,4);
      root.position.set(0,0.6,0)
      scene.add(root);
    });

    //--------------CAMERA--------------//

    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(3,2.5,9);
    camera.lookAt( new THREE.Vector3(0,0,0));

    //--------------RENDERER--------------//

    const renderer = new THREE.WebGL1Renderer({
      canvas: canvasId,
      antialias: true,
    })
    
    renderer.shadowMap.enabled = true;
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    //--------------FLOOR--------------//

   

    const size = 80;
    const divisions = 25;
    const gridHelper = new THREE.GridHelper( size, divisions, 0x04635d, 0x04635d);
    
    scene.add( gridHelper );
    

    //--------------LIGHTING--------------//

    const ambientLight = new THREE.AmbientLight(0xffffff,2);
    scene.add(ambientLight);

    const spotLight = new THREE.DirectionalLight(0xffffff,9);
    spotLight.isDirectionalLightShadow = true;
    spotLight.position.set(0,64,32);
    scene.add(spotLight);

    //--------------INTIALIZE--------------//

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    //--------------RESIZE--------------//

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener("resize", onWindowResize, false);
   
    
  })
  

  return (
    <div id = "canva">
      <canvas id="c"> 
      </canvas>
      <Link id="viewerCloseId" className="viewerBtn top-left" to = "/">
          <img src="./images/closeicon.png" alt="" />
        </Link>

        <div id="viewerVrId" className="viewerBtn top-right">
          <img src="./images/vricon.png" alt="" />
        </div>
    </div>
  )
}
  

  


