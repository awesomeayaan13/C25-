class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r

        this.image = loadImage("paper.png")


        this.body=Bodies.circle(this.x,this.y,40,options)
        World.add(world, this.body);
    }
    display(){
        var position=this.body.position


        push()
        translate(position.x,position.y)
        imageMode(RADIUS)

        image(this.image,0,0,40,40)

        strokeWeight(3)
        fill(255,0,255)
        
        pop()
    }

    


}