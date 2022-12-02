//weirder
p1 = new P5()
s0.init({src:p1.canvas})
p1.draw=()=>{
p1.background(125, 66, 158);
	p1.fill(0, 25, 149);
	p1.stroke(0);
	
	p1.translate(p1.width/2, p1.height/2);
	
	for (i=0; i < 100; i++){
		p1.push();
		p1.rotate(i*100 / 15.0);
		p1.scale(i / 16.0);
      p1.ellipse(i,i, 100, 100);
		p1.pop();
	}
}
const f =()=>a.fft[0]
noise(1,1,1).modulate(s0).out(o0)
render(o0)
