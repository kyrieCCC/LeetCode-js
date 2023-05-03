// 119. 杨辉三角 II
// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
// 输入: rowIndex = 3
// 输出: [1, 3, 3, 1]
// 输入: rowIndex = 1
// 输出: [1,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) { 
    const res = new Array(rowIndex).fill(0)
    for (let i = 0; i <= rowIndex; i++){
        res[i] = new Array(i + 1).fill(0)
        res[i][0] = res[i][i] = 1
        for (let k = 1; k < i; k++){
            res[i][k] = res[i - 1][k - 1] + res[i - 1][k]
        }
    }
    return res[rowIndex]
}

const rowIndex1 = 3
const rowIndex2 = 1
console.log(getRow(rowIndex1));
console.log(getRow(rowIndex2));