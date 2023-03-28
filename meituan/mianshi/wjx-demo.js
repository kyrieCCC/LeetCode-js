//查找字符子串，子串的长度为10，且字串出现的次数不少于2次
//例如
//s = 'AAAAACCCCCAAAAACCCCCAAAAAGGGTTT'
//输出 ['AAAAACCCCC', 'CCCCCAAAAA']

const finSub = (str) => {
    const map = new Map()
    const res = []
    for (let i = 0; i < str.length - 10; i++){
        let subStr = str.slice(i, i + 10)
        if (map.has(subStr)) {
            res.push(subStr)
        }
        else {
            map.set(subStr, 1)
        }
    }
    return res
}

const s = 'AAAAACCCCCAAAAACCCCCAAAAAGGGTTT' 
console.log(finSub(s));