// 题目：给你一个整数数组 nums，返回 数组 answer 
// 其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const pre = Array(n);
    pre[0] = 1
    for (let j = 1; j < n; j++) {
        pre[j] = pre[j - 1] * nums[j - 1];
    }
    const after = Array(n);
    after[n - 1] = 1;
    for (let j = n - 2; j >= 0; j--) {
        after[j] = after[j + 1] * nums[j + 1];
    }

    const ans = Array(n);
    for (let j = 0; j < n; j++) {
        ans[j] = pre[j] * after[j];
    }
    return ans;
};

// 优化：不需要额外空间，求出前缀后，求后缀的同时合并   
var productExceptSelf = function (nums) {
    const n = nums.length;
    const pre = Array(n);
    pre[0] = 1
    for (let j = 1; j < n; j++) {
        pre[j] = pre[j - 1] * nums[j - 1];
    }
    const ans = Array(n);
    let after = 1;
    for (let j = n - 1; j >= 0; j--) {
        ans[j] = pre[j] * after;
        after = after * nums[j];
    }
    return ans;
}
