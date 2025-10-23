// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了向左旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 下标 3 上向左旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const n = nums.length
    const end = nums[n - 1]
    let left = 0, right = n - 1;
    // 闭区间
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        const x = nums[mid]
        // 1.x 和 target 在同一段
        // 1.1 x在第一段,target在第二段,target在x的右边
        if (target <= end && x > end) {
            left = mid + 1;
            // 1.2 x在第二段,target在第一段,target在x的左边,x可能是最小值
        } else if (target > end && x <= end) {
            right = mid
        } else { //2.x 和 target都在同一个递增段
            // 2.1 target在x的右边
            if (x < target) {
                left = mid + 1;
                // 2.2 target在x的左边
            } else {
                right = mid
            }
        }
    }
    return nums[left] != target ? -1 : left;

};