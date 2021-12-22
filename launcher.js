class launcher {

    constructor(bodyA,pointB){
        var configeral = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        
        this.bodyA = bodyA;
        this.pointB = pointB;

        this.armazenaconfig = Constraint.create(configeral);
        World.add(world,this.armazenaconfig);
    }

    attach(bodyA){
        this.armazenaconfig.bodyA = bodyA;
    }

    fly(){
        this.armazenaconfig.bodyA = null;
    }

    display(){

        if (this.armazenaconfig.bodyA){
            var pos = this.bodyA.position;
            var poss = this.pointB
    
            strokeWeight(5);
            stroke(84,39,15);
            line(pos.x-20,pos.y,poss.x-10,poss.y+20);
        }

    }
}


