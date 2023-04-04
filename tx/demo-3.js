
//大数相减
const myFun = (num1, num2) => {
    const len1 = num1.length
    const len2 = num2.length
    const arr1 = num1.toString().split("").map((item) => parseInt(item))
    const arr2 = num2.toString().split("").map((item) => parseInt(item))
    let i = arr1.length - 1, j = arr2.length - 1
    const res = []
    while (i >= 0 || j >= 0) {
        if (arr1[i] >= arr2[j]) {
            res.push(arr1[i] - arr2[j])
        }
        if (arr1[i] < arr2[j]) {
            arr1[i - 1] -= 1
            arr1[i] += 10
            res.push(arr1[i] - arr2[j])
        }
        i--, j--
    }
    return res
}

const num1 = '22222222222222222222'
const num2 = '11111111111111111111'
console.log(num1.length
);
const res = myFun(num1, num2)
console.log(res.length);