// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 第i行有i+1个元素，每行的第0个和第i个元素的值都是 1
// 每行 从第1个到第i-1个元素的值为 她的左上方和右上方的和
// 第i行的第j个元素的值 = 第i-1行第j-1个元素 + 第i-1行第j个元素
var generate = function (numRows) {
    const dp = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        dp[i] = Array(i + 1)
        dp[i][0] = dp[i][i] = 1
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
    }
    return dp;
};