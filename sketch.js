function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(128, 0, 128);
  const size = width * 0.15;
  translate(width/2, height/2);
  //paper airplane
  fill(199, 234, 70);
  stroke(199, 234, 70);
  triangle(0, 0, size, size*2, -size, size*2);
  fill(179, 234, 50);
  stroke(179, 234, 50);
  triangle(100, 150, size, size*2, -size, size*2);
  fill(159, 234, 30);
  stroke(159, 234, 30);
  triangle(-150, 0, size, size*2, -size, size*2);
  //first cloud
  stroke(255)
  fill(255)
  ellipseMode(CENTER);
  ellipse(-100, 100, 25, 25)
  stroke(255)
  fill(255)
  ellipseMode(CENTER);
  ellipse(-100, 100, 40, 15)
  //second cloud
  stroke(255)
  fill(255)
  ellipseMode(CENTER);
  ellipse(-150, 75, 50, 50)
  stroke(255)
  fill(255)
  ellipseMode(CENTER);
  ellipse(-150, 75, 80, 30)
  //third cloud
  stroke(255)
  fill(255)
  ellipseMode(CENTER);
  ellipse(-200, 25, 75, 50)
  stroke(255)
  fill(255)
  ellipseMode(CENTER);
  ellipse(-200, 25, 100, 30)
}
