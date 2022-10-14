import { Component, OnInit } from '@angular/core';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshStandardMaterial({ color: 0x233a77});
    const torus = new THREE.Mesh( geometry, material)
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight)
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement)

    function addStar(){
      const geometry = new THREE.SphereGeometry(0.25, 24, 24)
      const material = new THREE.MeshStandardMaterial({color: 0xffffff})
      const star = new THREE.Mesh(geometry, material);

      const vertices = []
      for ( let i = 0; i < 10000; i ++ ) {

        const x = THREE.MathUtils.randFloatSpread( 2000 );
        const y = THREE.MathUtils.randFloatSpread( 2000 );
        const z = THREE.MathUtils.randFloatSpread( 2000 );

        vertices.push( x, y, z );

      }

      const spaceTexture = new THREE.TextureLoader().load('space.png');
      scene.background = spaceTexture;
      star.position.set(vertices[0], vertices[1], vertices[3])
      scene.add(star)
      Array(200).fill(1, 25).forEach(addStar)
    }



    camera.position.setZ(30);
    const animate = function () {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
      controls.update();

      renderer.render(scene, camera);
    };
    animate();
  }

}
