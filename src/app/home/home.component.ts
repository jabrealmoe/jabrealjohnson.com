import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
    const cube = new THREE.Mesh( geometry, material)
    scene.add(cube);
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }

}
