class paper
{
	constructor(x,y,r)
	{
		var options={
		'restitution': 0.3,
        'friction': 0,
        'density': 1.2
			}
		this.x=x;
		this.y=y;
        this.r = r;
		this.body=Bodies.circle(this.x, this.y , (this.r - 20)/2, options);
 		World.add(world, this.body);
        this.image = loadImage("paper.png");
	}
	display()
	{
			
			var paperPos=this.body.position;		
			if(keyCode===32){
			  Matter.Body.setPosition(this.body,{x:200,y:630});
				};
			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill("white");
			image(this.image, 0,0,this.r, this.r);
			pop()
			
	}

}