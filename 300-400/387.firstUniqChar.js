// 387. 字符串中的第一个唯一字符
// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
// 输入: s = "leetcode"
// 输出: 0
// 输入: s = "loveleetcode"
// 输出: 2
// 输入: s = "aabb"
// 输出: -1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
// 遇到计数问题直接掏出祖传已久的map
// 首先针对字符串中的元素就行遍历，使用map进行计数
// 再进行循环找到第一次出现的val为1的元素并返回其索引

const s1 = "leetcode";
const s2 = "loveleetcode";
const s3 = "aabb";
console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));
console.log(firstUniqChar(s3));
