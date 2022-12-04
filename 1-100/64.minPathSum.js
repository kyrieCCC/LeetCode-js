// 64. 最小路径和
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
var minPathSum = function (grid) {
    const n = grid[0].length
    const m = grid.length
    for(let i = 1; i < m; i++){
        grid[i][0] += grid[i - 1][0]
    }
    for(let j = 1; j < n; j++){
        grid[0][j] += grid[0][j - 1]
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    return grid[m - 1][n - 1]
};
const grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
console.log(minPathSum(grid))