class Sidewalls{
    constructor(x,y){

        this.body = Bodies.rectangle(x,y,30,200,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        push();
        fill('red');
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,30,200);
        pop();
    }
}