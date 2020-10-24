class Paper {

    constructor(x, y, radius) {

        var options = {

            isStatic:false,
            'restitution':0.8,
            'friction':0.6, 
            'density':1.2  

        }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.pap = Bodies.circle(this.x, this.y, this.radius, options);
        this.image = loadImage("images/paper.png");
        World.add(world, this.pap);
    
    }

        display() {

            var paper_position = this.pap.position;
            fill("beige");
            ellipseMode(RADIUS);
            circle(paper_position.x, paper_position.y, this.radius);
            imageMode(CENTER);
            image(this.image, paper_position.x, paper_position.y, 60, 60);

        }

}