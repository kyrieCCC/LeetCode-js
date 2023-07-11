// 剑指 Offer 58 - II. 左旋转字符串
// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
// 请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let i = 0;
    const arr = [...s];
    while (i < n) {
        const item = arr.shift();
        arr.push(item);
        i++
    }
    return arr.join("")
};
// 通过shift将每次数组的头元素取出
// push到原数组当中 完成reverse操作

const reverseLeftWords_ans = () => {
    return s.slice(n) + s.slice(0, n);
};

const s1 = "abcdefg", k1 = 2;
const s2 = "lrloseumgh", k2 = 6;
console.log(reverseLeftWords(s1, k1));
console.log(reverseLeftWords(s2, k2));
console.log(reverseLeftWords_ans(s1, k1));
console.log(reverseLeftWords_ans(s2, k2));