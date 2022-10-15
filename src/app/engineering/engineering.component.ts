import {Component, OnInit, Renderer2} from '@angular/core';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {

  listener;


  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      console.log(this.getYPosition(e));
    });
  }


  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnDestroy(): void {
    this.listener();
  }

  ngOnInit(): void {
    console.log("in here")
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshStandardMaterial({ color: 0x7f00ff});
    const torus = new THREE.Mesh( geometry, material)
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(2, 2, 2);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight)
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement)

    //addstar
    function addStar(){
      const geometry = new THREE.SphereGeometry(0.25, 24, 24)
      const material = new THREE.MeshStandardMaterial({color: 0xffff66})
      const star = new THREE.Mesh(geometry, material);
      const [x,y,z] = Array(3).fill(null).map(()=> THREE.MathUtils.randFloatSpread(100))
      star.position.set(x, y, z);
      scene.add(star)
    }

    Array(200).fill(null).forEach(addStar)
    const spaceTexture = new THREE.TextureLoader().load("https://upload.wikimedia.org/wikipedia/commons/0/00/Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg")
    scene.background = spaceTexture
    camera.position.setZ(30);

    const moontexture = new THREE.TextureLoader().load("https://upload.wikimedia.org/wikipedia/commons/b/b8/Exploding_planet.jpg");
    const fireball = new THREE.Mesh(
      new THREE.SphereGeometry(4, 36, 36),
      new THREE.MeshStandardMaterial({
        map: moontexture,
      })
    )


    const animate = function () {
      fireball.rotateY(0.01);
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
      controls.update();

      renderer.render(scene, camera);
    };
    animate();







    scene.add(fireball)
  }

}
