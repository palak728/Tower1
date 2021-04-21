class Slingshot {
    constructor (bodyA, pointB){
var options = {
    bodyA: bodyA, 
    pointB : pointB,
    length : 1,
    stifness : 0.05

}
 this.sling = Constraint.create(options)
    this.pointB = pointB
    World.add(world, this.sling)
        
    }
    display(){
        stroke("red")
        strokeWeight(2)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
        
    }
}