// 278. 第一个错误的版本
// 输入：n = 5, bad = 4
// 输出：4
// 解释：调用 isBadVersion(3) -> false 
// 调用 isBadVersion(5) -> true 
// 调用 isBadVersion(4) -> true
// 所以，4 是第一个错误的版本。

var solution = function (isBadVersion) {
    return function (n) {
        let left = 1, right = n
        while (left < right) {
            const midItem = Math.floor(left + (right - left) / 2)
            if (isBadVersion(midItem)) {
                right = midItem
            }
            else {
                left = midItem + 1
            }
        }
        return left
    }
}
//二分查找，确定错误的版本位置，可以节省时间复杂度