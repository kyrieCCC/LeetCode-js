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


const prices = [1, 2, 3, 0, 2]
console.log(maxProfit(prices));