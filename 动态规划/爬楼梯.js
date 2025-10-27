// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 记录到达i层的方式有几种
    const dp = new Array(n + 1).fill(0)
    // 初始条件
    dp[0] = dp[1] = 1
    // 遍历条件从 i=2开始
    for (let i = 2; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};