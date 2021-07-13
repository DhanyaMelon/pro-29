class Stone
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.circle(x, y,radius);
    this.w = w;
    this.h = h;
    this.radius = radius;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y,30,30);
    pop();
  }
}
