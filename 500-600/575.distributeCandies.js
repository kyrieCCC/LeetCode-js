// 575. 分糖果
// Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。
// 医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。
// Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。
// 给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到糖的 最多 种类数。
// 输入：candyType = [1,1,2,2,3,3]
// 输出：3
// 解释：Alice 只能吃 6 / 2 = 3 枚糖，由于只有 3 种糖，她可以每种吃一枚。
// 输入：candyType = [6,6,6,6]
// 输出：1
// 解释：Alice 只能吃 4 / 2 = 2 枚糖，尽管她能吃 2 枚，但只能吃到 1 种糖。

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) { 
    const len = candyType.length / 2
    const arr = [...new Set(candyType)]

    if (len <= arr.length) {
        return len
    } else {
        return arr.length
    }
}
// 直接从长度来判断是否符合题目要求
// 首先需要为数组进行去重，可以直接引入set的方式
// 最后来比对去重后的数组的长度，如果长度比原本数组的一半长，说明糖果的种类非常之多
// 反之则说明总类少，直接返回去重后的数组长度

const distributeCandies_ans = (candyType) => {
    const set = new Set(candyType)
    return Math.min(set.size, candyType.length)
} 
// 官方答案，其实主题思路与我写的差不多
// 主要还是针对两个不同长度的比较
// 通过长度的比较输出糖果的总类

const candyType1 = [1, 1, 2, 2, 3, 3]
const candyType2 = [6, 6, 6, 6]
console.log(distributeCandies(candyType1));
console.log(distributeCandies(candyType2));
console.log('-==-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-');
console.log(distributeCandies_ans(candyType1));
console.log(distributeCandies_ans(candyType2));