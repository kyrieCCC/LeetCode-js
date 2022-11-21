// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
var moveZeroes = function (nums) {
    nums.sort((a, b) => { //利用sort函数的特性进行排序
        if(a == 0){         
            return 1        //当sort函数的返回值为1的时候，表示a在b的后面
        }
        else if(b == 0){
            return -1       //当sort函数的返回值为-1的时候，表示a在b的前面
        }
    })
    return nums
};
const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
