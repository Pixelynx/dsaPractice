let islandGrid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

let numIslands = function(grid) {
    const ahoy = [[-1,0], [0,-1],[0,1],[1,0]];
    let islands = 0;
    const travel = locate => {
      const [ row, col ] = locate;
      if(grid[row][col] === "1") grid[row][col] = "0"
      ahoy.forEach(pos => {
        const [ row_ , col_ ] = pos;
        if(grid[row + row_] && grid[row + row_][col + col_] === "1"){
          travel([row + row_, col + col_]);
        }
      })
    }

    grid.forEach((row, i) => {
      row.forEach((col,j) => {
        if(col === "1"){
          islands++;
          travel([i,j]);          
        }
      })
    })
    return islands
  };

  console.log(numIslands(islandGrid));