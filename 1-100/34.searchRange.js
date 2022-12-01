// 34. 在排序数组中查找元素的第一个和最后一个位置
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3, 4]
// 如果数组中不存在目标值 target，返回 [-1, -1]。  
var searchRange = function (nums, target) {
    let leftIndex = -1, rightIndex = -1, i = 0
    let left = 0, right = nums.length - 1
    while (left <= right && i <= nums.length - 1) {
        i++
        nums[left] === target ? leftIndex = left : left++ //左边的元素等于目标值，把leftIndex赋值为当前位置
        nums[right] === target ? rightIndex = right : right-- //右边的元素等于目标值，把rightIndex赋值为当前位置
    }
    return [leftIndex, rightIndex] 
};
//使用二分法从数组的两边进行查找
const nums = [1, 2, 3], target = 2;
const res = searchRange(nums, target);
console.log(res);
