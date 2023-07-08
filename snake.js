
var blocksize = 25;
var col = 30;
var row = 30;
var snakex = blocksize*(Math.floor(Math.random()*16));
var snakey = blocksize*(Math.floor(Math.random()*16));
var screen;
var context;
var foodx;
var foody
var vx = 0;
var vy = 0;
var body = [];
var score =0;
var span = document.getElementById("num");
window.onload = function()
{
    screen =document.getElementById("screen");
    screen.height = row * blocksize;
    screen.width = col * blocksize;
    context = screen.getContext("2d");

    place_food();

    setInterval(update,1000/15);
}

function update(){
    context.fillStyle = "black";
    context.fillRect(0,0,screen.width,screen.height);

    context.fillStyle = "red";
    context.fillRect(snakex,snakey,blocksize,blocksize);
    snakex += vx *blocksize;
    snakey += vy *blocksize;


    context.fillStyle = "lime";
    context.fillRect(foodx,foody,blocksize,blocksize);
 
    document.addEventListener("keyup",direction);
    span.textContent = score;


    if(body.length!= 0){
        for (var i =0; i <body.length;i++){
            if(body[i][0] == foodx&&body[i][1] ==foody){
                place_food()
            }
            if(snakex ==body[i][0]&&snakey ==body[i][1]){
                window.location.reload()
    d
            }
        }
    }


    if(snakex  == foodx &&snakey == foody){

        body.push([foodx,foody]);

        place_food();
        score++;
    }

    for(var i = body.length-1;i>0;i--){
        body[i] = body[i-1];
    }
    if(body.length){
        body[0]=[snakex,snakey];
    }

    for(let i =0;i<body.length;i++){
        context.fillStyle = "red";
        context.fillRect(body[i][0],body[i][1],blocksize,blocksize);   
    }


    collision();

}

function place_food(){

    foodx = blocksize*(Math.floor(Math.random()*(18-8) + 8));
    foody = blocksize*(Math.floor(Math.random()*(18-8) + 8));
}

function direction(e){
    if(e.key == "w" && vy!= 1){
        vx = 0;
        vy = - 1;
    }
    else if(e.key == "s" && vy !=-1){
        vx = 0;
        vy =  1;
    }
    else if(e.key == "a" &&vx != 1){
        vx = -1;
        vy = 0;
    }
    else if(e.key == "d" &&vx !=-1){
        vx = 1;
        vy = 0;
    }
}
function collision(){
    if(snakey<0){
        window.location.reload()
    }
    else if(snakey>750){
        window.location.reload()
    }
    else if(snakex<0){
        window.location.reload()
    }
    else if(snakex>750){
        window.location.reload()
    }
}

