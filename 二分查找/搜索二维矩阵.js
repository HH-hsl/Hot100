// 给你一个满足下述两条属性的 m x n 整数矩阵：
// 每行中的整数从左到右按非严格递增顺序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 闭区间
var searchMatrix = function (matrix, target) {
    // r 矩阵行数， c 矩阵列数
    const r = matrix.length, c = matrix[0].length
    let left = 0, right = (r * c) - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        // 一维数组的mid元素在二维矩阵中的位置 martri[行][列]
        const x = matrix[Math.floor(mid / c)][mid % c]
        // 二分查找的判断，先看相等的情况再看大于和小于。
        if (x === target) return true;
        if (x > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // 记得return 出去
    return false;
};
