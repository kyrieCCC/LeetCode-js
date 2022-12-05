// 31. 下一个排列
// 例如，arr = [1, 2, 3] ，以下这些都可以视作 arr 的排列：[1, 2, 3]、[1, 3, 2]、[3, 1, 2]、[2, 3, 1]
// 输入：nums = [1,2,3]
// 输出：[1, 3, 2]
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
var nextPermutation = function (nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    let n = nums[i];
    if (n < nums[i + 1]) {
      let index = i + 1;
      while (n < nums[index + 1]) {
        index++;//查看index后面还有没有比n大的数字，目的是找出只大一点点的数字
      }
      nums[i] = nums[index]; //找到了就交换位置
      nums[index] = n;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]//给后面的数字升序排列
        left++;
        right--;
      }
       break;
    }
    else if (i === 0) {
      nums.reverse();
    }
  }
};
const nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
//实例 nums = [1, 2, 3, 4, 6, 5]
//这个时候i为nums.length - 2 为4指向6
// 首先进行判断，nums[i]与nums[i + 1]
// 发现不符合第一个判断条件，即前面的比后面的大（6 > 5）
// 这个时候i--，i指向了3
// 再进行判断，(nums[i] < nums[i + 1]) ?
// 发现符合条件，这个时候记录index = i + 1，进入while循环
// 其中index + 1指向index后面的数字，指向5，符合while循环（4 < 5）
// index++
// 跳出循环，这个时候的index指向5
// 交换nums[i] and nums[index]
// 这个时候的数组是[1, 2, 3, 5, 6, 4]
// 不是我们预期的答案
// 我们记录这个时候的left为i + 1 === 4，right是nums.length - 1 === 5
// 我们需要让后面的数组升序排列
// 进入while循环
// left < right
// 然后交换两个数的值
// 最后得到结果，输出