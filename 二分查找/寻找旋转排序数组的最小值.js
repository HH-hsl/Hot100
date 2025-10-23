// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。
// 例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 输入：nums = [3,4,5,1,2]
// 输出：1
// 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 闭区间[0,n-2],开区间(-1,n-1)
var findMin = function (nums) {
    let left = 0, right = nums.length - 2
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // mid > n-1  的值 ，说明分为两端，最小值在mid的右边
        // mid < n-1  的值，说明最小值在mid的左边包含mid
        if (nums[mid] < nums[nums.length - 1]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return nums[right + 1]
};