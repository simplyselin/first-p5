// let's build some functions in p5.js
// GOAL IS TO ANIMATE THIS EPIC TRON BIKE
//to change position of the bike, change the 3rd and 4th variables (width and height)
//functions are like actions.. they make stuff happen


//VARIABLES in javascript are created using the VAR keyword!!!!! var position = number
//variables have no quotes around it. they're like containers bc they hold stuff in them.
//you assign values to variables with the equal sign

function setup(){ 
    //call the createCanvas and background functions
    //numbers  data type that is a number
    createCanvas(800,600) //first number is how wide it'll be, second is how tall it'll be
    background(150)
    }
    
var position = 100  
var speed = 10 
    
function draw(){
    clear()
    background(150)
    fill("white") // 255 is the number for the color white, you can use numbers or color names!
    rect(position,100,150,60,20) //references 30 from the top, 20 tall, 55 x, 55 y 
    //(the grid system in p5.js to determine how large it'll be)
    fill("dodgerblue") // to put color, use this. strings are series of characters
                        //that are written out exactly as we write them out.
    ellipse(position, 150, 75, 75) //change x and y coordinates to position it in right spot
    ellipse(position + 150, 150, 75, 75) //this is the second wheel for the bike
    
    
    position = position + speed
    
    if (position > 800) {
     speed = speed * -1
    }
    
     if (position < 0) {
         speed = speed * -1
         
     
     }
    
    
    // Conditional   allows your program to make decisions!!!!
    //draw function is known as a loop in javascript

       textSize(30)
         text("Position: " + position, 30, 30)
         // Concatenate means CHAIN TOGETHER.. concatonate by using + variable
         
         textSize(30)
         text("Speed: " + speed, 60, 60)
    
}