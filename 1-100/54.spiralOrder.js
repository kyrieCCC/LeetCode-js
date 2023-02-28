// 54. 螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

var spiralOrder = function (matrix) { 
    if (matrix.length === 0) {
        return []
    }
    const res = []
    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) res.push(matrix[top][i])
        for (let i = top; i < bottom; i++) res.push(matrix[i][right])
        for (let i = right; i > left; i--) res.push(matrix[bottom][i])
        for (let i = bottom; i > top; i--) res.push(matrix[i][left])
        top++
        left++
        bottom--
        right--
    }
    if (left === right) {
        for (let i = top; i <= bottom; i++){
            res.push(matrix[i][left])
        }
    }
    else if (top === bottom) {
        for (let i = left; i <= right; i++){
            res.push(matrix[top][i])
        }
    }
    return res
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix));