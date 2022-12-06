// 39. 组合总和
// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
// 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，
// 并以列表形式返回。你可以按 任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取
// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。
var combinationSum = function (candidates, target) { 
    const res = []
    const dfs = (target, arr, index) => { //回溯算法
        if (index === candidates.length) { //当index到达边界后返回
            return
        }
        if (target === 0) { //target === 0 表示符合
            res.push(arr)
            return
        }
        dfs(target, arr, index + 1)//回溯后面的数
        if (target - candidates[index] >= 0) {
            dfs(target - candidates[index], [...arr, candidates[index]], index) //符合条件的数字放到arr
        }
    }
    dfs(target, [], 0)
    return res
}
const candidates = [2, 3, 6, 7], target = 7
console.log(combinationSum(candidates, target))