p1 = new P5();
s0.init({src:p1.canvas});
p1.draw=()=>{
  p1.background(102);
  p1.push();
  p1.translate(p1.width * 0.5, p1.height * 0.5);
  //rotate(frameCount / 50.0);
  p1.ellipse(p1.mouseX-270, p1.mouseY-270, p1.mouseX-180, p1.mouseY-180);
  p1.pop();
}
src(s0).repeatX(10).out(o0)
shape(3).modulatePixelate(time/1000,1).diff(o0,1).out(o1)
render()
s1.initScreen()
src(s1).scrollY(mouse.y).rotate(()=>time,0.1).out(o3)
render()

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    //vertex(sx, sy);
    ellipse(sx,sy,50,50)
  }
  //endShape(CLOSE);
}
