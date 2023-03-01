// 剑指 Offer II 070. 排序数组中只出现一次的数字
// 给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。
// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。
// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2

//1. 第一种方法，超出时空间复杂度
var singleNonDuplicate = function (nums) { 
    const map = new Map()
    for (let i = 0; i < nums.length; i++){
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
        else {
            map.set(nums[i], 1)
        }
    }
    for (let i = 0; i < nums.length; i++) { 
        if (map.get(nums[i]) === 1) {
            return nums[i]
        }
    }
}


//2. 第二种解法，同样超时
const singleNonDuplicate_2 = (nums) => {
    let i = 0
    while (i < nums.length) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
        else {
            i += 2
        }
    }
}

//3. 第三种解法，异或＆二分查找，符合规定的时空间复杂度
const singleNonDuplicate_3 = (nums) => {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === nums[mid ^ 1]) {
            left = mid + 1
        }
        else {
            right = mid
        }
    }
    return nums[left]
}
//该解法使用异或方法，当1异或上某一个数字时
//当这个数字是奇数，则mid - 1， 若这个数字为偶数，则mid + 1
//通过单个数字两侧的数字的特殊性进行判断

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]
console.log(singleNonDuplicate_3(nums));