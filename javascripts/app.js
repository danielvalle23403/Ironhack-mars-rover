// Rover Object Goes Here
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
//  Iteration 1
let rover = {
  direction: "N"
}

// Iteration 2
function turnLeft(rover){
// Condition statements to check which direction its facing
if (rover.direction == "N"){
rover.direction = "W" ;
console.log("Direction is W");
} else if(rover.direction == "W"){
    rover.direction = "S";
    console.log("Direction is S");
} else if(rover.direction == "S"){
    rover.direction = "E"; 
} else if(rover.direction == "E")
    rover.direction = "N"; 
}


function turnRight(rover){

}


