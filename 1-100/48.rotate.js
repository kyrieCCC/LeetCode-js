// 48. 旋转图像
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]
var rotate1 = function (matrix) {
    const len = matrix[0].length
    const new_matrix = new Array(len).fill(0).map(() => new Array(len).fill(0))
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            new_matrix[j][len - i - 1] = matrix[i][j]
        }
    }
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            matrix[i][j] = new_matrix[i][j]
        }
    }
    return matrix
};
// 利用新的矩阵来记录第一个矩阵里面的数字，但是时间复杂度为on²太高啦
var rotate = function (matrix) {
    const n = matrix[0].length
    for (let i = 0; i < Math.floor(n / 2); i++){
        for (let j = 0; j < Math.floor((n + 1) / 2); j++){
            const temp = matrix[i][j] //一个临时变量获取到ij的值
            matrix[i][j] = matrix[n - j - 1][i] //开始转圈，把左下角放到左上角
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]//把右下角放到左下角
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]//把右上角放到右下角
            matrix[j][n - i - 1] = temp //把左上角放到右上角
        }
    }
    return matrix
};
//这个解法要注意一个问题，就是i< n/2 这样做是因为我们每次只需要变动1/4部分的数值，左上角1/4，右上角1/4...
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(matrix))