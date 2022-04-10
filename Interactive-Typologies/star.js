
var canvas;
var ctx;
var w = 1600;
var h = 2000;
var text;
var allflower = [];
var clicks;
var o1= {
    "x": w/2,
    "changex":rand(10),
    "y": -150+h/2,
    "changey": rand(10),
    "w": 20,
    "h": 20,
    "c": Math.random()*100,
    "a": 0.4,
    "angle": 0,
    "changle":rand(30),
    "distance": 50
}


document.querySelector("#myCanvas").onclick = click;








var oneDegree = 2*Math.PI/360;


setUpCanvas();
animationloop();



function clear(){
    ctx.clearRect(0,0,w,h);
}



function animationloop(){
    
    
    clear();
   
    for (var i = 0; i<allflower.length; i++){
        flower(allflower[i]);
        angle(o1,2);
    
    }
    requestAnimationFrame(animationloop);
   
}


function clear(){
    ctx.clearRect(0,0,w,h);
}

function flower(o){
    var x = o.x;
    var y = o.y;
    var a = o.angle;
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    for(var i = 0; i<40; i++){
     angle(o,200);
     forward(o,20+i* rand(5));
     ctx.lineTo(o.x,o.y);
     ctx.strokeStyle =  "hsla("+o.c+",100%,60%,"+o.a+")";
     ctx.stroke();
     
    }
    o.x = x;
    o.y = y;
    o.angle = a;
}




function angle(o,a){

    if (a == undefined){
        o.angle += o.changle;
    } else{
        o.angle += a;
    }
   
}

function forward(o,d){
    var cx;
    var cy;
    if (d !== undefined) {
        o.distance = d;
    };
       cx = o.distance*Math.cos(o.angle*oneDegree);
       cy = o.distance*Math.sin(o.angle*oneDegree);
       o.x += cx;
       o.y += cy;

}


function click(event){
    addObjectWithLocation (allflower, event.offsetX, event.offsetY);
    console.log(event.offsetX, event.offsetY);
}

function addObjectWithLocation(a, x,y){
    a.push({
        "x": x,
        "y": y,
        "w": 20,
        "h": 20,
        "c": Math.random()*150,
        "a": 0.5,
        "angle": rand(360),
        "changle":30,
        "distance": rand(10),
    
    })
}
function addObject(a){
    a.push({
        "x": w/2,
        "y": h/2,
        "w": 20,
        "h": 20,
        "c": Math.random()*150,
        "a": 0.5,
        "angle":rand(360),
        "changle": 30,
        "distance":rand(10),
    });
}
    
   



  
function randn(r){
    var result = Math.random()*r - r/2;
    return result
}


function randi(r){
    var result = Math.floor(Math.random()*r);
    return result;
}
function rand (r){
    var result = Math.random()*r;
    return result 
}



    function setUpCanvas(){
        canvas = document.querySelector("#myCanvas");
        
        ctx = canvas.getContext("2d");
        canvas.width = w;
        canvas.height = h;
        canvas.style.border = "none"
      

    }


   