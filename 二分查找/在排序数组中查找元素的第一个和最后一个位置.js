// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。
// 你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // return [nums.indexOf(target),nums.lastIndexOf(target)]
    const start = lowerBound(nums, target)
    if (start === nums.length || nums[start] !== target) return [-1, -1];
    // 有start就会有end
    const end = lowerBound(nums, target + 1) - 1
    return [start, end]
};

var lowerBound = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] >= target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left;
}