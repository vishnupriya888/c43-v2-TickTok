var hr, mn, sc;
var hrAngle, mnAngle, scAngle,bg; 

function setup(){
    createCanvas(700,600); 
    //To use angle in Degrees
    angleMode(DEGREES);   
    bg = loadImage("bg.jpg");
}

function draw(){
    background(bg);
        
    //Calculating time using predefined func from p5.js
        hr = hour();
        mn = minute();
        sc = second();

    textSize(50);
    textFont("Algerian")
    
    stroke("cyan");
    fill("blue");
    text(hr+" :",220,550);

    stroke("purple");
    fill("orange");
    text(mn+" :",320,550);

    stroke("pink");
    fill("red");
    text(sc,420,550);

    textFont("arial");
    textSize(18);
    noStroke();
    fill("white");
    text("12", 345,120);

    noStroke();
    fill("white");
    text("3", 480,255);

    noStroke();
    fill("white");
    text("9", 190,255);

    noStroke();
    fill("white");
    text("6", 350,400);

    //Translation and rotation 
    translate(350,250)
    rotate(-90)



    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(5);
    line(0,0,150,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7.5);
    line(0,0,115,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(10);
    line(0,0,75,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(5);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,400,400,0,scAngle);
    //Minutes
    strokeWeight(7.5);
    stroke(0,255,0);
    arc(0,0,370,370,0,mnAngle);
    //Hour
    strokeWeight(10);
    stroke(0,0,255);
    arc(0,0,340,340,0,hrAngle);

    
    drawSprites();

  
}
