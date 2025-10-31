// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
// 输入: nums = [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const n = nums.length;
    // fmax 乘积最大子数组，fmin 乘积最小子数组
    const fMax = new Array(n);
    const fMin = new Array(n);
    fMax[0] = fMin[0] = nums[0];
    // 有三种情况：x 自己为子数组；
    // x <0, x * fmin 得到最大乘积；
    // x > 0，x*fmax  得到最大乘积
    for (let i = 1; i < n; i++) {
        const x = nums[i]
        fMax[i] = Math.max(fMax[i - 1] * x, fMin[i - 1] * x, x);
        fMin[i] = Math.min(fMax[i - 1] * x, fMin[i - 1] * x, x)
    }
    // 利用展开符，获取数组元素筛选最大值
    return Math.max(...fMax)
};