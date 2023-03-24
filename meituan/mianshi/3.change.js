//给定一个数字，实现一个数额显示的函数
//使用遍历加逆序的方式实现

const myFun = (money) => {
    const res = []
    let count = 0
    money = money.toString()
    for (let i = money.length - 1; i >= 0; i--){
        if (count !== 0 && count % 3 == 0) {
            res.unshift(",")
        }
        res.unshift(money[i])
        count++
    }
    return res.join("")
}

const money = 12345678
console.log(myFun(money))