// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。
// 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
var rob = function (nums) {
    if (!nums.length) return 0
    const dp = new Array(nums.length + 1)
    dp[0] = 0
    dp[1] = nums[0]
    for (let i = 2; i <= nums.length; i++){
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[nums.length]
};
const nums = [2,1,1,2]
console.log(rob(nums));
