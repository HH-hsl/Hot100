// 题目
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
// 请你返回所有和为 0 且不重复的三元组。

// 好难 硬背吧 
var threeSum = function (nums) {
    // 升序a-b，降序b-a
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const ans = [];
    for (let i = 0; i < n - 2; i++) {
        const x = nums[i]

        if (i > 0 && x === nums[i - 1]) continue;
        if (x + nums[i + 1] + nums[i + 2] > 0) break;
        if (x + nums[n - 2] + nums[n - 1] < 0) continue;

        let j = i + 1, k = n - 1;
        while (j < k) {
            const s = x + nums[j] + nums[k];
            if (s > 0) {
                k--;
            } else if (s < 0) {
                j++;
            } else {
                ans.push([x, nums[j], nums[k]])
                for (j++; j < k && nums[j] === nums[j + 1]; j++);
                for (k--; k > j && nums[k] === nums[k + 1]; k--);
            }
        }

    }
    return ans;
};