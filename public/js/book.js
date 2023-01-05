const section = document.querySelector(".container");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

// established soft ambient light

const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient)

// added white light to animation

const light = new THREE.DirectionalLight(0xFFFFFF)
light.position.set(0, 0, 0.9)
scene.add(light)

const loader = new THREE.TextureLoader()

// imgs from figma in img file

const urls = [
    "./public/img/long.png", "./public/img/spine.png",
    "./public/img/top.png", "./public/img/bottom.png",
    "./public/img/front-book.png", "./public/img/back-book.png"
]

const materials = urls.map(url => {
    return new THREE.MeshLambertMaterial({
        map: loader.load(url)
    })
})

const geometry = new THREE.BoxGeometry(3.5, 5, 0.5);
const cube = new THREE.Mesh( geometry, materials );
scene.add( cube );

camera.position.set(-3, 0, 6.5);

let currentTimeLine = window.pageYOffset / 3000
let aimTimeline = window.pageYOffset / 3000

// function animateIdle () {
//     requestAnimationFrame ( animate );

//     currentTimeLine += (aimTimeline - currentTimeLine) * 0.1

//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera);
// }
// animateIdle()

function animate() {
	requestAnimationFrame( animate );

    currentTimeLine += (aimTimeline - currentTimeLine) * 0.1

    const rx = currentTimeLine * Math.PI * 2
    const ry = currentTimeLine * Math.PI 
    cube.rotation.set(rx, ry, 0)

	renderer.render( scene, camera );
}
animate();

window.addEventListener('scroll', function() {
    aimTimeline = window.pageYOffset / 3000
})