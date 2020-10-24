class Dustbin {

    constructor(x, y, width, height, angle) {

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/dustbin1.png");
        World.add(world, this.body);

    }

    display() {

        var dustbin_position =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(dustbin_position.x, dustbin_position.y, this.width, this.height);
        //imageMode(CENTER);
        //image(this.image, 20, 20, this.width, this.height);
        
    }

}