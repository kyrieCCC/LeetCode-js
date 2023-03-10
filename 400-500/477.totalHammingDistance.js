// 477. 汉明距离总和
// 两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。
// 给你一个整数数组 nums，请你计算并返回 nums 中任意两个数之间 汉明距离的总和 。
// 输入：nums = [4,14,2]
// 输出：6
// 解释：在二进制表示中，4 表示为 0100 ，14 表示为 1110 ，2表示为 0010 。（这样表示是为了体现后四位之间关系）
// 所以答案为：
// HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6

var totalHammingDistance = function (nums) { 
    let res = 0
    for (let i = 0; i < 30; i++){
        let c = 0
        nums.forEach(item => {
            c += (item >> i) & 1
        });
        res += c * (nums.length - c)
    } 
    return res
}

//本题使用的思路，首先计算每一位的1的个数，距离就是c*(nums.length - c)
//最后再把结果累加起来即可

const nums = [4, 14, 2]
console.log(totalHammingDistance(nums));