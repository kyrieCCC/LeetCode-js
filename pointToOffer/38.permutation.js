
var permutation = function (s) { 
    const n = s.length
    const arr = Array.from(s).sort()
    const res = [], vis = [], perm = []
    
    const backTrack = (i, n, arr, perm) => {
        if (i === n) {
            res.push(perm.toString())
            return;
        }
        for (let j = 0; j < n; j++){
            if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
                continue;
            }
            vis[j] = true
            perm.push(arr[j])
            backTrack(i + 1, n, arr, perm) 
            perm.pop()
            vis[j] = false
        }
    }

    backTrack(0, n, arr, perm)
    const resArr = new Array(res.length).fill(0)
    for (let k = 0; k < res.length; k++){
        resArr[k] = res[k].split(',').join('')
    }
    return resArr
}

//击败30% 字节跳动春招练习
//本题使用的是回溯算法的思路，将单个字母拆分出来
//将剩余的字母不同排列插入
//要注意其中有重复的元素判断，再if判断跳条件中过滤

const s = "abc"
console.log(permutation(s))