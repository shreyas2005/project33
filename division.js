class div{
    constructor(x,y,width,height){
        var op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.division=[];

    }
    display()
    {
        // var  pos=this.body.position;
        push();
        // translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke(255);
        fill("brown");
        for(var i=0;i<=1000;i+=100){
           this.division.push(new div(i,2*i,10,100));
        }
        for(var j=0;j<this.division.length;j+=1){
            rect(this.division[j][0],this.division[j][0],10,100);
        }
        // rect(0,0,this.width,this.height);
        pop();
    }
}