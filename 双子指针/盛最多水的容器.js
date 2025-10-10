// 题目：
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。

// S(i,j)=min(h[i],h[j]) * (j - i)
var maxArea = function (height) {
    // 最大容积，左边界，右边界
    let res = 0, left = 0, right = height.length - 1;
    // while循环确保 左边界小于右边界时
    while (left < right) {
        // 计算目前的容积
        let s = (right - left) * Math.min(height[left], height[right])
        // 将最大面积赋值给res。
        res = Math.max(res, s)
        // 左右边界，谁小谁往中间移动
        if (height[left] < height[right]) {
            left++
        } else {
            right--;
        }
    }
    return res;

};