var canvas = document.getElementById("pacman");
var ctx = canvas.getContext("2d");
var M = 0;

var rect1 = {x: 0, y: 244.2, width: 18.8, height: 151};

var Pacman = {};
var Player = {};

Pacman.Collision = [
    /*[rect1 = {x: 0, y: 0, width: 358, height: 18.8}],
    [rect2 = {x: 0, y: 450, width: 358, height: 18.8}]*/
    {x: 0, y: 0, width: 358, height: 18.7},
    {x: 0, y: 18.7, width: 18.7, height: 131},
    {x: 339, y: 18.7, width: 18.7, height: 131},
    {x: 37.5, y: 37.5, width: 37.5, height: 37.5},
    {x: 281.9, y: 37.5, width: 37.5, height: 37.5},
    {x: 206.9, y: 37.5, width: 56.3, height: 37.5},
    {x: 93.9, y: 37.5, width: 56.3, height: 37.5},
    {x: 0, y: 395, width: 358, height: 18.7},
    {x: 38, y: 357, width: 112.8, height: 18.7},
    {x: 0, y: 244.2, width: 18.7, height: 151},
    {x: 18.7, y: 319.2, width: 18.7, height: 18.7},
    {x: 207, y: 357, width: 112.8, height: 18.7},
    {x: 339, y: 244.2, width: 18.7, height: 151},
    {x: 320, y: 319.2, width: 18.7, height: 18.7},
    {x: 245, y: 319.2, width: 18.7, height: 37.6},
    {x: 94, y: 319.2, width: 18.7, height: 37.6},
    {x: 170, y: 338, width: 18.7, height: 37.6},
    {x: 132, y: 319.2, width: 94, height: 18.7},
    {x: 132, y: 244, width: 94, height: 18.7},
    {x: 132, y: 207, width: 94, height: 18.7},
    {x: 132, y: 94, width: 94, height: 18.7},
    {x: 169.5, y: 19.1, width: 18.7, height: 56.3},
    {x: 56.5, y: 282, width: 18.7, height: 56.3},
    {x: 56.5, y: 207, width: 18.7, height: 56.3},
    {x: 56.5, y: 132, width: 18.7, height: 56.3},
    {x: 282, y: 281.5, width: 18.7, height: 56.3},
    {x: 282, y: 207, width: 18.7, height: 56.3},
    {x: 282, y: 132, width: 18.7, height: 56.3},
    {x: 93.9, y: 207, width: 18.7, height: 56.3},
    {x: 245, y: 207, width: 18.7, height: 56.3},
    {x: 207, y: 282, width: 56.3, height: 18.7},
    {x: 94, y: 282, width: 56.3, height: 18.7},
    {x: 94, y: 131.5, width: 56.3, height: 18.7},
    {x: 207, y: 131.5, width: 56.3, height: 18.7},
    {x: 301, y: 169, width: 56.3, height: 18.7},
    {x: 0, y: 169, width: 56., height: 18.7},
    {x: 0, y: 207, width: 56.3, height: 18.7},
    {x: 301, y: 207, width: 56.3, height: 18.7},
    {x: 301, y: 244, width: 37.5, height: 18.7},
    {x: 18.8, y: 244, width: 37.5, height: 18.7},
    {x: 18.8, y: 132, width: 37.5, height: 18.7},
    {x: 301, y: 132, width: 37.5, height: 18.7},
    {x: 282, y: 94, width: 37.5, height: 18.7},
    {x: 38, y: 94, width: 37.5, height: 18.7},
    {x: 94, y: 94, width: 18.7, height: 37.5},
    {x: 94, y: 150.1, width: 18.7, height: 37.5},
    {x: 245, y: 94, width: 18.7, height: 37.5},
    {x: 245, y: 150.1, width: 18.7, height: 37.5},
    {x: 169.5, y: 113.1, width: 18.7, height: 37.5},
    {x: 169.5, y: 263.1, width: 18.7, height: 37.5},
    {x: 132, y: 169.5, width: 18.7, height: 37.5},
    {x: 207, y: 169.5, width: 18.7, height: 37.5},
    {x: 188, y: 169.5, width: 18.7, height: 18.7},
    {x: 151, y: 169.5, width: 18.7, height: 18.7},
    {x: 38, y: 282, width: 18.7, height: 18.7},
    {x: 301, y: 282, width: 18.7, height: 18.7},
   
];

function drawCollision()
{
    for (i = 0; i < Pacman.Collision.length; i++)
    {
        line = Pacman.Collision[i];
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0)";
        ctx.fillRect(line.x, line.y, line.width, line.height);
        ctx.closePath();
    }
}


Player.x = 9;
Player.y = 20;

Pacman.fps = 45;
Pacman.blockSize = 18.8;

