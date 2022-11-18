// 165. 比较版本号
// 如果 version1 > version2 返回 1，
// 如果 version1 < version2 返回 -1，
// 除此之外返回 0。
// 输入：version1 = "1.01", version2 = "1.001"
// 输出：0
// 解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

var compareVersion = function (version1, version2) { 
    const v1 = version1
    const v2 = version2
    for (let i = 0; i < v1.length || i < v1.length; i++){
        let x = 0, y = 0
        if (i < v1.length) {
            x = parseInt(v1[i])
        }
        if (i < v2.length) {
            y = parseInt(v2[i])
        }
        if (x > y) {
            return 1
        }
        if (x < y) {
            return -1
        }
    }
    return 0
}

const version1 = "1.0", version2 = "1.0.0"
const result = compareVersion(version1, version2)
console.log(result)