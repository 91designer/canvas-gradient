const canvas = document.querySelector('canvas'),
      c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lGrad = c.createLinearGradient(50,0,250,0)
// args: (x1, y1, x2, y2);
lGrad.addColorStop(0,"#fca")
lGrad.addColorStop(0.5,"#055")
lGrad.addColorStop(1,"#afa")
c.fillStyle = lGrad;
c.fillRect(50,50,200,200)

let lGrad1 = c.createLinearGradient(200,0,600,300)
lGrad1.addColorStop(0,"#666")
lGrad1.addColorStop(1,"#fff")
c.fillStyle = lGrad1;
c.fillRect(300,50,200,200)


let rGrad = c.createRadialGradient(700,200,50,700,200,150)
// args: (x1, y1, r1, x2, y2, r2);
rGrad.addColorStop(0,"transparent")
rGrad.addColorStop(0,"#666")
rGrad.addColorStop(0.5,"#aaa")
rGrad.addColorStop(1,"#666")

c.beginPath()
c.arc(700,200,150,0,Math.PI*2)
c.fillStyle = rGrad
c.fill()
