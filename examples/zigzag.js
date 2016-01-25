// zigzag

function setup() {
	createCanvas(windowWidth, windowHeight);

	background("yellow");

  stroke("green");
  line(100,100,200,200);
  line(200,200,100,300);
  line(100,300,200,400);

  fill("lightblue");
  ellipse(100, 100, 50, 50);

  fill("darkblue");
  ellipse(200, 200, 50, 50);

  fill("lightblue");
  ellipse(100, 300, 50, 50);

  fill("darkblue");
  ellipse(200, 400, 50, 50);

}
