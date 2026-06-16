class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows  = grid.length;
        const cols = grid[0].length;

        const bfs = (i, j) => {
            if(i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] !== '1'){
                return; 
            }

            grid[i][j] = "#";
            bfs(i + 1, j);
            bfs(i - 1, j);
            bfs(i, j + 1 );
            bfs(i, j - 1 );
        }
        let islands = 0;

        for(let i = 0; i< rows; i++){
            for(let j = 0; j< cols; j++){
                if(grid[i][j] === '1'){
                    bfs(i,j);
                    islands++;
                }
            }
        }

        return islands;
    }
}
