bpm=180
s0.initVideo("https://media0.giphy.com/media/CbChHE5Vy5gr3KxHi9/giphy.mp4")
s1.initVideo("https://media4.giphy.com/media/vMhAsatslElJw41Qcu/giphy.mp4")
s2.initVideo("https://media0.giphy.com/media/yhylFVag9gRAx9mia6/giphy.mp4")
src(s0).blend(s1,()=>-mouse.x).add(s2,0.5).pixelate(()=>-mouse.x*0.1,()=>-mouse.y*0.1).out(o0)
render(o0)
