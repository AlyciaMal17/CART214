// p5.js ambient fashion-orbit animation. Decorative only; game logic lives in app.js.
let orbitDots = [];
function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  c.parent('p5-bg');
  pixelDensity(1);
  for (let i = 0; i < 34; i++) {
    orbitDots.push({ angle: random(TWO_PI), radius: random(90, 390), speed: random(-0.0018, 0.0018), size: random(1.5, 4) });
  }
  noStroke();
}
function draw() {
  clear();
  push();
  translate(width * 0.78, height * 0.48);
  for (let d of orbitDots) {
    d.angle += d.speed;
    const x = cos(d.angle) * d.radius;
    const y = sin(d.angle) * d.radius * 0.48;
    fill(235, 74, 59, 95);
    circle(x, y, d.size);
  }
  pop();
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }