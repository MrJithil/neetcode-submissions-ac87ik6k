class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(rooms) {
        const bfs = (r, c, dist = 0) => {
          
            if (r < 0 || r >= rooms.length || c < 0 || c >= rooms[0].length || rooms[r][c] < dist) {
                return;
            }
            rooms[r][c] = dist;
            bfs(r + 1, c, 1 + dist);
            bfs(r - 1, c, 1 + dist);
            bfs(r, c - 1, 1 + dist);
            bfs(r, c + 1, 1 + dist);
        }

        for (let r = 0; r < rooms.length; r++) {
            for (let c = 0; c < rooms[0].length; c++) {
                if (rooms[r][c] === 0) {
                    bfs(r, c);
                }
            }
        }

        return rooms;
    }
}
