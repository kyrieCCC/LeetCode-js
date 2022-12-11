// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
var merge = function (intervals) {
    const res = []
    let endIndex = 1,startIndex = 0
    for (let i = 0; i < intervals.length; i++){
        if (i === intervals.length) {
            res.push(intervals[i + 1])
        }
        else if (intervals[i][endIndex] >= intervals[i + 1][startIndex]) {
            res.push([intervals[i][startIndex], intervals[i + 1][endIndex]])
            i++
        }
        else {
            res.push(intervals[i])
        }
    }
    return res
};
// 我的失败版本，有待改进
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
console.log(merge(intervals))