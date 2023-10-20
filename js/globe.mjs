import * as THREE from 'https://unpkg.com/three@v0.149.0/build/three.module.js';
import { OrbitControls } from './OrbitControls.mjs';

const container = document.getElementById('globe-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.2, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor(0x000000, 0); // the second argument is the alpha value, 0 is fully transparent

container.appendChild(renderer.domElement);

// Load the local Earth texture
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('images/globeshape.png');  // Changed to local file path

// Create the Earth sphere
const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture, transparent: true, opacity: 0.5 });  // Set opacity and transparent properties
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// Tilt the globe by 23.4 degrees.
earthMesh.rotation.z = 23.4 * Math.PI / 180;

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 2;

function animate() {
  requestAnimationFrame(animate);

  // Rotate the globe slowly.
  earthMesh.rotation.y += 0.001;

  controls.update();
  renderer.render(scene, camera);
}

animate();
