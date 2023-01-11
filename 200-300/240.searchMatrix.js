// 240. 搜索二维矩阵 II
// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// 输出：true
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === target){
                return true
            }
        }
    }
    return false
};
//这一解决方法不过多解释，使用暴力循环的方法，循环二维数组中的每一个值
//直到找到目标值，这个写法的缺陷非常明显，就是时间复杂度太高
//时间复杂度为on²，不值得推荐

var searchMatrix2 = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++){
        if (target >= matrix[i][0] && target >= matrix[i][matrix.length - 1]) { //新增判断条件，判断具体落下的区间范围
            for(let j = 0; j < matrix[0].length; j++){
                if(matrix[i][j] === target){
                    return true
                }
            }
        }
    }
    return false
};

//本方法在上一个暴力循环的方法的基础上新增了一个判断条件
//利用题目排序的特性，判断目标值落下的区间
//将二维数组的遍历简化为一维数组
//时间复杂度为o（n+m），能够通过leetcode的全部用例

const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5
console.log(searchMatrix(matrix, target))