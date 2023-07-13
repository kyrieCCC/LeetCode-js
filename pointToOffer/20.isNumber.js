// 剑指 Offer 20. 表示数值的字符串
// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

// 数值（按顺序）可以分成以下几个部分：

// 若干空格
// 一个 小数 或者 整数
// （可选）一个 'e' 或 'E' ，后面跟着一个 整数
// 若干空格
// 小数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 下述格式之一：
// 至少一位数字，后面跟着一个点 '.'
// 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
// 一个点 '.' ，后面跟着至少一位数字
// 整数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 至少一位数字
// 部分数值列举如下：
// ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
// 部分非数值列举如下：
// ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) { 
    let i, len, numFlag = false, dotFlag = false, eFlag = false;
    s = s.trim(); // 去掉首尾空格
    len = s.length; // 去掉后再重新计算长度
    for(i = 0; i < len; i++) {
        // 如果是数字，那么直接将 numFlag 变为 true 即可
        if(s[i] >= '0' && s[i] <= '9') {
            numFlag = true;
        } else if(s[i] === '.' && !dotFlag && !eFlag) {
            // 如果是 .  那必须前面还出现过 .  且前面没出现过 e/E，因为如果前面出现过 e/E 再出现. 说明 e/E 后面跟着小数，不符合题意
            dotFlag = true;
        } else if((s[i] === 'e' || s[i] === 'E') && !eFlag && numFlag) {
            // 如果是 e 或 E，那必须前面没出现过 e/E，且前面出现过数字
            eFlag = true;
            numFlag = false; // 这一步很重要，将是否出现过数字的 Flag 置为 false，防止出现 123E 这种情况，即出现 e/E 后，后面没数字了
        } else if((s[i] === '+' || s[i] === '-') && (i === 0 || (s[i - 1] === 'e' || s[i - 1] === 'E'))) {
            // 如果是 +/- 那必须是在第一位，或是在 e/E 的后面
        } else {
            // 上面情况都不满足，直接返回 false 即可，提前剪枝
            return false;
        }
    }
    return numFlag; 
}
// 几乎没涉及到算法的思想
// 只需要根据题目大意设置不同的if判断
// 每次出现新的元素都要判断是否符合题意
// 若不符合直接返回false


const s1 = "0"
const s2 = "e"
const s3 = "."
const s4 = "    .1  "
console.log(isNumber(s1));
console.log(isNumber(s2));
console.log(isNumber(s3));
console.log(isNumber(s4));
