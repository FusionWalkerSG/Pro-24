class Ball{ 
    constructor(x, y , r){
        var options = {
            density:1.2,
            isStatic: false,
            restitution: 0.3,
            friction: 0.5
        }

        this.body= Bodies.circle(x,y,r/2,options);
        this.r = r;
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r, this.r);
        pop();
    }
}