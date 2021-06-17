class Ground{
    constructor(){
        this.body = Bodies.rectangle(width/2, 650, 220, 32 , {isStatic:true});
    World.add(world,this.body);
    }

    display(){
    fill('red');
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,220,30);
    }
}