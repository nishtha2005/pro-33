class snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.0,
            isStatic:false,
        }
        this.x=x;
		this.y=y;
		this.r=30;
        this.body = Bodies.circle(this.x,this. y, this.r, options);
        this.image= loadImage("snowflake.png")
        
        World.add(world, this.body);
    }

 display() {

		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 
}
}