// 题目：以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // 1.左端点排序
    intervals.sort((p, q) => p[0] - q[0])
    // 2.存放合并后的数组
    const ans = []
    for (const x of intervals) {
        // 3.数组长度，用于判断能不能合并的条件之一
        const m = ans.length
        // 4.可以合并 当前的左端点小于等于 ans的m-1元素的右端点
        if (m && x[0] <= ans[m - 1][1]) {
            // 5.更新合并区间的右端点
            ans[m - 1][1] = Math.max(ans[m - 1][1], x[1])
        } else {
            // 6.不能合并
            ans.push(x)
        }
    }
    return ans
};
