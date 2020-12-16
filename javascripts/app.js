// Rover Object Goes Here
// ======================

// ======================
//  Iteration 1
let rover = {
  direction: "N",
  x: 0 ,
  y: 0 ,
  travelLog: []
}

// Iteration 2
function turnLeft(rover){
// Condition statements to check which direction its facing
if (rover.direction == "N"){
rover.direction = "W" ;
console.log("Direction is West");
} else if(rover.direction == "W"){
    rover.direction = "S";
    console.log("Direction is South");
} else if(rover.direction == "S"){
    rover.direction = "E"; 
    console.log("Direction is East");
} else if(rover.direction == "E"){
    rover.direction = "N";
    console.log("Direction is North");}
}

function turnRight(rover){
// Condition statements to check which direction its facing
if (rover.direction == "N"){
rover.direction = "E" ;
console.log("Direction is East");
} else if(rover.direction == "E"){
    rover.direction = "S";
    console.log("Direction is South");
} else if(rover.direction == "S"){
    rover.direction = "West"; 
} else if(rover.direction == "W"){
    rover.direction = "North";}
}






// Iteration 3
function moveForward(rover){
  // move north
if(rover.direction === "N"){
  rover.y--; 
  console.log(`X: ${rover.x}, Y: ${rover.y}`);
  // move south
} else if(rover.direction === "S"){
  rover.y++;
console.log(`X: ${rover.x}, Y: ${rover.y}`);
  // move east
} else if(rover.direction === "E"){
  rover.x++;
  console.log(`X: ${rover.x}, Y: ${rover.y}`);
  // move west
} else if(rover.direction === "W"){
  rover.x--;
  console.log(`X: ${rover.x}, Y: ${rover.y}`);
}
}


// Iteration 4


function commands(steps) {
  // i = 0 ->l -> turnLeft
  // i = 1 ->l -> turnleft
  // i = 2 -> f ->  forward
  // i = 3 -> f -> forward
  // i = 4 -> r -> turnright
  // i = 5 -> r -> turnright
for(let i = 0; i < steps.length; i++){
  if(steps.charAt (i) === "r"){
    turnRight(rover);
  } else if(steps.charAt (i) === "l"){
    turnLeft(rover);
  } else if(steps.charAt (i) === "f"){
    moveForward(rover);
  }
  //Iteration 5
// push step
rover.travelLog.push(steps.charAt(i));
}
}

console.log(`Travel log ${rover.travelLog}`);


