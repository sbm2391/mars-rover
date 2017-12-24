/// MarsVehicleRover Object Prototype:
// ======================
function Rover (name, direction, x, y, travelLog) {
  this.name = name;
  this.direction = direction;
  this.x = x;
  this.y = y;
  this.travelLog = travelLog;
}
//Rover Object Prototype:
// ======================
var rover1 = new Rover("Rover 1", "N", 0, 0, []);
var rover2 = new Rover("Rover 2", "N", 9, 0, []);
// ======================
// Grid | Two dimensional arrays
var o = "obstacle";
var grid = [
  [' ',' ',' ',o,' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',o,' ',' ',' '],
  [o,' ',' ',' ',o,' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',o,' '],
  [' ',' ',' ',' ',' ',' ',o,' ',' ',' '],
  [' ',o,' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',o,' ',' ',' ',' ',' '],
  [' ',o,' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',o,' '],
  [' ',' ',' ',o,' ',' ',' ',' ',' ',' '],
];

// ======================
// Function Turn Left

function turnLeft(rover) {
  console.log(`----${rover.name}----`);
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "N";
      break;
  }
  console.log(`Direction: ${rover.direction}`);
  console.log(`Position: (${rover.x},${rover.y})`);
}
// ======================
// Function Turn Right
function turnRight(rover){
  console.log(`----${rover.name}----`);
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "S";
      break;
  }
  console.log(`Direction: ${rover.direction}`);
  console.log(`Position: (${rover.x},${rover.y})`);
}
// ======================
// Function move forward

function moveForward(rover){
  console.log(`----${rover.name}----`);
  console.log("moveForward was called");
  switch (rover.direction) {
    case 'N':
      if (rover.y > 0) {
        rover.y--;
        if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.y++
          console.log(`There is an other Rover on (${rover.x},${rover.y-1}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.y++;
          console.log(`There is an ${o} on (${rover.x},${rover.y-1}). Change your way!`);
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
    case 'W':
      if (rover.x > 0) {
        rover.x--;
        if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.x++
          console.log(`There is an other Rover on (${rover.x-1},${rover.y}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.x++;
          console.log(`There is an ${o} on (${rover.x-1},${rover.y}). Change your way!`)
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
    case 'S':
      if (rover.y < 9) {
        rover.y++;
        if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.y--
          console.log(`There is an other Rover on (${rover.x},${rover.y+1}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.y--;
          console.log(`There is an ${o} on (${rover.x},${rover.y+1}). Change your way!`)
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
    case 'E':
      if (rover.x < 9) {
        rover.x++;
        if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.x--
          console.log(`There is an other Rover on (${rover.x+1},${rover.y}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.x--;
          console.log(`There is an ${o} on (${rover.x+1},${rover.y}). Change your way!`)
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
  }
 console.log(`Direction: ${rover.direction}`);
 console.log(`Position: (${rover.x},${rover.y})`);
 rover.travelLog.push({x: rover.x, y: rover.y});
}
// ======================
// Function move backward
function moveBackward(rover){
  console.log(`----${rover.name}----`);
  console.log("moveBackward was called");
  switch (rover.direction) {
    case 'N':
      if (rover.y < 9) {
       rover.y++;
       if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.y--
          console.log(`There is an other Rover on (${rover.x},${rover.y+1}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.y--;
          console.log(`There is an ${o} on (${rover.x},${rover.y+1}). Change your way!`)
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
    case 'W':
      if (rover.x < 9) {
        rover.x++;
        if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.x--
          console.log(`There is an other Rover on (${rover.x+1},${rover.y}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.x--;
          console.log(`There is an ${o} on (${rover.x+1},${rover.y}). Change your way!`)
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
    case 'S':
      if (rover.y > 0) {
        rover.y--;
        if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.y++
          console.log(`There is an other Rover on (${rover.x},${rover.y-1}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.y++;
          console.log(`There is an ${o} on (${rover.x},${rover.y-1}). Change your way!`)
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
    case 'E':
      if (rover.x > 0) {
        rover.x--;
        if (rover1.x === rover2.x && rover1.y === rover2.y) {
          rover.x++
          console.log(`There is an other Rover on (${rover.x-1},${rover.y}). Change your way!`);
        } else if (grid[rover.y][rover.x] === o) {
          rover.x++;
          console.log(`There is an ${o} on (${rover.x-1},${rover.y}). Change your way!`)
        }
      } else {
        console.log("canceled command, you are on the grid limit!");
      }
      break;
  }
 console.log(`Direction: ${rover.direction}`);
 console.log(`Position: (${rover.x},${rover.y})`);
 rover.travelLog.push({x: rover.x, y: rover.y});
}
// ======================
// Function commands
function commands (rover, command) {
  //var _commands = commands.split("");
  //for (var command of _commands) {
    if (command === "r") {
      turnRight(rover);
    } else if (command === "l") {
      turnLeft(rover);
    } else if (command === "f") {
      moveForward(rover);
    } else if (command === "b"){
      moveBackward(rover);
    } else {
      if (command !== undefined) {
        console.log(`${command}, command not found`);
      }
    }
  //}
}
// ======================
// Function take turns
function turn(rover1, stringRover1, rover2, stringRover2) {
  if (stringRover1.length >= stringRover2.length) {
    for (i = 0; i < stringRover1.length; i++) {
      commands(rover1, stringRover1[i]);
      commands(rover2, stringRover2[i]);
    }
  } else {
    for (i = 0; i < stringRover2.length; i++) {
      commands(rover1, stringRover1[i]);
      commands(rover2, stringRover2[i]);
    }
  }
}

//commands Rover 1
//enter commands into the second argument
var stringRover1 = "rfbf";

//commands Rover 2
//enter commands into the second argument
var stringRover2 = "rbff";

// calling function turn
turn(rover1, stringRover1, rover2, stringRover2);

//Rover's travel track
console.log(`----Rover 1----`);
console.log(rover1.travelLog);
console.log(`----Rover 2----`);
console.log(rover2.travelLog);
