// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。
// 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在索引 i 处，你可以跳转到任意 (i + j) 处：
// 0 <= j <= nums[i] 且
// i + j < n
// 返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1。

// 输入: nums = [2,3,1,1,4]
// 输出: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
// 这个解法是相当于造桥的游戏
var jump = function (nums) {
    let ans = 0;
    let curRight = 0; //以造桥的右端点
    let nextRight = 0;  //下一座桥的右端点的最大值
    // 遍历到数组的 n-2
    for (let i = 0; i < nums.length - 1; i++) {
        // 记录下一座桥的最远点
        nextRight = Math.max(nextRight, i + nums[i]);
        //如果当前位置已经是尽头无路可走，需要建桥
        //建桥后把下一座桥最远点给 已造桥的最远点；步数++
        if (i === curRight) {
            curRight = nextRight;
            ans++;
        }
    }
    return ans;
};