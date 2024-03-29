// 455. 分发饼干
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。
// 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
// 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
// 输入: g = [1,2,3], s = [1,1]
// 输出: 1
// 解释:
// 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
// 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
// 所以你应该输出1。
// 输入: g = [1,2], s = [1,2,3]
// 输出: 2
// 解释:
// 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
// 你拥有的饼干数量和尺寸都足以让所有孩子满足。
// 所以你应该输出2.

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) { 
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let i = 0, j = 0
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    return i
}
// 首先通过sort先给数组进行排序操作
// 随后设置两个指针，分别指向g和s的首部
// 之后进行判断，如果g小于s的值则说明满足胃口反之不满足
// 最后当i或者j越界的时候结束循环，返回i值


const findContentChildren_ans = (g, s) => {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let index = s.length - 1
    let res = 0
    for (let i = g.length - 1; i >= 0; i--){
        if (index >= 0 && s[index] >= g[i]) {
            res++
            index--
        }
    }
    return res
}
// 官方的解法
// 其实主题思想与我的写一致，还是使用到了贪心的解法
// 先要喂饱胃口最大的人，倒序进行
// 最后返回喂饱的人的个数

const g1 = [1, 2, 3], s1 = [1, 1]
const g2 = [1, 2], s2 = [1, 2, 3]
console.log(findContentChildren(g1, s1));
console.log(findContentChildren(g2, s2));
console.log('-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-==-=');
console.log(findContentChildren_ans(g1, s1));
console.log(findContentChildren_ans(g2, s2));