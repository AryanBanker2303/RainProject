class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(random(800,0), 0, 10, 60, options);
        this.width =10;
        this.height =60 ;
        this.velocityY = 5 + 0.3;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.image, random(800,0), 0, this.width, this.height);
        pop();
      }
}