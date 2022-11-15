var sortColors = function(nums) { 
    let red = 0, white = 0, blue = 0
    const res = []
    for(let i = 0; i <= nums.length; i++){
        if(nums[i] === 0){
            red++
        }
        else if(nums[i] === 1){
            white++
        }
        else if(nums[i] === 2){
            blue++
        }
    }
    for(let j = 0; j <= nums.length; j++){
        if(j >= 0 && j < red){
            res[j] = 0
        }
        else if(j >= red && j < red + white){
            res[j] = 1
        } 
        else if(j >= red + white && j < red + white + blue){
            res[j] = 2
        }
    }
    return res
};
 //解题思路：
 //首先发现要进行分类的颜色很少，所以我们使用计数法。将每个出现的数字计数
 //计算好每个数字出现的次数后再把数字放到原数组中，实现排序
const nums = [2, 0, 2, 1, 1, 0]
const result = sortColors(nums)
console.log(result)