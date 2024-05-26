// function func(rows) {
//   let pattern = "";
//   for (let i = 0; i < rows; i++) {
//     let lines = " ".repeat(i) + "* ".repeat(rows - i);
//     pattern += lines + "\n";
//   }
//   for (let j = rows - 1; j >= 0; j--) {
//     let lines = " ".repeat(j) + "* ".repeat(rows - j);
//     pattern += lines + "\n";
//   }
//   return pattern;
// }
// console.log(func(5));
// function printDiamond(rows) {
//   let pattern = "";
//   for (let i = 0; i < rows; i++) {
//     let lines = " ".repeat(rows - i - 1);
//     if (i === 0) {
//       lines += "*";
//     } else if (i === rows - 1) {
//       lines += "*".repeat(2 * rows - 1);
//     } else {
//       lines += "*";
//       lines += " ".repeat(2 * i - 1);
//       lines += "*";
//     }
//     pattern += lines + "\n";
//   }
//   return pattern;
// }
// console.log(printDiamond(5));
// function func(rows) {
//   let pattern = "";
//   for (let i = 0; i < rows; i++) {
//     let lines = "";
//     if (i === 0) {
//       lines += "*".repeat(9);
//     } else {
//       lines += " ".repeat(i);
//       lines += "*";
//       while (i !== rows - 1) {
//         lines += " ".repeat(2 * rows - 1 - 2 * (i + 1));
//         lines += "*";
//       }
//     }
//     pattern += lines + "\n";
//   }
//   return pattern;
// }
// console.log(func(5));
// function printDiamond(rows) {
//   let pattern = "";
//   for (let i = 0; i < rows; i++) {
//     let lines = " ".repeat(rows - i - 1);
//     lines += "*";
//     if (i > 0) {
//       lines += " ".repeat(2 * i - 1);
//       lines += "*";
//     }
//     pattern += lines + "\n";
//   }
//   for (let j = rows - 2; j >= 0; j--) {
//     let lines = " ".repeat(rows - j - 1);
//     lines += "*";
//     if (j > 0) {
//       lines += " ".repeat(2 * j - 1);
//       lines += "*";
//     }
//     pattern += lines + "\n";
//   }
//   return pattern;
// }
// console.log(printDiamond(5));
// function generatePascalsTriangle(rows) {
//   let triangle = [];
//   for (let i = 0; i < rows; i++) {
//     triangle[i] = [i + 1];
//     for (let j = 0; j <= i; j++) {
//       if (j === 0 || j === i) {
//         triangle[i][j] = 1;
//       } else {
//         triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//       }
//     }
//   }
//   let pattern = "";
//   for (let i = 0; i < rows; i++) {
//     pattern += " ".repeat((rows - i - 1) * 2);
//     for (let j = 0; j <= i; j++) {
//       pattern += triangle[i][j];
//       if (j < i) {
//         pattern += "   ";
//       }
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(generatePascalsTriangle(5));
// function printPattern(n) {
//   // Function to print the top half of the pattern
//   debugger
//   function printTopHalf(n) {
//     for (let i = 1; i <= n; i++) {
//       let line = "";
//       // Print leading spaces
//       for (let space = 1; space <= n - i; space++) {
//         line += " ";
//       }
//       // Print decreasing numbers from i to 1
//       for (let num = i; num >= 1; num--) {
//         line += num;
//       }
//       // Print increasing numbers from 2 to i
//       for (let num = 2; num <= i; num++) {
//         line += num;
//       }
//       console.log(line);
//     }
//   }
//   // Function to print the bottom half of the pattern
//   function printBottomHalf(n) {
//     for (let i = n - 1; i >= 1; i--) {
//       let line = "";
//       // Print leading spaces
//       for (let space = 1; space <= n - i; space++) {
//         line += " ";
//       }
//       // Print decreasing numbers from i to 1
//       for (let num = i; num >= 1; num--) {
//         line += num;
//       }
//       // Print increasing numbers from 2 to i
//       for (let num = 2; num <= i; num++) {
//         line += num;
//       }
//       console.log(line);
//     }
//   }
//   // Print the full pattern
//   printTopHalf(n);
//   printBottomHalf(n);
// }
// // Middle row index
// const n = 4;
// printPattern(n);

// // /////////////////////////////////////////////////////
// function func(n) {
//   function printTopHalf(n) {
//     for (let main = 1; main <= n; main++) {
//       let line = "";
//       for (let space = 1; space <= n - main; space++) {
//         line += " ";
//       }
//       for (let numDecrease = main; numDecrease >= 1; numDecrease--) {
//         line += numDecrease;
//       }
//       for (numIncrease = 2; numIncrease <= main; numIncrease++) {
//         line += numIncrease;
//       }
//       console.log(line);
//     }
//   }
//   function printBottomHalf(n) {
//     for (let i = n - 1; i >= 1; i--) {
//       let line = "";

//       for (let space = 1; space <= n - i; space++) {
//         line += " ";
//       }
//       for (let num = i; num >= 1; num--) {
//         line += num;
//       }
//       for (lastNum = 2; lastNum <= i; lastNum++) {
//         line += lastNum;
//       }
//       console.log(line);
//     }
//   }

//   printTopHalf(n);
//   printBottomHalf(n);
// }
// console.log(func(4));
