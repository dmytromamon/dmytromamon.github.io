var WIDTH = window.innerWidth,
  HEIGHT = window.innerHeight,

  mouseX = 0,
  mouseY = 0,

  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2,

  camera, scene, scene1, scene2, dots, sceneall, mesh, group, renderer, controls, container, stats;

var raycaster;
var mouse = new THREE.Vector2(),
  INTERSECTED,
  ids,
  cityTitle,
  cityh6,
  citytitles,
  cityp;

var targetRotationX = 0;
var targetRotationY = 0;
var targetRotationXOnMouseDown = 0;
var targetRotationYOnMouseDown = 0;
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
  dots = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.001, 10000);
  camera.position.z = 1.5;

  scene.add(camera);

  // add manual point ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var lat = [48.859175, 40.716599]
  var lon = [2.349131, -73.995440]
  var city = ["paris", "ny"]
  var cityName = ["Paris", "New York"]
  var cityH6 = ["Paris", "ny"]
  var cityTITLE = ["City", "New York"]
  var cityParagraph = ["Hey there, it is Paris, France", "ny"]
  ids = []
  cityTitle = []
  cityh6 = []
  citytitles = []
  cityp = []

  for (var i = 0; i < lat.length; i++) {
    var phi = (90 - lat[i]) * (Math.PI / 180),
      theta = (lon[i] + 180) * (Math.PI / 180),
      x1 = -((0.56) * Math.sin(phi) * Math.cos(theta)),
      z1 = ((0.56) * Math.sin(phi) * Math.sin(theta)),
      y1 = ((0.56) * Math.cos(phi));

    var geometry = new THREE.SphereBufferGeometry(0.01, 32, 32);
    var material = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = x1;
    mesh.position.y = y1;
    mesh.position.z = z1;
    dots.add(mesh);
    ids.push(city[i]);
    cityTitle.push(cityName[i]);
    cityh6.push(cityH6[i]);
    citytitles.push(cityTITLE[i]);
    cityp.push(cityParagraph[i]);
  }

  // add manual point ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer({
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);

  document.addEventListener('mousemove', onMouseMove, false);
}

scene.add(new THREE.AmbientLight(0x333333));

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

var mearth = new THREE.TextureLoader().load('img/1.1.jpg');
var bearth = new THREE.TextureLoader().load('img/2.1.jpg');
var cearth = new THREE.TextureLoader().load('img/3.1.jpg');

var geo1 = new THREE.SphereGeometry(0.55, 32, 32);
var mat1 = new THREE.MeshPhongMaterial({
  map: mearth,
  bumpMap: bearth,
  bumpScale: 0.005
});
var earth = new THREE.Mesh(geo1, mat1);
scene1.add(earth);

var geo2 = new THREE.SphereGeometry(0.56, 32, 32);
var mat2 = new THREE.MeshPhongMaterial({
  alphaMap: cearth,
  transparent: true
});
var clouds = new THREE.Mesh(geo2, mat2);
scene2.add(clouds);

scene1.add(dots);
sceneall.add(scene1);
sceneall.add(scene2);
scene.add(sceneall);

document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('touchstart', onDocumentTouchStart, false);
document.addEventListener('touchmove', onDocumentTouchMove, false);
document.addEventListener('touchend', onDocumentTouchEnd, false);
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
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onMouseMove(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
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
    targetRotationX = targetRotationXOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
    targetRotationY = targetRotationYOnMouseDown + (mouseY - mouseYOnMouseDown) * 0.02;
  }
}

render();


function onHoverMouseDown() {
  var city = ids[id - 9]
  setTimeout(function () {
    $('#' + city).addClass('active');
    document.removeEventListener('mousedown', onDocumentMouseDown, false);
    document.removeEventListener('touchstart', onDocumentTouchStart, false);
    document.removeEventListener('touchmove', onDocumentTouchMove, false);
    window.removeEventListener('resize', onWindowResize, false);
  }, 100)

  scene1.rotation.y += 0.0005;
  scene2.rotation.y += 0.0008;
}


function animate() {
  requestAnimationFrame(animate);
  render();

  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(dots.children);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      $('html,body').css('cursor', 'pointer');
      if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      INTERSECTED.material.color.setHex(0xcccccc);
      id = INTERSECTED.id;
    }
  } else {
    $('html,body').css('cursor', 'default');
    if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
    INTERSECTED = null;

    scene1.rotation.y += 0.0005;
    scene2.rotation.y += 0.0008;
  }
}

function render() {
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(dots.children);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      $('html,body').css('cursor', 'pointer');
      if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      INTERSECTED.material.color.setHex(0xcccccc);
      id = INTERSECTED.id;
      document.addEventListener('click', onHoverMouseDown, false);
      document.addEventListener('touchstart', onHoverMouseDown, false);
      var name = cityTitle[id - 9];
      var h6 = cityh6[id - 9];
      var title = citytitles[id - 9];
      var p = cityp[id - 9];
      $('.title-container').html(name);
      $('.city-text h4').html(h6);
      $('.city-text .title').html(title);
      $('.city-text p').html(p);
      $('.help-text').css('display', 'none');

      scene1.rotation.y += 0;
      scene2.rotation.y += 0.0003;
    }
  } else {
    $('html,body').css('cursor', 'default');
    if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
    INTERSECTED = null;
    document.removeEventListener('click', onHoverMouseDown, false);
    document.removeEventListener('touchstart', onHoverMouseDown, false);
    $('.title-container').html('');
    $('.city-text h4').html('');
    $('.city-text .title').html('');
    $('.city-text p').html('');
    $('.help-text').css('display', 'block');

    sceneall.rotation.y = sceneall.rotation.y += (targetRotationX - sceneall.rotation.y) * 0.0125;
    sceneall.rotation.x = sceneall.rotation.x += (targetRotationY - sceneall.rotation.x) * 0.0125;
  }

  renderer.render(scene, camera);
}

function onDocumentTouchEnd(event) {
  event.preventDefault();

  mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;


  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(dots.children);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      $('html,body').css('cursor', 'pointer');
      if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      INTERSECTED.material.color.setHex(0xcccccc);
      id = INTERSECTED.id;
      var city = ids[id - 9]
      setTimeout(function () {
        $('#' + city).addClass('active');
        document.removeEventListener('mousedown', onDocumentMouseDown, false);
        document.removeEventListener('touchstart', onDocumentTouchStart, false);
        document.removeEventListener('touchmove', onDocumentTouchMove, false);
        window.removeEventListener('resize', onWindowResize, false);
      }, 100)
      var name = cityTitle[id - 9];
      $('.title-container').html(name);
    }
  } else {
    $('html,body').css('cursor', 'default');
    if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
    INTERSECTED = null;
    $('.title-container').html('');
  }
}

$(document).on('click touchstart', '#globe-container, .modal__close', function () {
  if ($('.active').length > 0)
    $('.open-box').removeClass('active')
  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);
  window.addEventListener('resize', onWindowResize, false);
})
