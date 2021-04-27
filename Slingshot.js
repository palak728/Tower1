class Slingshot {
    constructor (bodyA, pointB){
var options = {
    bodyA: bodyA, 
    pointB : pointB,
    stifness : 0.02,
    length : 1

}
 this.sling = Constraint.create(options)
    this.pointB = pointB
    World.add(world, this.sling)
        
    }
    display(){
        if(this.sling.bodyA)  {
        strokeWeight(4)
        stroke("red")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
}
