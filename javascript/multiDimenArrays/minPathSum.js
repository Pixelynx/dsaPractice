let minPathSum = function(grid) {
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(row !== 0 && col !== 0) {
                grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
            } else if(row === 0 && col !== 0) {
                grid[row][col] += grid[row][col - 1];
            } else if (col === 0 && row !== 0) {
                grid[row][col] += grid[row - 1][col];
            } 
        }
    }
   
    return grid[grid.length - 1][grid[0].length - 1];  
}
