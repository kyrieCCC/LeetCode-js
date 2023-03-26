// //小红书笔试测试部分
// // const str = 'z'
// // console.log(str.charCodeAt(0))
// // const code = str.charCodeAt(0)
// // console.log(String.fromCharCode(code));

// const findOrigin = (str) => {
//     const res = []
//     for(let i = 0; i < str.length; i++){
//       res.push(uncode_1(str[i]))
//     }
//     return res.join("")
//   }
  
//   const uncode = (letter) => {
//     let letterNum = letter.charCodeAt(0)
//     if(letterNum == 97){
//       letterNum = String.fromCharCode(122)
//       return letterNum
//     }
//     else{
//       letterNum = letter.charCodeAt(0) - 1
//       let code = String.fromCharCode(letterNum)
//       return code
//     }
//   }
  
//   const uncode_1 = function uncode_1_1(str){
//       let i = 0
//       while (i < 3) {
//           str = uncode(str)
//           i++
//       }
//       return str
// }

// const str = 'def'
// console.log(findOrigin(str))




const myFun = (arr, left, right, options, params) => {
    const res = arr
    for(let i = 0; i < options.length; i++){
      if(options[i] == "="){
        for(let j = 0; j < res.length; j++){
          if(j <= right[i] && j >= left[i]){
            res[j] = params[i]
          }
        }
      }
      if(options[i] == "|"){
        for(let j = 0; j < res.length; j++){
          if(j <= right[i] && j >= left[i]){
            res[j] = option1(res[j], params[i])
          }
        }
      }
      if(options[i] == "&"){
        for(let j = 0; j < res.length; j++){
          if(j <= right[i] && j >= left[i]){
            res[j] = option2(res[j], params[i])
          }
        }
      }
    }
    return res
  }
  
  //或操作
  const option1 = (item, params) => {
    const changeItem = (item || params)
    return changeItem
  }
  

  //与操作
  const option2 = (item, params) => {
      const changeItem2 = (item && params)
    return changeItem2
  }
  console.log(option2(3, 4))
  //设操作
  const option3 = (params) => {
    return params
}
  
const arr = [5, 4, 7, 4]
const left = [1, 2, 3, 4]
const right = [4, 3, 4, 2]
const options = ['=', '|', '&', '=']
const params = [8, 3, 6, 2]
console.log(myFun(arr, left, right, options, params))
