class Bob{
    constructor(x,y,r){
     var options={
         
        isSttic:false,
        restitution:1,
        friction:0,
        density:0.8
     }
     //this.radius=radius;
     
     
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
     World.add(world,this.body);
     
    }
    display(){
       var paperpos=this.body.position;
      // var angle=this.body.angle;
       push();
       translate(paperpos.x,paperpos.y);
       //rotate(angle); 
      //noStroke();
       rectMode(CENTER);
       //strokeWeight(3);
       fill(255,0,255);
       ellipse(0,0,this.r,this.r);
       
       pop()
    }
}
