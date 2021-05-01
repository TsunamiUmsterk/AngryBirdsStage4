class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 270, 70, 38, 150);
        image(this.sling2, 240, 80, 42, 80);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(48, 22, 8);
            if(pointA.x < 280) {
                line(pointA.x - 25, pointA.y, pointB.x + 25, pointB.y - 5);
                line(pointA.x - 25, pointA.y, pointB.x - 25, pointB.y - 5);
                image(this.sling3, pointA.x - 25, pointA.y - 10, 10, 20);
            } else {
                line(pointA.x + 25, pointA.y, pointB.x + 25, pointB.y - 5);
                line(pointA.x + 25, pointA.y, pointB.x - 25, pointB.y - 5);
                image(this.sling3, pointA.x + 25, pointA.y - 10, 10, 20);
            }
            
        }
    }
    
}