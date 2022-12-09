// 55. 跳跃游戏
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。
// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
var canJump = function (nums) {
    let endIndex = nums.length - 1 //末尾下标
    for (let i = nums.length - 2; i >= 0; i--){
        if ((endIndex - i) <= nums[i]) { // 算距离
            endIndex = i
        }
    }
    return endIndex === 0 //判断是否达到这个距离
};
//击败84.31%
//这个解法很巧妙
//从末尾开始算，末尾的index减去前一个的index得到的就是当前index到end的距离
//如果我们的nums[i]没达到这个距离，就跳到下一位
//如果整个数组都到不了这个距离，返回false

var canJumpplus = function (nums) { 
    let max = 0
    for (let i = 0; i <= max; i++){
        if (i + nums[i] > max) {
            max = i + nums[i]
        }
        if (max >= nums.length - 1) {
            return true
        }
    }
    return false
}
//击败96.84%
//上面我们可以用倒序法算出距离
//同样我们正序也可以算出距离
//两种解法都很好的理解，需要不断斟酌
const nums = [2, 3, 1, 1, 4]
console.log(canJumpplus(nums))