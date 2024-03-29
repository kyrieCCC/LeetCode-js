// 303. 区域和检索 - 数组不可变
// 给定一个整数数组  nums，处理以下类型的多个查询:

// 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right
// 实现 NumArray 类：
// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和
// //包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )
// 输入：
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// 输出：
// [null, 1, -1, -3]

// 解释：
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1))
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
};
  
/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0
    while (left <= right) {
        sum += this.nums[left]
        left++
    }
    return sum
};
//计算并累加sum，sum累加的范围为指定的left和right区域中的内容




/**
 * 解法二 前缀和
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const len = nums.length
    this.sum = new Array(len).fill(0)
    for(let i = 0; i < len; i++){
      this.sum[i + 1] = nums[i] + this.sum[i]
    }
  };
  
  /** 
   * @param {number} left 
   * @param {number} right
   * @return {number}
   */
 NumArray.prototype.sumRange = function(left, right) {
    return this.sum[right + 1] - this.sum[left]
};

const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(numArray.sumRange(0, 2)); // return 1 ((-2) + 0 + 3)
console.log(numArray.sumRange(2, 5)); // return -1 (3 + (-5) + 2 + (-1))
console.log(numArray.sumRange(0, 5)); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))