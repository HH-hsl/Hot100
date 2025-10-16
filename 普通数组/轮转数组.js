// 题目“给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。”

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// nums.unshift();   -- 数组的头部插入，把元素插到数组最前面，原数组元素整体后移，返回新数组长度。
// 优化暴力解法： 三次反转法--翻转法 ：1.整体翻转；2.翻转前k个；3.翻转后n-k个
var rotate = function (nums, k) {
    const m = nums.length;
    k = k % m;  //避免k大于数组长度
    if (k === 0) return;  //k=0,不用反转
    const rotate1 = (i, j) => {
        while (i < j) [nums[i], nums[j]] = [nums[j], nums[i]], i++, j--;
    }
    rotate1(0, m - 1);  //整体反转
    rotate1(0, k - 1);  //反转前k个
    rotate1(k, m - 1)   //反转剩余的 m-k个
    return nums
};