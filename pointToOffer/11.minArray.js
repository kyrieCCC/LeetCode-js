// 剑指 Offer 11. 旋转数组的最小数字
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组
// 并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组[3, 4, 5, 1, 2] 为[1, 2, 3, 4, 5] 的一次旋转，该数组的最小值为 1。
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
// 输入：numbers = [3,4,5,1,2]
// 输出：1
// 输入：numbers = [2,2,2,0,1]
// 输出：0

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    return numbers.sort((a, b) => a - b)[0]
};
// 使用数组的api方法进行计算
// 首先将数组进行排序，随后取出排序后的最小值即可

const minArray_plus = (numbers) => {
    for (let i = 0; i < numbers - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return numbers[i + 1]
        }
    }
    return numbers[0]
}
// 遍历数组，当遇到前一位大于后一位的时候
// 说明此处位旋转后的节点
// 返回该节点即可

const numbers1 = [3, 4, 5, 1, 2];
const numbers2 = [2, 2, 2, 0, 1];
console.log(minArray(numbers1));
console.log(minArray(numbers2));
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=');
console.log(minArray_plus(numbers1));
console.log(minArray_plus(numbers2));