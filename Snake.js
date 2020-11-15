class Snake {
constructor(){
    this.crashed = false;
    this.head = [13,4];
    this.snakeLayout = [[13,4],[13,3],[13,2],[13,1]];
    this.apple = new Apple(13, 13);
}

isSnakeCrashed(){
    for(var i = 1; i < this.snakeLayout.length; i++){
        if(this.snakeLayout[i][0] == this.head[0] && this.snakeLayout[i][1] == this.head[1]) return true;
    }
    return false;
}

isAppleEaten(){
    return this.apple.x == this.head[0] && this.apple.y == this.head[1];
}

hasArray(arr, subarr){
    for(var i = 0; i < arr.length; i++){
        let checker = false
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] === subarr[j]){
                checker = true
            } else {
                checker = false
                break;
            }
        }
        if (checker){
            return true
        }
    }
    return false
}

spawnApple(){
    let x, y;
    do{
        x = int(random(0,14));
        y = int(random(0,14));
    }
    while(this.hasArray(this.snakeLayout,[x,y]));
    this.apple = new Apple(x, y);
}

move(direction){
    if(direction == 'u'){
        this.head[0]--;
    } else if(direction == 'd'){
        this.head[0]++;
    } else if(direction == 'l'){
        this.head[1]--;
    } else {
        this.head[1]++;
    }
    this.snakeLayout.unshift([this.head[0], this.head[1]]);
    if(!this.isAppleEaten())this.snakeLayout.pop();	
    else this.spawnApple();
    if(this.checkOutOfBounds() || this.isSnakeCrashed()) this.stop();
}

drawSnake(){
    stroke(0, 100, 0);
    fill(0, 255, 0);
    for(var i = 0; i < this.snakeLayout.length; i++){
        rect(this.snakeLayout[i][1] * 20,this.snakeLayout[i][0] * 20, 20, 20); 
    }
    this.apple.drawApple();
}

checkOutOfBounds(){
    return this.head.includes(-1) || this.head.includes(25)
}

stop(){
    this.crashed = true;
}
}