
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

const s = "abc"
console.log(permutation(s))