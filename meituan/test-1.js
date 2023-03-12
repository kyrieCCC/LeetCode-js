const myfun = (s) => {
    let count = 0
    const res = []
    res.push(s[0])
    for(let i = 1; i < s.length; i++){
        if (res[i - 1] === s[i]) {
            res.push('a')
            count++
        }
        else {
            res.push(s[i])
        }
    }
    return count
}
  
// const myfun = (s) => {
//     s = s.split('').sort((a, b) => a - b).join('')
//     let count = 1
//     const res = []
//     for(let i = 1; i < s.length; i++){
//         if (s[i - 1] === s[i]) {
//             count++
//             if (i === s.length - 1) {
//                 res.push(count)
//             }
//         }
//         else {
//             res.push(count)
//             count = 1
//         }
//     }
//     count = 0
//     res.forEach(item => {
//         if (item % 2 === 0) {
//             count += item / 2
//         }
//         else {
//             count += Math.floor(item / 2)
//         }
//     })
//     return res
// }


const s = '115551111'
console.log(myfun(s))