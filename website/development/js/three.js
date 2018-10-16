$(document).ready(function () {
  var pageId = $('.wrapper').attr('data-page');

  if (pageId == 'three') {
    $('#pageId').html('You are at ' + pageId + ' page!');

    var WIDTH = window.innerWidth - 24,
      HEIGHT = window.innerHeight - 24,

      mouseX = 0,
      mouseY = 0,

      windowHalfX = WIDTH / 2,
      windowHalfY = HEIGHT / 2,

      camera, scene, mesh, group, renderer, controls, container, stats;

    var targetRotation = 0,
        targetRotationOnMouseDown = 0,
        mouseX = 0,
        mouseXOnMouseDown = 0;

    var targetYRotation = 0,
        targetYRotationOnMouseDown = 0,
        mouseY = 0,
        mouseYOnMouseDown = 0;

    init();
    animate();

    function init() {
      var container, particles, particle;

      $('.wrapper').append('<div id="three-container"></div>');

      camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 5000);
      camera.position.z = 1000;

      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({
        alpha: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(WIDTH, HEIGHT);
      $('#three-container').append(renderer.domElement);
    }

    var lights = [];

    var geom = new THREE.IcosahedronGeometry(50, 2);
    var mat = new THREE.MeshBasicMaterial({
      color: 0x41b971,
      wireframe: true,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1
    });
    var planet = new THREE.Mesh(geom, mat);
    planet.scale.x = planet.scale.y = planet.scale.z = 10;
    scene.add(planet);

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      windowHalfX = window.innerWidth * 1.35 / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth * 1.35 / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 1.35, window.innerHeight);
      renderer.render(scene, camera);
    }

    function onDocumentMouseDown(event) {
      event.preventDefault();
      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('mouseup', onDocumentMouseUp, false);
      document.addEventListener('mouseout', onDocumentMouseOut, false);
      mouseXOnMouseDown = event.clientX - windowHalfX;
      targetRotationOnMouseDown = targetRotation;
      mouseYOnMouseDown = event.clientY - windowHalfY;
      targetYRotationOnMouseDown = targetYRotation;
    }

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
      mouseY = event.clientY - windowHalfY;
      targetYRotation = targetYRotationOnMouseDown + (mouseY - mouseYOnMouseDown) * 0.02;
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
        targetRotationOnMouseDown = targetRotation;
        mouseYOnMouseDown = event.touches[0].pageY - windowHalfY;
        targetYRotationOnMouseDown = targetYRotation;
      }
    }

    function onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;
        mouseY = event.touches[0].pageY - windowHalfY;
        targetYRotation = targetYRotationOnMouseDown + (mouseY - mouseYOnMouseDown) * 0.05;
      }
    }

    render();

    function animate() {
      scene.rotation.y += 0.0005;
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      scene.rotation.y = scene.rotation.y += (targetRotation - scene.rotation.y) * 0.05;
      scene.rotation.x = scene.rotation.x += (targetYRotation - scene.rotation.x) * 0.05;
      renderer.render(scene, camera);
    }

  }
})
