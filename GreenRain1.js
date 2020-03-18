class GreenRain1 extends BaseClass{
    constructor(){
    super(random(0,800),0,10,60);
    this.body = Bodies.rectangle(random(0,800),0,10,60, options);
    World.add(world, this.body);
    }
 
    display(){
      super.display(); 
      fill(green);
    }
}
//but I did make classes
//not done yet 
//lets check though
