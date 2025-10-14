// 题目：给你一个整数数组 nums 。
// 请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
//  let ans = -Infinity; 把ans设为最小可能的数，便于后续能够更新数据

var maxSubArray = function (nums) {
    let ans = -Infinity;  //存放最大子序列和 = 前缀和- 最小前缀和
    let minPreSum = 0;    //最小前缀和
    let preSum = 0;       //前缀和

    for (const num of nums) {
        preSum += num;
        ans = Math.max(ans, preSum - minPreSum);
        minPreSum = Math.min(minPreSum, preSum)
    }
    return ans;
};

// 负数会拉低和的大小，和最小时候 负数多