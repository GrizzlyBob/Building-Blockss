class Box{
    constructor(x,y,width,height){
        var Options = {
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,Options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}