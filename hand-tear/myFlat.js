//手撕数组扁平化操作

const myFlat = (nums) => {
    const stack = [...nums]
    const res = []
    while (stack.length) {
        const item = stack.pop()
        if (Array.isArray(item)) {
            stack.push(...item)
        }
        else {
            res.push(item)
        }
    }
    return res.reverse()
}

const nums = [1, 2, [3, 4, [5, 6, 7], 8,], 9]
console.log(myFlat(nums));