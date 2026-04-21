const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 10;

const balls = [];
//loop through all objects in the arraay balls
        
// instead of four unconnected variables,
//we'll use a JavaScript Object to track the ball
for (let i=0; i<100; i+=1){

    const ball = {
        x:Math.random()*800,
        y:Math.random()*800,
        dx:2,
        dy:-2,
    }
    balls.push(ball);
};
let x = Math.random()*800;
let y = Math.random()*800;

let dx = 2;
let dy = -2;


let x2 = Math.random()*800;
let y2 = Math.random()*800;

let dx2 = 2;
let dy2 = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;


function drawBricks(){
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      //TODO: use the variables above to write the code that draws the bricks.
      //this should be a single function call to ctx.fillRect()
    ctx.fillRect(
        brickOffsetLeft+c*(brickWidth+brickPadding),
        brickOffsetTop+r*(brickHeight+brickPadding),
        brickWidth,
        brickHeight
    );

    }
  }
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBall() {
    
    for(const ball of balls){
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath(); 
    }
}

function drawBall2() {
  ctx.beginPath();
  ctx.arc(x2, y2, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawBall2();
  drawPaddle();
  drawBricks();

  if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  if (ball.y +ball. dy < ballRadius || ball.y +ball. dy > canvas.height - ballRadius) {
    dy = -dy;
  } 
  if (ball.x2 + ball.dx2 > canvas.width - ballRadius || ball.x2 + ball.dx2 < ballRadius) {
    dx = -dx;
  }
  if (ball.y2 + ball.dy2 < ballRadius || ball.y2 + ball.dy2 > canvas.height - ballRadius) {
    ball.dy2 = -ball.dy2;
  }
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  ball.x += dx;
  ball.y += dy;
  ball.x2 += dx2;
  ball.y2 += dy2;
  requestAnimationFrame(draw);
}

draw()
 
