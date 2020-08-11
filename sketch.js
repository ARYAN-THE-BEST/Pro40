var hr,mn,sc; 
var hrangle,mnangle,scangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}      

function draw() {
  background("red"); 
  translate(200,200) 
  rotate(-90)
  hr=hour();
  mn=minute();
  sc=second();
  
 hrangle=map(hr%12,0,12,0,360);
push();
 rotate(hrangle) 
 strokeWeight(5)
 stroke("blue")
 line(0,0,50,0)
 pop();
 
 noFill()
arc(0,0,260,260,0,hrangle)

 mnangle=map(mn,0,60,0,360)
push();
rotate(mnangle)
strokeWeight(5)
stroke("black")
line(0,0,70,0)
pop();

noFill()
arc(0,0,280,280,0,mnangle)

 scangle=map(sc,0,60,0,360)
push();
rotate(scangle)
strokeWeight(5)
stroke("green")
line(0,0,100,0)
pop();

noFill()
arc(0,0,300,300,0,scangle)
} 