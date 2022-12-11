// 79. 单词搜索
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
// 如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
// 同一个单元格内的字母不允许被重复使用。
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
var exist = function (board, word) {
  const dirs = [[0, -1],[1, 0],[0, 1],[-1, 0]];
  function dfs(i, j, k) {
    if (k >= word.length) {
      return true;
    }
    if (i >= board.length || j >= board[0].length || i < 0 || j < 0) {
      return false;
    }
    if (board[i][j] !== word[k]) {
      return false;
    }
    board[i][j] = "$";
    for (let [x, y] of dirs) {
      if (dfs(i + x, j + y, k + 1)) {
        return true;
      }
    }
    board[i][j] = word[k];
    return false;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
//这个方法暂时没搞懂。。。


const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
console.log(exist(board, word))