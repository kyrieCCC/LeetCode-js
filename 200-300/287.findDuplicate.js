// 287. 寻找重复数
// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
// 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
// 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
// 输入：nums = [1,3,4,2,2]
// 输出：2
// 输入：nums = [3,1,3,4,2]
// 输出：3
var findDuplicate1 = function (nums) { 
    const map = new Map()
    for (let i = 0; i < nums.length; i++){
        if (map.has(nums[i])) {
            return nums[i]
        }
        map.set(nums[i], nums[i])
    }
}   
//本方法能通过测试用例，但并不是正确答案
//题目要求本题的空间复杂度为o1，但是map超出了空间复杂度的阈值
//所以并不是本题的最优解

var findDuplicate = function (nums) { 
    let slow = 0, fast = 0
    do {
        slow = nums[slow] 
        fast = nums[nums[fast]] //快慢指针移动
    } while (slow != fast)
    slow = 0
    while (slow != fast) {
        slow = nums[slow] //找到相同值
        fast = nums[fast]
    }
    return slow
}   

//使用了快慢指针的解法，本质上就是是在查看是否存在环
//击败80.95%
//快慢指针的解法时间复杂度为on，空间复杂度为o1


const nums = [1, 3, 4, 6, 6]
console.log(findDuplicate(nums))