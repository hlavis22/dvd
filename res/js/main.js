const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const logo = new Image();
logo.src= "./res/img/loga.png";

let x = 10;
let y = 10;
let xVelocity = 0.5;
let yVelocity = 0.5;
let width = 60;
let height= 30;

window.addEventListener("resize",() =>{
    changeCanvasSize();
});

window.onload =()=>{
    changeCanvasSize();
    setInterval(()=>{
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
        if (y + height >= canvas.height|| y <=0){
            yVelocity *= -1;
        }
        if (x + width>= canvas.width ||x <=0 ){
            xVelocity*=-1;
        }
        x += xVelocity;
        y += yVelocity;
        
        ctx.filter = `hue-rotate(${getRandomNmber(0, 360)}deg)`;
        ctx.drawImage(logo, x, y, width, height );
        ctx.filter= "none";
    
    }, 1);
}

const getRandomNmber = (minimum, maximum)=> Math.floor(Math.random()*(maximum - minimum + 1)) + minimum;

function changeCanvasSize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


