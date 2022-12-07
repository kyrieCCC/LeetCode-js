// 69. x 的平方根
// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
// 输入：x = 8
// 输出：2
// 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
var mySqrt = function (x) { 
    let left = 0, right = x
    if (x === 1) {
        return 1 //特殊值处理，因为1乘什么都都是1 
    }
    let mid, res
    while (1) {
        mid = Math.floor((left + right) / 2)
        if (mid ** 2 > x) { //mid大于结果，right左移
            right = mid
        }
        else if (mid ** 2 < x) { //mid小于结果，left右移
            left = mid
        }
        else if (mid ** 2 === x) { //如果我们的结果不存在小数，那么这一项可以拿到结果
            return mid
        }
        res = Math.floor((left + right) / 2) //判断我们的小数位是否存在小数
        if(res === mid) return res
    }
}
//本题目使用的方法是二分法，通过left跟right来确定mid的范围
//最后我们res是为了四舍五入，否则我们的万一我们的结果出现了小数位就会出现死循环的情况
const x = 8
console.log(mySqrt(x))