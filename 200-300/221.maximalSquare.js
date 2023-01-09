// 221. 最大正方形
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4
var maximalSquare = function (matrix) { 
    let maxLen = 0
    const dp = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++){
        dp[i] = new Array(matrix[i].length).fill(0)
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                }
                else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
            }
            maxLen = Math.max(maxLen, dp[i][j])
        }
    }
    return maxLen * maxLen
}

const matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
console.log(maximalSquare(matrix))