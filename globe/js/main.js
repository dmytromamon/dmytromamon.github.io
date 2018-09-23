var WIDTH = window.innerWidth,
  HEIGHT = window.innerHeight,

  mouseX = 0,
  mouseY = 0,

  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2,

  camera, scene, scene1, scene2, sceneall, mesh, group, renderer, controls, container, stats;

var targetRotationX = 0;
var targetRotationY = 0;
var targetRotationOnMouseDownX = 0;
var targetRotationOnMouseDownY = 0;
var mouseX = 0;
var mouseXOnMouseDown = 0;
var mouseY = 0;
var mouseYOnMouseDown = 0;

init();
animate();

function init() {
  var container;

  container = document.getElementById('globe-container');
  document.body.appendChild(container);

  scene = new THREE.Scene();
  scene1 = new THREE.Scene();
  scene2 = new THREE.Scene();
  sceneall = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 1000);
  camera.position.z = 1.5;

  scene.add(camera);

  renderer = new THREE.WebGLRenderer({
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);
}

scene.add(new THREE.AmbientLight(0x333333));

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

var mearth = new THREE.TextureLoader().load('img/1.1.jpg');
var bearth = new THREE.TextureLoader().load('img/2.1.jpg');
var cearth = new THREE.TextureLoader().load('img/3.1.jpg');

var geo1 = new THREE.SphereGeometry(0.4, 32, 32);
var mat1 = new THREE.MeshPhongMaterial({
  map: mearth,
  bumpMap: bearth,
  bumpScale: 0.005
});
var earth = new THREE.Mesh(geo1, mat1);
scene1.add(earth);

var geo2 = new THREE.SphereGeometry(0.41, 32, 32);
var mat2 = new THREE.MeshPhongMaterial({
  alphaMap: cearth,
  transparent: true
});
var clouds = new THREE.Mesh(geo2, mat2);
scene2.add(clouds);

// add manual point ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var lat = [48.859175]
var lon = [2.349131]

var phi   = (90-lat[0])*(Math.PI/180),
theta = (lon[0]+180)*(Math.PI/180),
x1 = -((0.41) * Math.sin(phi)*Math.cos(theta)),
z1 = ((0.41) * Math.sin(phi)*Math.sin(theta)),
y1 = ((0.41) * Math.cos(phi));

var dotGeometry = new THREE.Geometry();
dotGeometry.vertices.push(new THREE.Vector3( x1, y1, z1));
var dotMaterial = new THREE.PointsMaterial( { size: 15, sizeAttenuation: false } );
var dot = new THREE.Points( dotGeometry, dotMaterial );
scene1.add( dot );

// add manual point ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

sceneall.add(scene1);
sceneall.add(scene2);
scene.add(sceneall);

document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('touchstart', onDocumentTouchStart, false);
document.addEventListener('touchmove', onDocumentTouchMove, false);
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

function onDocumentMouseDown(event) {
  event.preventDefault();
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('mouseup', onDocumentMouseUp, false);
  document.addEventListener('mouseout', onDocumentMouseOut, false);
  mouseXOnMouseDown = event.clientX - windowHalfX;
  mouseYOnMouseDown = event.clientY - windowHalfY;
  targetRotationXOnMouseDown = targetRotationX;
  targetRotationYOnMouseDown = targetRotationY;
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
  targetRotationX = targetRotationXOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
  targetRotationY = targetRotationYOnMouseDown + (mouseY - mouseYOnMouseDown) * 0.02;
}

function onDocumentMouseUp(event) {
  document.removeEventListener('mousemove', onDocumentMouseMove, false);
  document.removeEventListener('mouseup', onDocumentMouseUp, false);
  document.removeEventListener('mouseout', onDocumentMouseOut, false);
}

function onDocumentMouseOut(event) {
  document.removeEventListener('mousemove', onDocumentMouseMove, false);
  document.removeEventListener('mouseup', onDocumentMouseUp, false);
  document.removeEventListener('mouseout', onDocumentMouseOut, false);
}

function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
    mouseYOnMouseDown = event.touches[0].pageY - windowHalfY;
    targetRotationXOnMouseDown = targetRotationX;
    targetRotationYOnMouseDown = targetRotationY;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
    targetRotationX = targetRotationXOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;
    targetRotationY = targetRotationYOnMouseDown + (mouseY - mouseYOnMouseDown) * 0.05;
  }
}

render();

function animate() {
  scene1.rotation.y += 0.0005;
  scene2.rotation.y += 0.0008;
  requestAnimationFrame(animate);
  render();
}

function render() {
  sceneall.rotation.y = sceneall.rotation.y += (targetRotationX - sceneall.rotation.y) * 0.0125;
  sceneall.rotation.x = sceneall.rotation.x += (targetRotationY - sceneall.rotation.x) * 0.0125;
  renderer.render(scene, camera);
}