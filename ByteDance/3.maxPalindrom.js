// 题目
// 给定一个字符串，找出该字符串中最长回文子串的长度。
// 示例 1
// 输入："abc"，输出：0
// 示例 2
// 输入："abcbe"，输出：3
// 示例 3
// 输入："acdcecdcf"，输出：7
// 限定语言：C、 C++、Java、Python、JavaScript V8
const myMaxPalindrom = (str) => {
  let maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    let left = i - 1,
      right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    maxLen = Math.max(maxLen, right - left - 1);
    (left = i), (right = i + 1);
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    maxLen = Math.max(maxLen, right - left - 1);
  }
  if (maxLen === 1) {
    return 0;
  }
  return maxLen;
};
const str = "abc";
console.log(myMaxPalindrom(str));
