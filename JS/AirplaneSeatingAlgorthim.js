let left = Array.from(Array(2), () => new Array(3));
fillArray(left, 0);
let middle_left = Array.from(Array(3), () => new Array(4));
fillArray(middle_left, 0);
let middle_right = Array.from(Array(3), () => new Array(2));
fillArray(middle_right, 0);
let right = Array.from(Array(4), () => new Array(3));
fillArray(right, 0);

let n = prompt("number of passengers?"),
  counter = 0;

//TODO: aisle seats
const MAX_ROWS = Math.max(
  left.length,
  middle_left.length,
  middle_right.length,
  right.length
);
for (let i = 0; i < MAX_ROWS; i++) {
  //the left seats
  if (i < left.length && counter < n) left[i][left[i].length - 1] = ++counter;

  //the middle left seats
  if (i < middle_left.length && counter < n) {
    middle_left[i][0] = ++counter;
  }
  if (i < middle_left.length && counter < n) {
    middle_left[i][middle_left[i].length - 1] = ++counter;
  }

  //the middle right seats
  if (i < middle_right.length && counter < n) {
    middle_right[i][0] = ++counter;
  }
  if (i < middle_right.length && counter < n) {
    middle_right[i][middle_right[i].length - 1] = ++counter;
  }

  //the right seats
  if (i < right.length && counter < n) right[i][0] = ++counter;
}

//TODO: window seats
const MAX_WINDOW_ROWS = Math.max(left.length, right.length);
for (let i = 0; i < MAX_WINDOW_ROWS; i++) {
  if (i < left.length && counter < n) left[i][0] = ++counter;
  if (i < right.length && counter < n)
    right[i][right[i].length - 1] = ++counter;
}

//TODO: middle seats
for (let i = 0; i < MAX_ROWS; i++) {
  //left seats
  if (i < left.length) printMiddleSeats(left, i);

  //middle left seats
  if (i < middle_left.length) printMiddleSeats(middle_left, i);

  //middle right seats
  if (i < middle_right.length) printMiddleSeats(middle_right, i);
  //right seats
  if (i < right.length) printMiddleSeats(right, i);
}

printSeats();

function printMiddleSeats(arr, i) {
  for (let j = 1; j < arr[i].length - 1 && counter < n; j++) {
    if (arr[i][j] != 0) break;
    else arr[i][j] = ++counter;
  }
}

function printSeats() {
  console.log("left seats\n");
  print2DArray(left);

  console.log("middle left seats\n");
  print2DArray(middle_left);

  console.log("middle right seats\n");
  print2DArray(middle_right);

  console.log("right seats\n");
  print2DArray(right);
}

function print2DArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + "\n");
  }
}
function fillArray(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = val;
    }
  }
}
