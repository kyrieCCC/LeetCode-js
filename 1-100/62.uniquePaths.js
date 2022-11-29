// 62. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？
// 输入：m = 3, n = 7
// 输出：28
var uniquePaths = function (m, n) { 
    const dp = Array(m).fill().map(item => Array(n)) //创建一个二维数组，数组的样子与方块宫的样子一致
    for (let i = 0; i < m; i++){ //当同一行的时候 路径为1
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++){ //当同一列的时候 路径为1
        dp[0][j] = 1
    }
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){ //计算出不同位置下的 路径数量
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1] //目标位于右下角
}
//本次使用的是动态规划的方法
const m = 3, n = 7
const result = uniquePaths(m, n)
console.log(result)