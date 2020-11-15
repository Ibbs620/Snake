class Apple{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    drawApple(){
        stroke(0);
        fill(255, 0 , 0);
        rect(this.y * 20, this.x * 20, 20, 20);
    }
}