var gameBoard=document.querySelector("#gameBoard");
var ctx=gameBoard.getContext("2d");
var scoreText=document.querySelector("#scoreText");
var resetBtn=document.querySelector("#resetBtn");
var dir,score,balls,food;
function init(){
   dir='right';
   score=0;
   balls=[
    {x:40,y:0},
    {x:60,y:0},
    {x:80,y:0}
];
createFood();
}
function createFood(){
  food={x:Math.floor(Math.random()*25),y:Math.floor(Math.random()*25)};
}
init();
document.addEventListener("keydown",function(e){
        var keyCode=e.keyCode;
        if(keyCode==37&&dir!='right'){
            dir='left';
        }
        if(keyCode==38&&dir!='down'){
            dir='up';
        }
        if(keyCode==39&&dir!='left'){
            dir='right';
        }
        if(keyCode==40&&dir!='up'){
            dir='down';
        }
});
function add(){
    var lastBall=balls[balls.length-1];
    if(dir=='right'){
    balls.push({x:lastBall.x+20,y:lastBall.y});
    }
    if(dir=='down'){
        balls.push({x:lastBall.x,y:lastBall.y+20});
        }
        if(dir=='left'){
            balls.push({x:lastBall.x-20,y:lastBall.y});
       }
        if(dir=='up'){
      balls.push({x:lastBall.x,y:lastBall.y-20});
     }
}
function ani()
{
    ctx.clearRect(0,0,600,600);
    balls.shift();
    add();
    var lastBall=balls[balls.length-1];
    if(lastBall.x==food.x*20&&lastBall.y==food.y*20)
    {
        score+=5;
        add();
        createFood();
    }
    ctx.fillStyle="red";
    for(var i=0;i<balls.length;i++){
         var ball=balls[i];
        if(ball.x>480)
            ball.x=0;
        if(ball.x<0)
            ball.x=480;
        if(ball.y<0)
            ball.y=480;
        if(ball.y>480)
            ball.y=0;
        ctx.fillRect(ball.x,ball.y,19,19);

    }
    ctx.fillRect(food.x*20,food.y*20,19,19);
    ctx.fillText("score"+score,200,200);
}
ani();
  setInterval(ani,100);
  