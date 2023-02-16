// 322. 零钱兑换
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1

var coinChange = function (coins, amount) { 
    if (!amount) {
        return 0
    }
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < coins.length; i++){
        for (let j = coins[i]; j <= amount; j++){
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}

//本题使用的是动态规划的方法，dp[i]代表的是当amount为i的时候需要的最少数
//第一层for循环代表每一个存在在coins里面的数字
//第二层循环代表的是有这一个数字要达到amount需要的最少数字
//时间复杂度on²

const coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount));