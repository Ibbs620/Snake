let snake, dir, score;

function setup(){
    createCanvas(500,500);
    background(100);
    frameRate(10);
    snake = new Snake();
}

function draw(){
    background(100);
    snake.move(dir);
    if(snake.crashed) {
        snake = new Snake();
        dir = 'r';
    }
    score = snake.snakeLayout.length - 4;
    let text = "Score: " + score;
    document.getElementById("score").innerHTML = text; 
    snake.drawSnake();
}

function keyPressed(){
    if(keyCode === DOWN_ARROW && dir != 'u') dir = 'd';
    else if(keyCode === UP_ARROW && dir != 'd') dir = 'u';
    else if(keyCode === LEFT_ARROW && dir != 'r') dir = 'l';
    else if(keyCode === RIGHT_ARROW && dir != 'l') dir = 'r';	
}