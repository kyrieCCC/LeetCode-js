// 221. 最大正方形
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4
var maximalSquare = function (matrix) { 
    let maxLen = 0
    const dp = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++){
        dp[i] = new Array(matrix[i].length).fill(0) //初始化dp数组，dp数组是一个二维数组
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) { //第一条边上的dp值只能为1
                    dp[i][j] = 1
                }
                else { //动态计算出每一个dp的数值
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
            }
            maxLen = Math.max(maxLen, dp[i][j]) //进行比较拿到最大值
        }
    }
    return maxLen * maxLen
}

//本题使用的是动态规划的方法
//dp数组用来记录每一个位置上的面积大小
//使用maxlen来记录最大值，每次循环都会与dp数组进行比较拿到最大值
//最后返回的是面积，所以maxlen的平方就是最后的答案、

const matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
console.log(maximalSquare(matrix))