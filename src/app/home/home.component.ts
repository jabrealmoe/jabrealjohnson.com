import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

class Planet {
  radius;
  positionX;
  textureFile;
  mesh: THREE.Mesh<THREE.SphereGeometry, THREE.Material> | null | undefined;

  constructor(radius: number, positionX: number, textureFile: string) {
    this.radius = radius;
    this.positionX = positionX;
    this.textureFile = textureFile;
  }

  buildMesh() {
    if (this.mesh == undefined || this.mesh == null) {
      const geometry = new THREE.SphereGeometry(this.radius);
      const texture = new THREE.TextureLoader().load(this.textureFile)
      const material = new THREE.MeshStandardMaterial({map: texture})
      this.mesh = new THREE.Mesh(geometry, material)
      this.mesh.position.x += this.positionX;
    }
    return this.mesh;
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  images = [
    {

      imageSrc: 'https://burst.shopifycdn.com/photos/laptop-from-above.jpg',
      imageAlt: 'nature1'
    },
    {
      imageSrc: 'https://media.istockphoto.com/photos/coach-drawing-american-football-game-playbook-picture-id1366672302?b=1&k=20&m=1366672302&s=170667a&w=0&h=icvKGPFCVclcwsj0l3D91o2MStAYTEGRLijEs2JiCwk=',
      imageAlt: 'nature2'
    },
    {
      imageSrc: 'https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg',
      imageAlt: 'nature3'
    },
    {
      imageSrc: 'https://miro.medium.com/max/1400/1*3Fxk3b8h1kvKJFe5gVf98A.png',
      imageAlt: 'nature4'
    },
    {
      imageSrc: 'https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:786fd7a8-9b53-4b73-af03-fb1b76992638/SMT-2480_JiraAlign_Screenshots-01-ProgramManagement.png',
      imageAlt: 'Jira Strategy'
    },
    {
      imageSrc: 'https://www.worldofagile.com/wp-content/uploads/2018/03/DevOpsToolchain.png',
      imageAlt: 'nature5'
    },
  ]

  goToBlogs() {

  }

  ngOnInit(): void {

    const jdoc = document.getElementsByTagName("canvas")[0];

    const renderer = new THREE.WebGL1Renderer({
      canvas: jdoc,
      antialias: true
    });
    renderer.setSize(window.innerWidth , window.innerHeight );


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const orbit = new OrbitControls(camera, renderer.domElement)

    camera.position.set(0, 140, 100);
    orbit.update();

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const spaceTexture = new THREE.TextureLoader().load("https://upload.wikimedia.org/wikipedia/commons/0/00/Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg")
    scene.background = spaceTexture

    const textureLoader = new THREE.TextureLoader();

    const jjtext = new THREE.TextureLoader().load("https://jabrealjohnson.com/assets/jj-sitting.png");

    const sunGeo = new THREE.SphereGeometry(22);
    const sunMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Map_of_the_full_sun.jpg/1600px-Map_of_the_full_sun.jpg"), specularMap: jjtext
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sunMesh);
    const pointLight = new THREE.PointLight(0xffffff, 2, 300);
    scene.add(pointLight);

    const mercury = new Planet(0.4, 28, "https://upload.wikimedia.org/wikipedia/commons/d/d3/Mercury_map_by_MESSENGER_global_mosaic_enhancedcolor_over_completebasemap.png");
    const mercMesh = mercury.buildMesh();
    const mercObj = new THREE.Object3D()
    mercObj.add(mercMesh);
    sunMesh.add(mercObj)


    const venus = new Planet(1.0, 44, "https://upload.wikimedia.org/wikipedia/commons/1/1c/Solarsystemscope_texture_8k_venus_surface.jpg");
    const venusMesh = venus.buildMesh();
    const venusObj = new THREE.Object3D();
    venusObj.add(venusMesh);
    sunMesh.add(venusObj);

    const earth = new Planet(1.2, 60, "https://upload.wikimedia.org/wikipedia/commons/c/cc/Earth_on_December_16%2C_2021.png");
    const earthMesh = earth.buildMesh();
    const earthObj = new THREE.Object3D();
    earthObj.add(earthMesh);
    sunMesh.add(earthObj);

    const mars = new Planet(1.1, 76, "https://upload.wikimedia.org/wikipedia/commons/8/8f/%28PSP_009353_1550_%29Late_Source_Region_for_Ladon_Valles.png");
    const marsMesh = mars.buildMesh();
    const marsObj = new THREE.Object3D();
    marsObj.add(marsMesh);
    sunMesh.add(marsObj);

    const jupiter = new Planet(9, 92, "https://static.wikia.nocookie.net/planet-texture-maps/images/c/c2/Dh_uranus_texture.png");
    const jupiterMesh = jupiter.buildMesh();
    const jupiterObj = new THREE.Object3D();
    jupiterObj.add(jupiterMesh);
    sunMesh.add(jupiterObj);

    const saturn = new Planet(7.5, 148, "https://static.wikia.nocookie.net/planet-texture-maps/images/f/fa/Saturn242.png");
    const saturnMesh = saturn.buildMesh();
    const saturnObj = new THREE.Object3D();
    saturnObj.add(saturnMesh);
    sunMesh.add(saturnObj);

    const neptune = new Planet(4.2, 154, "https://static.wikia.nocookie.net/planet-texture-maps/images/c/c1/Planetarium_neptune.jpg");
    const neptuneMesh = neptune.buildMesh();
    const neptuneObj = new THREE.Object3D();
    neptuneObj.add(neptuneMesh);
    sunMesh.add(neptuneObj);

    const uranus = new Planet(4.1, 170, "https://static.wikia.nocookie.net/planet-texture-maps/images/f/fa/Saturn242.png");
    const uranusMesh = uranus.buildMesh();
    const uranusObj = new THREE.Object3D();
    uranusObj.add(uranusMesh);
    sunMesh.add(uranusObj);

    const pluto = new Planet(1, 210, "https://static.wikia.nocookie.net/planet-texture-maps/images/6/64/Pluto_Made.png");
    const plutoMesh = pluto.buildMesh();
    const plutoObj = new THREE.Object3D();
    plutoObj.add(plutoMesh);
    sunMesh.add(plutoObj);

    const saturnRingGeo = new THREE.RingGeometry(10, 20, 32);
    const saturnRingMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load("https://upload.wikimedia.org/wikipedia/commons/b/b1/Saturn%27s_rings_dark_side_mosaic.jpg"),
      side: THREE.DoubleSide
    })

    const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat);
    saturnObj.add(saturnRing);
    saturnRing.rotation.x = -0.25 * Math.PI;
    saturnRing.position.setX(148);
    sunMesh.add(saturnObj);


    const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
    const animate = () => {
      sunMesh.rotateY(0.004);
      mercObj.rotateY(0.02)
      venusObj.rotation.y += EARTH_YEAR * -2;
      earthObj.rotation.y += EARTH_YEAR;
      marsObj.rotation.y += EARTH_YEAR * 0.5;
      jupiterObj.rotation.y += EARTH_YEAR * 0.8;
      saturnObj.rotation.y += EARTH_YEAR * 0.2;
      saturnRing.rotation.y += EARTH_YEAR * 0.01;
      neptuneObj.rotation.y += EARTH_YEAR * 2;
      uranusObj.rotation.y += EARTH_YEAR * 0.04;
      plutoObj.rotation.y += EARTH_YEAR * 0.05;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }
}
