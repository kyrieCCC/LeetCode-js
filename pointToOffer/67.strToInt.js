// 剑指 Offer 67. 把字符串转换成整数
// 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
// 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；
// 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
// 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
// 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
// 在任何情况下，若函数不能进行有效的转换时，请返回 0。
// 说明：
// 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为[−231, 231 − 1]。如果数值超过这个范围，请返回  INT_MAX(231 − 1) 或 INT_MIN(−231) 。

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    str = str.trim();
    if(str == '') {
        return 0;
    }
    var INT_MIN = -Math.pow(2,31), INT_MAX = Math.pow(2,31) - 1;
    var reg = new RegExp(/^[\+\-]?\d+/) ;
    var result = str.match(reg);
    console.log(result);
    if(result){
        if(result[0][0] == "-" && result[0] < INT_MIN){  
            return INT_MIN;
        }else if(result > INT_MAX){
            return INT_MAX;
        }  
        return result; 
    }else{
        return 0;
    }
};
// 正则表达式解决
// 正则表达的意思是匹配前面出现0或1次的正负号，并且后面跟着数字，遇到非数字就会打断匹配
// 匹配出来的字符串即为我们需要的内容

const s1 = '43';
const s2 = '   -43';
const s3 = '4343 with me';
const s4 = "words and 987";
const s5 = "-91283472332";
console.log(strToInt(s1));
console.log(strToInt(s2));
console.log(strToInt(s3));
console.log(strToInt(s4));
console.log(strToInt(s5));