// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
var mergeNo = function (intervals) {
    const res = []
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length; i++){
        if (i === intervals.length) {
            res.push(intervals[i + 1])
        }
        else if (intervals[i][1] >= intervals[i + 1][0]) {
            res.push([intervals[i][0], intervals[i + 1][1]])
            i++
        }
        else {
            res.push(intervals[i])
        }
    }
    return res
};
// 我的失败版本，有待改进


var merge = function (intervals) {
    const res = []
    intervals.sort((a, b) => a[0] - b[0]) //数组排序
    let pre = intervals[0] // 第一个值
    for (let i = 1; i < intervals.length; i++){
        let cur = intervals[i] //要与第一个值进行比较的值
        if (pre[1] >= cur[0]) {
            pre[1] = Math.max(pre[1], cur[1]) //比较后用pre存储结果
        }
        else {
            res.push(pre) //放到res
            pre = cur //更新pre
        }
    }
    res.push(pre)
    return res
};
//这个做法是滑动来判断前一个数组的第二个数与后一个数组的第一个数
//pre来进行比较
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// const test = [[1, 4], [0, 4]]
// console.log(test.sort())
console.log(mergeNo(intervals))