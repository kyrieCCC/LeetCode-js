// 200. 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。
// 输入：grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
//   输出：1
var numIslands = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === "1") {
                count++ //遇到陆地count加一
                changeToZero(i, j, grid) //让陆地周围变成海洋
            }
        }
    }
    return count
};

const changeToZero = (i, j, grid) => { //这个函数让我们的陆地周围变成海洋
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") {
        return 
    }
    grid[i][j] = "0"
    changeToZero(i, j + 1, grid)
    changeToZero(i, j - 1, grid)
    changeToZero(i + 1, j, grid)
    changeToZero(i - 1, j, grid)
}

//使用dfs的方法，击败了94.60%的人
//我们首先在网格里面寻找是否有陆地，也就是为“1”的数值
//找到后，我们让count加一，随后我们让陆地周围的陆地变成海
//这样可以让陆地独立出来，不会影响接下来的循环判断
//最后计算出count的数量就是陆地的数量

const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