Pacman.MAP = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function walls()
{
    //var canvas = document.getElementById("pacman");
    //var ctx = canvas.getContext("2d");

    for (i = 0; i < 22; i++)
    {
        for (j = 0; j < 22; j++)
        {
            if (Pacman.MAP[i][j] === 0)
            {
                ctx.beginPath();
                x = j;
                y = i;
                blockSize = Pacman.blockSize;
                var layout = Pacman.MAP[y][x];
                ctx.fillStyle = "#000000";
                ctx.fillRect((x * blockSize), (y * blockSize), blockSize, blockSize);
                ctx.closePath();
            }
            else if (Pacman.MAP[i][j] === 1)
            {
            	ctx.beginPath();
    			ctx.arc(Pacman.blockSize * j + 9.4, Pacman.blockSize * i + 9.4, 2.8, 0, 2 * Math.PI, false);
				ctx.fillStyle = "yellow";
				ctx.fill();
				ctx.closePath();
            }
            else//if (Pacman.MAP[i][j] === 1 || Pacman.MAP[i][j] === 4 || Pacman.MAP[i][j] === 2 || Pacman.MAP[i][j] === 3)
            {
                ctx.beginPath();
                x = j;
                y = i;
                blockSize = Pacman.blockSize;
                var layout = Pacman.MAP[y][x];
                ctx.fillStyle = "#3b5998";
                ctx.fillRect((x * blockSize), (y * blockSize), blockSize, blockSize);
                ctx.closePath();
            }
        }
    }
    /*ctx.beginPath();
    ctx.fillStyle = "rgba(255, 0, 0, 0.4)";//"red";
    ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
    ctx.closePath();*/
}

function user(Q, Z){
    var canvas = document.getElementById("pacman");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    x = Q;
    y = Z;
    ctx.beginPath();
    ctx.arc(Pacman.blockSize * x + 9.4, Pacman.blockSize * y + 9.4, 9, 0, 2 * Math.PI, false);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.closePath();
}

walls();
user(Player.x, Player.y);
counter = 0;
updatescore();
function updatescore(){
	var canvas = document.getElementById("pacman");
    var ctx = canvas.getContext("2d");
    removeText(canvas.width - 150, canvas.height - 2, 10, 15, 10);

    ctx.beginPath();
    ctx.font = "17px Helvetica";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("SCORE", canvas.width - 110, canvas.height - 4);
    ctx.closePath();

	ctx.beginPath();
		x = 200;
        y = 200;
        blockSize = Pacman.blockSize;
        ctx.fillStyle = "#3b5998";
        ctx.fillRect(canvas.width-60, canvas.height-33, blockSize + 50, blockSize+60);
        ctx.closePath();

        ctx.beginPath();
        ctx.font = "30px Helvetica";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText(counter.toString(), canvas.width - 30, canvas.height - 2);
		ctx.closePath();
}

function removeText(x,y,txt_length,font_height,char_width) {
        ctx.clearRect(x, y-font_height ,char_width*txt_length,font_height);
    }

document.addEventListener('keypress', function(event) {
	if (event.code == 'KeyN') {
        removeText(0, canvas.height-20, 30, 15, 10);
	}
});

var dir;

document.addEventListener("keydown", direction);
function direction(event)
{
    if(event.keyCode == 37){ // left arrow
        dir = "left";
    }
    else if(event.keyCode == 38){
        dir = "up";
    }
    else if(event.keyCode == 39){
        dir = "right";
    }
    else if(event.keyCode == 40){
        dir = "down";
    }
}

function clear(x, y){
    ctx.clearRect(x * Pacman.blockSize, y * Pacman.blockSize, 17, 18);
}

function user(){
    clear(Player.x, Player.y);
    ctx.beginPath();
    x = Player.x;
    y = Player.y;
    if (dir === "left")
    {
        x = x - 0.1;
        Player.x = x;
    }
    else if (dir === "right")
    {
		x = x + 0.1;
        Player.x = x;
    }
    else if (dir === "up")
    {
        y = y - 0.1;
        Player.y = y;
    }
    else if (dir === "down")
    {
        y = y + 0.1;
        Player.y = y;
    }
    checkCollision(dir);

    ctx.beginPath();
    ctx.arc(Pacman.blockSize * x + 8.2, Pacman.blockSize * y + 9.4, 8.2, 0, 2 * Math.PI, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}
drawCollision();
setInterval(user, 1000/Pacman.fps);

function checkCollision(dir)
{
    for(var I = 0; I < Pacman.Collision.length; I++)
    {
        //console.log(Pacman.Collision[I]);
        if (Pacman.Collision[I].x - 17 < Pacman.blockSize * x  &&
            Pacman.Collision[I].x + Pacman.Collision[I].width > Pacman.blockSize * x &&
            Pacman.Collision[I].y - 17 < Pacman.blockSize * y &&
            Pacman.Collision[I].y + Pacman.Collision[I].height > Pacman.blockSize * y) 
            {
                switch(dir){
                    case "up":
                        y = y + 0.1;
                        Player.y = y;
                        break;
                    case "down":
                        y = y - 0.1;
                        Player.y = y;
                        break;
                    case "left":
                        x = x + 0.1;
                        Player.x = x;
                        break;
                    case "right":
                        x = x - 0.1;
                        Player.x = x;
                        break;
                    default:
                        break;
                }
            }
    }
}