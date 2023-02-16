// 309. 最佳买卖股票时机含冷冻期
// 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 输入: prices = [1,2,3,0,2]
// 输出: 3
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

var maxProfit = function (prices) { 
    let n = prices.length
    let buy = -prices[0], sell = 0, freeze = 0
    for (let i = 1; i < n; i++){
        let temp = sell
        sell = Math.max(sell, prices[i] + buy)
        buy = Math.max(buy, freeze - prices[i])
        freeze = temp
    }
    return sell
}
//实质上运用了状态转移方程来进行计算，将方程简化为了sell与buy
//下面将给出状态方程的解放，更加详细具体

maxProfit2 = (prices) => {
    const n = prices.length
    // const dp = new Array(n).fill([])
    const dp = []
    for (let i = 0; i < n; i++){
        dp[i] = []
    }
    console.log(dp)
    if (prices.length <= 1) {
        return 0
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1])
    dp[1][1] = Math.max(dp[0][1], -prices[1])
    for (let i = 2; i < n; i++){
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
    }
    return dp[n - 1][0]
}
//上述代码使用了状态转移方程， 0代表不持有股票，1代表持有股票
//dp[i][0] 代表的是在第i天的时候，不持有股票的状态
//dp[i][1] 代表的是在第i天的时候，持有股票的状态
//定义好状态转移方程后，进行循环，dp[prices.length - 1][0]即代表最高利润


const prices = [1, 2, 3, 0, 2]
console.log(maxProfit2(prices));