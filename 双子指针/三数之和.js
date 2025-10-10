// 题目
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
// 请你返回所有和为 0 且不重复的三元组。

// 好难 硬背吧 
var threeSum = function (nums) {
    // 升序a-b，降序b-a  方便指针移动时候去重
    nums.sort((a, b) => a - b);
    const n = nums.length;  // 数组长度
    const ans = [];  //接收三个元素的数组
    // 外层遍历 i， 0 -- n-1
    for (let i = 0; i < n - 2; i++) {
        const x = nums[i]
        // 三项过滤-优化
        // 1.相同数字已使用 -跳过
        // 2.当最小的三个数之和大于0，那么之后的三数之和就不会有等于0的情况 - 直接结束遍历
        // 3.当最大的三数之和小于0 - x太小，不会有大于等于0的情况 - 跳过
        if (i > 0 && x === nums[i - 1]) continue;
        if (x + nums[i + 1] + nums[i + 2] > 0) break;
        if (x + nums[n - 2] + nums[n - 1] < 0) continue;
        // 双指针，j k向中间挤
        // while循环 j<k情况下 执行
        // s>0 太大，k向左移动
        // s<0 太小，j向右移动
        // s=0 符合情况：双指针同时去重
        let j = i + 1, k = n - 1;
        while (j < k) {
            const s = x + nums[j] + nums[k];
            if (s > 0) {
                k--;
            } else if (s < 0) {
                j++;
            } else {
                ans.push([x, nums[j], nums[k]])
                // 去重公式：背下来
                for (j++; j < k && nums[j] === nums[j - 1]; j++);
                for (k--; k > j && nums[k] === nums[k + 1]; k--);
            }
        }

    }
    return ans;
};