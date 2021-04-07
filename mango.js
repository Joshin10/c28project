class mango (){
    constructor(x,y,width,height)
        var option={
            isStatic=true,
            restitution:0,
            friction:1,
            density:1
        }
        this.body=bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        world.add=(world,this.body);
        
         display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    }    


}