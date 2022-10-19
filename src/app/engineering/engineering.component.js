"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineeringComponent = void 0;
const core_1 = require("@angular/core");
const THREE = require("three");
const OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
class Planet {
    constructor(radius, positionX, textureFile) {
        this.radius = radius;
        this.positionX = positionX;
        this.textureFile = textureFile;
    }
    getMesh() {
        if (this.mesh == undefined || this.mesh == null) {
            const geometry = new THREE.SphereGeometry(this.radius);
            const texture = new THREE.TextureLoader().load(this.textureFile);
            const material = new THREE.MeshStandardMaterial({ map: texture });
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.position.x += this.positionX;
        }
        return this.mesh;
    }
}
let EngineeringComponent = class EngineeringComponent {
    constructor(renderer2) {
        this.renderer2 = renderer2;
        this.listener = this.renderer2.listen('window', 'scroll', (e) => {
            console.log(this.getYPosition(e));
        });
    }
    getYPosition(e) {
        return e.target.scrollTop;
    }
    ngOnDestroy() {
        this.listener();
    }
    ngOnInit() {
        const renderer = new THREE.WebGL1Renderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
        const orbit = new OrbitControls_1.OrbitControls(camera, renderer.domElement);
        camera.position.set(-90, 140, 140);
        orbit.update();
        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);
        const spaceTexture = new THREE.TextureLoader().load("https://upload.wikimedia.org/wikipedia/commons/0/00/Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg");
        scene.background = spaceTexture;
        const textureLoader = new THREE.TextureLoader();
        const sunGeo = new THREE.SphereGeometry(16);
        const sunMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Map_of_the_full_sun.jpg/1600px-Map_of_the_full_sun.jpg")
        });
        const sunMesh = new THREE.Mesh(sunGeo, sunMat);
        scene.add(sunMesh);
        const pointLight = new THREE.PointLight(0xffffff, 2, 300);
        scene.add(pointLight);
        // pointLight.position.set(2, 2, 2);
        //
        // const ambientLight = new THREE.AmbientLight(0xffffff);
        // scene.add(pointLight, ambientLight);
        //
        // const lightHelper = new THREE.PointLightHelper(pointLight)
        // const gridHelper = new THREE.GridHelper(200, 50);
        // scene.add(lightHelper);
        //
        //
        //
        // //addstar
        // function addStar() {
        //   const geometry = new THREE.SphereGeometry(0.25, 24, 24)
        //   const material = new THREE.MeshStandardMaterial({color: 0xffff66})
        //   const star = new THREE.Mesh(geometry, material);
        //   const [x, y, z] = Array(3).fill(null).map(() => THREE.MathUtils.randFloatSpread(100))
        //   star.position.set(x, y, z);
        //   scene.add(star)
        // }
        //
        // Array(200).fill(null).forEach(addStar)
        // const spaceTexture = new THREE.TextureLoader().load("https://upload.wikimedia.org/wikipedia/commons/0/00/Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg")
        // scene.background = spaceTexture
        // camera.position.setZ(30);
        //
        // const moontexture = new THREE.TextureLoader().load("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Map_of_the_full_sun.jpg/1600px-Map_of_the_full_sun.jpg");
        // const sun = new THREE.Mesh(
        //   new THREE.SphereGeometry(4, 36, 36),
        //   new THREE.MeshStandardMaterial({
        //     map: moontexture,
        //   })
        // )
        //
        const mercury = new Planet(2, 28, "https://upload.wikimedia.org/wikipedia/commons/d/d3/Mercury_map_by_MESSENGER_global_mosaic_enhancedcolor_over_completebasemap.png");
        const mercMesh = mercury.getMesh();
        const mercObj = new THREE.Object3D();
        mercObj.add(mercMesh);
        sunMesh.add(mercObj);
        const venus = new Planet(3, 44, "https://upload.wikimedia.org/wikipedia/commons/1/1c/Solarsystemscope_texture_8k_venus_surface.jpg");
        const venusMesh = venus.getMesh();
        const venusObj = new THREE.Object3D();
        venusObj.add(venusMesh);
        sunMesh.add(venusObj);
        const earth = new Planet(4, 60, "https://upload.wikimedia.org/wikipedia/commons/c/cc/Earth_on_December_16%2C_2021.png");
        const earthMesh = earth.getMesh();
        const earthObj = new THREE.Object3D();
        earthObj.add(earthMesh);
        sunMesh.add(earthObj);
        const mars = new Planet(3, 76, "https://upload.wikimedia.org/wikipedia/commons/8/8f/%28PSP_009353_1550_%29Late_Source_Region_for_Ladon_Valles.png");
        const marsMesh = mars.getMesh();
        const marsObj = new THREE.Object3D();
        marsObj.add(marsMesh);
        sunMesh.add(marsObj);
        const saturn = new Planet(10, 138, "https://static.wikia.nocookie.net/planet-texture-maps/images/f/fa/Saturn242.png");
        const saturnMesh = saturn.getMesh();
        const saturnObj = new THREE.Object3D();
        saturnObj.add(saturnMesh);
        sunMesh.add(saturnObj);
        const saturnRingGeo = new THREE.RingGeometry(10, 20, 32);
        const saturnRingMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load("https://upload.wikimedia.org/wikipedia/commons/b/b1/Saturn%27s_rings_dark_side_mosaic.jpg"),
            side: THREE.DoubleSide
        });
        const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat);
        saturnObj.add(saturnRing);
        saturnRing.rotation.x = -0.5 * Math.PI;
        saturnRing.position.setX(138);
        sunMesh.add(saturnObj);
        //
        const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
        // mercurysystem.rotation.y += EARTH_YEAR * 4;
        const animate = () => {
            sunMesh.rotateY(0.004);
            mercObj.rotateY(0.02);
            venusObj.rotation.y += EARTH_YEAR * 2;
            earthObj.rotation.y += EARTH_YEAR;
            marsObj.rotation.y += EARTH_YEAR * 0.5;
            requestAnimationFrame(animate);
            // controls.update();
            renderer.render(scene, camera);
        };
        animate();
        // scene.add(sun)
    }
};
EngineeringComponent = __decorate([
    core_1.Component({
        selector: 'app-engineering',
        templateUrl: './engineering.component.html',
        styleUrls: ['./engineering.component.css']
    })
], EngineeringComponent);
exports.EngineeringComponent = EngineeringComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUEyRDtBQUMzRCwrQkFBK0I7QUFDL0IsNkVBQXdFO0FBSXhFLE1BQU0sTUFBTTtJQU1WLFlBQVksTUFBYyxFQUFFLFNBQWlCLEVBQUUsV0FBbUI7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBRS9DLE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNoRSxNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO1lBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFPRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUsvQixZ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aXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7T3JiaXRDb250cm9sc30gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbmltcG9ydCB7R2VvbWV0cnl9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vZGVwcmVjYXRlZC9HZW9tZXRyeVwiO1xuXG5jbGFzcyBQbGFuZXQge1xuICByYWRpdXM7XG4gIHBvc2l0aW9uWDtcbiAgdGV4dHVyZUZpbGU7XG4gIG1lc2g6IFRIUkVFLk1lc2g8VEhSRUUuU3BoZXJlR2VvbWV0cnksIFRIUkVFLk1hdGVyaWFsPiB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIHBvc2l0aW9uWDogbnVtYmVyLCB0ZXh0dXJlRmlsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5wb3NpdGlvblggPSBwb3NpdGlvblg7XG4gICAgdGhpcy50ZXh0dXJlRmlsZSA9IHRleHR1cmVGaWxlO1xuICB9XG5cbiAgZ2V0TWVzaCgpIHtcbiAgICBpZiAodGhpcy5tZXNoID09IHVuZGVmaW5lZCB8fCB0aGlzLm1lc2ggPT0gbnVsbCkge1xuXG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSh0aGlzLnJhZGl1cyk7XG4gICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHRoaXMudGV4dHVyZUZpbGUpXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7bWFwOiB0ZXh0dXJlfSlcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbClcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ICs9IHRoaXMucG9zaXRpb25YO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tZXNoO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1lbmdpbmVlcmluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbmdpbmVlcmluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VuZ2luZWVyaW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbmdpbmVlcmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbGlzdGVuZXI7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5saXN0ZW5lciA9IHRoaXMucmVuZGVyZXIyLmxpc3Rlbignd2luZG93JywgJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmdldFlQb3NpdGlvbihlKSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGdldFlQb3NpdGlvbihlOiBFdmVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChlLnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxUb3A7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMMVJlbmRlcmVyKCk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoOTAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIGNvbnN0IG9yYml0ID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuXG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldCgtOTAsIDE0MCwgMTQwKTtcbiAgICBvcmJpdC51cGRhdGUoKTtcblxuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHgzMzMzMzMpO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3Qgc3BhY2VUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8wLzAwL0NlbnRlcl9vZl90aGVfTWlsa3lfV2F5X0dhbGF4eV9JVl8lRTIlODAlOTNfQ29tcG9zaXRlLmpwZ1wiKVxuICAgIHNjZW5lLmJhY2tncm91bmQgPSBzcGFjZVRleHR1cmVcblxuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuXG4gICAgY29uc3Qgc3VuR2VvID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDE2KTtcbiAgICBjb25zdCBzdW5NYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgbWFwOiB0ZXh0dXJlTG9hZGVyLmxvYWQoXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzkvOTkvTWFwX29mX3RoZV9mdWxsX3N1bi5qcGcvMTYwMHB4LU1hcF9vZl90aGVfZnVsbF9zdW4uanBnXCIpXG4gICAgfSk7XG4gICAgY29uc3Qgc3VuTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHN1bkdlbywgc3VuTWF0KTtcblxuICAgIHNjZW5lLmFkZChzdW5NZXNoKTtcblxuXG4gICAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAyLCAzMDApO1xuICAgIHNjZW5lLmFkZChwb2ludExpZ2h0KTtcbiAgICAvLyBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgyLCAyLCAyKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYpO1xuICAgIC8vIHNjZW5lLmFkZChwb2ludExpZ2h0LCBhbWJpZW50TGlnaHQpO1xuICAgIC8vXG4gICAgLy8gY29uc3QgbGlnaHRIZWxwZXIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodEhlbHBlcihwb2ludExpZ2h0KVxuICAgIC8vIGNvbnN0IGdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigyMDAsIDUwKTtcbiAgICAvLyBzY2VuZS5hZGQobGlnaHRIZWxwZXIpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIC8vYWRkc3RhclxuICAgIC8vIGZ1bmN0aW9uIGFkZFN0YXIoKSB7XG4gICAgLy8gICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjI1LCAyNCwgMjQpXG4gICAgLy8gICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7Y29sb3I6IDB4ZmZmZjY2fSlcbiAgICAvLyAgIGNvbnN0IHN0YXIgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIC8vICAgY29uc3QgW3gsIHksIHpdID0gQXJyYXkoMykuZmlsbChudWxsKS5tYXAoKCkgPT4gVEhSRUUuTWF0aFV0aWxzLnJhbmRGbG9hdFNwcmVhZCgxMDApKVxuICAgIC8vICAgc3Rhci5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XG4gICAgLy8gICBzY2VuZS5hZGQoc3RhcilcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBBcnJheSgyMDApLmZpbGwobnVsbCkuZm9yRWFjaChhZGRTdGFyKVxuICAgIC8vIGNvbnN0IHNwYWNlVGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMC8wMC9DZW50ZXJfb2ZfdGhlX01pbGt5X1dheV9HYWxheHlfSVZfJUUyJTgwJTkzX0NvbXBvc2l0ZS5qcGdcIilcbiAgICAvLyBzY2VuZS5iYWNrZ3JvdW5kID0gc3BhY2VUZXh0dXJlXG4gICAgLy8gY2FtZXJhLnBvc2l0aW9uLnNldFooMzApO1xuICAgIC8vXG4gICAgLy8gY29uc3QgbW9vbnRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzkvOTkvTWFwX29mX3RoZV9mdWxsX3N1bi5qcGcvMTYwMHB4LU1hcF9vZl90aGVfZnVsbF9zdW4uanBnXCIpO1xuICAgIC8vIGNvbnN0IHN1biA9IG5ldyBUSFJFRS5NZXNoKFxuICAgIC8vICAgbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDQsIDM2LCAzNiksXG4gICAgLy8gICBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgIC8vICAgICBtYXA6IG1vb250ZXh0dXJlLFxuICAgIC8vICAgfSlcbiAgICAvLyApXG4gICAgLy9cbiAgICBjb25zdCBtZXJjdXJ5ID0gbmV3IFBsYW5ldCgyLCAyOCwgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvTWVyY3VyeV9tYXBfYnlfTUVTU0VOR0VSX2dsb2JhbF9tb3NhaWNfZW5oYW5jZWRjb2xvcl9vdmVyX2NvbXBsZXRlYmFzZW1hcC5wbmdcIik7XG4gICAgY29uc3QgbWVyY01lc2ggPSBtZXJjdXJ5LmdldE1lc2goKTtcbiAgICBjb25zdCBtZXJjT2JqID0gbmV3IFRIUkVFLk9iamVjdDNEKClcbiAgICBtZXJjT2JqLmFkZChtZXJjTWVzaCk7XG4gICAgc3VuTWVzaC5hZGQobWVyY09iailcblxuXG4gICAgY29uc3QgdmVudXMgPSBuZXcgUGxhbmV0KDMsIDQ0LCBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xYy9Tb2xhcnN5c3RlbXNjb3BlX3RleHR1cmVfOGtfdmVudXNfc3VyZmFjZS5qcGdcIik7XG4gICAgY29uc3QgdmVudXNNZXNoID0gdmVudXMuZ2V0TWVzaCgpO1xuICAgIGNvbnN0IHZlbnVzT2JqID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdmVudXNPYmouYWRkKHZlbnVzTWVzaCk7XG4gICAgc3VuTWVzaC5hZGQodmVudXNPYmopO1xuXG4gICAgY29uc3QgZWFydGggPSBuZXcgUGxhbmV0KDQsIDYwLCBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jYy9FYXJ0aF9vbl9EZWNlbWJlcl8xNiUyQ18yMDIxLnBuZ1wiKTtcbiAgICBjb25zdCBlYXJ0aE1lc2ggPSBlYXJ0aC5nZXRNZXNoKCk7XG4gICAgY29uc3QgZWFydGhPYmogPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICBlYXJ0aE9iai5hZGQoZWFydGhNZXNoKTtcbiAgICBzdW5NZXNoLmFkZChlYXJ0aE9iaik7XG5cbiAgICBjb25zdCBtYXJzID0gbmV3IFBsYW5ldCgzLCA3NiwgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzgvOGYvJTI4UFNQXzAwOTM1M18xNTUwXyUyOUxhdGVfU291cmNlX1JlZ2lvbl9mb3JfTGFkb25fVmFsbGVzLnBuZ1wiKTtcbiAgICBjb25zdCBtYXJzTWVzaCA9IG1hcnMuZ2V0TWVzaCgpO1xuICAgIGNvbnN0IG1hcnNPYmogPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICBtYXJzT2JqLmFkZChtYXJzTWVzaCk7XG4gICAgc3VuTWVzaC5hZGQobWFyc09iaik7XG5cbiAgICBjb25zdCBzYXR1cm4gPSBuZXcgUGxhbmV0KDEwLCAxMzgsIFwiaHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3BsYW5ldC10ZXh0dXJlLW1hcHMvaW1hZ2VzL2YvZmEvU2F0dXJuMjQyLnBuZ1wiKTtcbiAgICBjb25zdCBzYXR1cm5NZXNoID0gc2F0dXJuLmdldE1lc2goKTtcbiAgICBjb25zdCBzYXR1cm5PYmogPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICBzYXR1cm5PYmouYWRkKHNhdHVybk1lc2gpO1xuICAgIHN1bk1lc2guYWRkKHNhdHVybk9iaik7XG5cbiAgICBjb25zdCBzYXR1cm5SaW5nR2VvID0gbmV3IFRIUkVFLlJpbmdHZW9tZXRyeSgxMCwgMjAsIDMyKTtcbiAgICBjb25zdCBzYXR1cm5SaW5nTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIG1hcDogdGV4dHVyZUxvYWRlci5sb2FkKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9iL2IxL1NhdHVybiUyN3NfcmluZ3NfZGFya19zaWRlX21vc2FpYy5qcGdcIiksXG4gICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlXG4gICAgfSlcblxuICAgIGNvbnN0IHNhdHVyblJpbmcgPSBuZXcgVEhSRUUuTWVzaChzYXR1cm5SaW5nR2VvLCBzYXR1cm5SaW5nTWF0KTtcblxuICAgIHNhdHVybk9iai5hZGQoc2F0dXJuUmluZyk7XG4gICAgc2F0dXJuUmluZy5yb3RhdGlvbi54ID0gLTAuNSAqIE1hdGguUEk7XG4gICAgc2F0dXJuUmluZy5wb3NpdGlvbi5zZXRYKDEzOCk7XG4gICAgc3VuTWVzaC5hZGQoc2F0dXJuT2JqKTtcbiAgICAvL1xuICAgICBjb25zdCBFQVJUSF9ZRUFSID0gMiAqIE1hdGguUEkgKiAoMSAvIDYwKSAqICgxIC8gNjApO1xuICAgIC8vIG1lcmN1cnlzeXN0ZW0ucm90YXRpb24ueSArPSBFQVJUSF9ZRUFSICogNDtcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgc3VuTWVzaC5yb3RhdGVZKDAuMDA0KTtcbiAgICAgIG1lcmNPYmoucm90YXRlWSgwLjAyKVxuICAgICAgdmVudXNPYmoucm90YXRpb24ueSArPSBFQVJUSF9ZRUFSICogMjtcbiAgICAgIGVhcnRoT2JqLnJvdGF0aW9uLnkgKz0gRUFSVEhfWUVBUjtcbiAgICAgIG1hcnNPYmoucm90YXRpb24ueSArPSBFQVJUSF9ZRUFSICogMC41O1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgLy8gY29udHJvbHMudXBkYXRlKCk7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgfTtcbiAgICBhbmltYXRlKCk7XG4gICAgLy8gc2NlbmUuYWRkKHN1bilcbiAgfVxuXG59XG4iXX0=