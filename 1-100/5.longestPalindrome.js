// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let l = i - 1, r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    if (res.length < r - l - 1) {
      res = s.substring(l + 1, r);
    }

    l = i, r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    if (res.length < r - l - 1) {
      res = s.substring(l + 1, r);
    }
  }
  return res;
};
//substring
var longestPalindromepass = function(s) {
    let ans = ''
    for(i = 0; i < s.length; i++){
        let l = i - 1, r = i + 1
        while(l >= 0 && r < s.length && s[l] == s[r]) r++, l--
             if(ans.length < r-l-1) ans = s.substr(l + 1, r-l-1)

        l = i, r = i + 1
        while(l >= 0 && r < s.length && s[l] == s[r]) r++, l--
             if(ans.length < r-l-1) ans = s.substr(l + 1, r-l-1)
    }
    return ans
};
//substr 这个方法不常用
//滑动窗口判断

const s = "babcc";
console.log("结果是", longestPalindromepassBYME(s));
