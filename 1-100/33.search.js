// 33. 搜索旋转排序数组
// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，
// 则返回它的下标，否则返回 - 1 。
// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
var search = function (nums, target) {
    if (nums.length === 0) {
        return -1
    }
    function dfs(left, right) {
        if (nums[left] === target) {
            return left
        }
        if (nums[right] === target) {
            return right
        }
        if (left === right || left === right - 1) {
            return -1
        } //递归的终止条件
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[right] > nums[mid]) { //如果右边大于中间，说明升序
            if (target > nums[mid] && target < nums[right]) {
                return dfs(mid, right)
            }
            else {
                return dfs(left, mid)
            }
        }
        else {
            if (target > nums[left] && target < nums[mid]) {
                return dfs(left, mid)
            }
            else {
                return dfs(mid, right)
            }
        }
    }
    return dfs(0, nums.length - 1)
};
//使用的是二分查找的思想
const nums = [4, 5, 6, 7, 0, 1, 2], target = 0
console.log(search(nums, target))