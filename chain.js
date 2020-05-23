class Chain  {
    constructor(BodyA, BodyB){
      
        var options = {
            stiffness:0.3,
            length:40,
            bodyA:BodyA,
            bodyB:BodyB
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
       var PointA = this.chain.bodyA.position;
       var PointB = this.chain.bodyB.position;
       strokeWeight(4);
       line(PointA.x, PointA.y, PointB.x, PointB.y);
    }
    
  }