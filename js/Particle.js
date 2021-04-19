class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
      
        
        World.add(world, this.body);

    }
    score(){
        
        var pos = this.body.position;
        if(pos.y > 700){
            if(pos.x < 300 && score1 == false){
                score += 500;
                score1 = true;
                console.log(score);
                //console.log(score1);
            }
            if(pos.x > 300 && pos.x < 600){
                score += 100;
                console.log(score);
            }
            if(pos.x > 600){
                score += 200;
                console.log(score);
            }
        }
        //console.log(score1);
    }
    display() {
        
        var pos = this.body.position
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};