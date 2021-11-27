var i=1;
var delay=1000;
var timer;
function animate(){
i++;
if(i>=13)i=1;
document.gif.src="source/"+i+".jpg";
}
function faster(){
if(delay>50) delay-=50;
stop();
start();
}
function slow(){
if(delay<100000) delay+=50;
stop();
start();
}
function stop(){
clearInterval(timer);
}
function start(){
timer=setInterval(animate,delay);
}
