// const cells = document.querySelectorAll(".cell");
// const rook = document.createElement("img");
// rook.setAttribute("src", "images/rook.png");

// const row = ["a", "b", "c", "d", "f", "g", "k", "l"];
// const column = [1, 2, 3, 4, 5, 6, 7, 8];
// const randomAmountFigures = Math.floor(Math.random() * 8) + 1;
// const figuresPositions = [];
// let amountFigureTaking = 0;

// function randomPositionGenerator() {
//   const rowPosition = Math.floor(Math.random() * 8);
//   const columnPosition = Math.floor(Math.random() * 8);
//   return column[columnPosition] + row[rowPosition];
// }

// function renderFigure(position, figure) {
//   for (let i = 0; i < 64; i++) {
//     if (cells[i].className.includes(position)) {
//       cells[i].appendChild(figure);
//       break;
//     }
//   }
// }

// function renderRookMoves(rookMovingPositions) {

//   for (let i = 0; i < 64; i++) {
//     for (let k = 0; k < rookMovingPositions.length; k++)
//       if (rookMovingPositions[k].indexOf(cells[i].classList[2]) !== -1) {
//         const dots = document.createElement("div");
//         dots.setAttribute("class", "dots");
//         cells[i].appendChild(dots);
//         break;
//       }

//   }
// }

// function showRookMovingPosition() {
//   // [topRight, topLeft, bottomRight, bottomLeft, topStraight, bottomStraight, rightStraight, leftStraight]
//   const movingPositions = [["topRight "], ["topLeft"], ["bottomRight"], ["bottomLeft"], ["topStraight"], ["rightStraight"], ["bottomStraight"], ["leftStraight"]];

//   let topRight = 0;
//   let bottomRight = 0;

//   for (let col = 0; col < column.length; col++) {
//     // topRight, bottomRight
//     if (col + 1 > rookPosition[0]) {
//       let dir1 = col + 1 + row[row.indexOf(rookPosition[1]) + ++topRight];
//       let dir2 = col + 1 + row[row.indexOf(rookPosition[1]) - ++bottomRight];
//       if (dir1) movingPositions[0].push(dir1);
//       if (dir2) movingPositions[2].push(dir2);
//     }

//     // topLeft, bottomLeft
//     if (+rookPosition[0] - (col + 1) < +rookPosition[0] && col + 1 < +rookPosition[0]) {
//       let dir1 = col + 1 + row[row.indexOf(rookPosition[1]) + +rookPosition[0] - (col + 1)];
//       let dir2 = col + 1 + row[row.indexOf(rookPosition[1]) - (+rookPosition[0] - (col + 1))];
//       if (dir1) movingPositions[1].push(dir1);
//       if (dir2) movingPositions[3].push(dir2);
//     }

//     // topStraight, bottomStraight
//     if (col > row.indexOf(rookPosition[1])) {
//       movingPositions[4].push(rookPosition[0] + [row[col]]);
//     } else if (col < row.indexOf(rookPosition[1])) {
//       movingPositions[6].push(rookPosition[0] + row[col]);
//     }

//     // rightStraight, leftStraight
//     if (col > +rookPosition[0] - 1) {
//       movingPositions[5].push(col + 1 + rookPosition[1]);
//     } else if (col < +rookPosition[0] - 1) {
//       movingPositions[7].push(col + 1 + rookPosition[1]);
//     }
//   }
//   return movingPositions;
// }

// // Generating pawns
// for (let idx = 0; idx < randomAmountFigures; idx++) {
//   const pawn = document.createElement("img");
//   pawn.setAttribute("src", "images/pawn.png");
//   const pawnPosition = randomPositionGenerator();
//   figuresPositions.push(pawnPosition);
//   renderFigure(pawnPosition, pawn);
// }

// // Rook
// const rookPosition = randomPositionGenerator();
// renderFigure(rookPosition, rook);

// const movingPositions = showRookMovingPosition();


// // for showing option on console
// const consoleMovingPositions = [...movingPositions];
// const consoleFigurePositions = [...figuresPositions];

// // 
// renderRookMoves(consoleMovingPositions);

// // this and above for explaining deeper
// for (let i = 0; i < 8; i++) {
//   for (let k = 0; k < 8; k++) {
//     if (movingPositions[k].includes(figuresPositions[i])) {
//       amountFigureTaking++;
//       movingPositions[k] = ["from here"];
//       figuresPositions[i] = "this figure you can take";
//       break;
//     }
//   }
// }

// console.log("rook-moving-positions : ", consoleMovingPositions);
// console.log("in-which-position-you-can-take : ", movingPositions);
// console.log("rook-position : ", rookPosition);
// console.log("figures-positions : ", consoleFigurePositions);
// console.log("figures-you-can-take : ", figuresPositions);
// console.log("rook-can-take : ", amountFigureTaking, " figures");

function convert(s , numRows ) {
  let result = '';
  let container = Array.from( new Array(5), function() { return []; } );

  console.log(container)
  let i = 0;
  while(i < s.length){
      for(let k = 0; k < numRows; k++){
          if(k === 0) container[0].push(s[i]);
          console.log('k = ', k )
          console.log('1 = ', container[2])
          i++;
      }
      console.log(i)
      for(let j = numRows-2; j > 0; j--){
          // container[j].push(s[i]);
          console.log('j = ', j)
          console.log(container[j])
          console.log(container[1])
          console.log(container[0])
          i++
      }
  }
  for(let i = 0; i < numRows; i++){
      for(let k = 0; k < container[i].length; k++){
          result = container[k]
      }
  }
   console.log(container[0]);
  return result;
};

convert('abcdlfg', 3)