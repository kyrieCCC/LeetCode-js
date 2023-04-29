// 344. 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 输入：s = ["h","e","l","l","o"]
// 输出：["o", "l", "l", "e", "h"]
// 输入：s = ["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]

var reverseString = function (s) {
    let i = 0, j = s.length - 1
    while (i <= j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }
    return s
};
//直接使用循环的方式
//使用两个指针，一个指向前面一个指向后面
//然后交换两个指针的数值

const s = ["h", "e", "l", "l", "o"]
const s1 = ["H", "a", "n", "n", "a", "h"]

console.log(reverseString(s));
console.log(reverseString(s1));