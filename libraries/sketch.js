function setup() {
  createCanvas(windowWidth, 160);
  rgbSlider();
}
function rgbSlider() {
  rSlider = createSlider(0, 255, 255);
  rSlider.position(20, 1150);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(20, 1180);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 1210);
}
let rSlider, gSlider, bSlider;
function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text("", rSlider.x * 2 + rSlider.width, 255);
  text("", gSlider.x * 2 + gSlider.width, 255);
  text("", bSlider.x * 2 + bSlider.width, 255);

  textSize(62);
  textStyle(BOLD);
  text("BEER AND MOOD", 380, 100);
  fill(0);
  strokeWeight(10);
  line(385, 30, 910, 30);
  strokeWeight(10);
  line(385, 125, 910, 125);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
