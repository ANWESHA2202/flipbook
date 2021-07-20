const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const myImage = new Image();
myImage.src = 'resources/Chamber-of-Secrets-image.png';
canvas.width = innerWidth;
canvas.height = innerHeight;

let particlesArray = [];
const numberofParticles = 5000;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 5.5;
        this.size = Math.random() * 1.5 + 1;
    }
    update() {
        this.y += this.velocity;
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = '#C70700';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < numberofParticles; i++) {
        particlesArray.push(new Particle);
    }
}
init();

function animate() {
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = "rgb(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();