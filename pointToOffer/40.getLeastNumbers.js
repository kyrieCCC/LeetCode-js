// 剑指 Offer 40. 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};
// 数组内置方法
// 直接进行排序并取出其中的前k个值即可

const getLeastNumbers_ans = (arr, k) => {
    return quicklySort(arr).slice(0, k)
}
// 使用快速排序替代sort方法

const quicklySort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const midIndex = Math.floor(arr.length / 2);
    const midItem = arr.splice(midIndex, 1)[0];
    const left = [], right = [];
    for (let i = 0; i < arr.length; i++){
        const item = arr[i]
        item < midItem ? left.push(item) : right.push(item)
    }
    return quicklySort(left).concat(midItem, quicklySort(right))
}

const arr1 = [3, 2, 1],
  k1 = 2;
const arr2 = [0, 1, 2, 1],
  k2 = 1;
  
console.log(getLeastNumbers(arr1, k1));
console.log(getLeastNumbers(arr2, k2));
console.log('-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=');
console.log(getLeastNumbers_ans(arr1, k1));
console.log(getLeastNumbers_ans(arr2, k2));