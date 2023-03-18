//代码测试
const myFun = (nums, x, y) => {
    let count = 0, max = -1 
    let min_x = -1
    let min_y = -1
    for (let i = 0; i < nums.length; i++){
        if (nums[i][0] > x || nums[i][1] > y) {
            continue
        }
        count = 1
        min_x = nums[i][0]
        min_y = nums[i][1]
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j][0] < min_x) {
                min_x = nums[j][0]
            }
            else if (nums[j][1] < min_y) {
                min_y = nums[j][1]
            }
            let len_x = Math.abs(nums[j][0] - min_x)
            let len_y = Math.abs(nums[j][1] - min_y)
            if(len_x <= x && len_y <= y){
                count++
            }
        }
        max = Math.max(count, max)
    }
    return max
}
  


// const nums = [[1, 1], [1, 1], [1, 1], [1, 3], [1, 4]]
// console.log(myFun(nums, 1, 2))

const myFun2 = (str) => {
    const nums = Array.from(str)
    let i = 0, j = str.length - 1, count = 0
    while(i < j){
      if(str[i] !== str[j]){
        count++
        }
        i++
        j--
    }
    i = 0, j = str.length - 1
    if (count <= 2) {
        while(i < j){
       if(nums[i] !== nums[j]){
        nums[j] = nums[i]
        }
        i++
        j--
      }
    }
    return nums.join('')
}
  
const str = 'abcde'
console.log(myFun2(str))