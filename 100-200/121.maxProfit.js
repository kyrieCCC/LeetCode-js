// 121. 买卖股票的最佳时机
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
//设计一个算法来计算你所能获取的最大利润。
// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//  注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
var maxProfit = function (prices) { 
    let minPrice = prices[0], res = 0 //首先定义一个最低价格
    const len = prices.length
    if (len < 2) return 0  //要注意，在进行循环的时候，滑动一直往前，不能往后
    for (let i = 1; i < len; i++){
        res = Math.max(res, prices[i] - minPrice) //判断大小
        minPrice = Math.min(minPrice, prices[i]) //将最低价格调换
    }
    return res
}
//2023-2-27现在是大三下第三周周一大数据课，腾讯,字节春招练习题
//滑动判断的方法
const prices = [7,1,5,3,6,4]
const result = maxProfit(prices)
console.log(result)