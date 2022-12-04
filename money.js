// 输入：100000
// 输出：100,000
function moneyChanage(money) {
    const res = []
    let count = 0
    money = money.toString()
    for (let i = money.length - 1; i >= 0; i--){
        if (count % 3 === 0 && count !== 0) {
            res.unshift(',')
        }
        res.unshift(money[i])
        count++
    }
    return res.join('')
}
const money = 10000
const result = moneyChanage(money)
console.log(result)