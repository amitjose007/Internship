let x,y,a,b;
let dir = "RIGHT";
let score=0;
let snake=[];

function setup()
{
    createCanvas(400, 400);
    x = random(0,400);
    y = random(0,400);
    a=random(0,400);
    b=random(0,400);
    frameRate(10); 
    snake.push({x:x,y:y});
}

function draw()
{
    background(0);
    fill(255);
    drawSnake();
    moveSnake();
    createApple();
    newapple();

    if (x > 400 || y > 400 )
        {
            alert("Game Over");
            noLoop();
        }
    if (x < 0 || y < 0)
        { 
            alert("Game Over");
            noLoop();
        }
}

function drawSnake()
{
    for (let i = 0; i < snake.length; i++) 
    {
        rect(snake[i].x, snake[i].y, 10, 10);
    }   
}

function moveSnake()
{
    if (dir == 'UP') 
    {
        y -= 10;
    } 
    else if (dir == 'DOWN')
    {
        y += 10;
    }
    else if (dir == 'LEFT') 
    {
        x -= 10;
    } 
    else if (dir == 'RIGHT') 
    {
        x += 10;
        
    }
    for (let i = snake.length - 1; i > 0; i--) 
    {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
      snake[0].x = x;
      snake[0].y = y;  
    
}


function keyPressed() 
{
    if (keyCode == UP_ARROW && dir != "DOWN") 
    {
        dir = 'UP';
    } 
    else if (keyCode == DOWN_ARROW && dir != "UP") 
    {
        dir = 'DOWN'
    } 
    else if (keyCode == LEFT_ARROW && dir != "RIGHT") 
    {
        dir = "LEFT";
    } 
    else if (keyCode == RIGHT_ARROW && dir != "LEFT") 
    {
        dir = "RIGHT";
    }
}

function Up() 
{
    if (dir != "DOWN") 
    {
        dir = "UP";
    }
}

function Down() 
{
    if (dir != "UP") 
    {
        dir = "DOWN";
    }
}

function Left()
{
    if (dir != "RIGHT")
    {
        dir = "LEFT";
    }
}

function Right()
{
    if (dir != "LEFT") 
    {
        dir = "RIGHT";
    }
}

function createApple()
{
    circle(a,b,5);
}
function newapple()
{
    if(dist(x,y,a,b) < 10)
        {
            a=random(0,400);
            b=random(0,400);
            score++;
            document.getElementById("demo").innerHTML=score;
            createApple();
            growSnake();
        }
}
function growSnake() 
{
    let lastSegment = snake[snake.length - 1];
    snake.push({ x: lastSegment.x, y: lastSegment.y });
}