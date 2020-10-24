class Ground {

    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display() {

        var ground_position = this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(ground_position.x, ground_position.y, this.width, this.height);

      }
    
}