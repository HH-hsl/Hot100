// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// hot100-42题

// 题解
// 短板决定水位，移动短板才能找到更高的水位
// 当前列能接的水 = 侧最高墙 - 自身高度

var trap = function (height) {
    let l = 0, r = height.length - 1, lMax = 0, rMax = 0, ans = 0;
    while (l < r) {
        //更新最高柱子
        lMax = Math.max(lMax, height[l])
        rMax = Math.max(rMax, height[r])
        // 左右板 水小移动水，水量用短板计算
        if (lMax < rMax) {
            ans += lMax - height[l]
            l++;
        } else {
            ans += rMax - height[r]
            r--;
        }
    }
    return ans
};

var trap = function (height) {
    let l_max = 0, r_max = 0, ans = 0;
    for (let i = 0; i < height.length; i++) {
        l_max = Math.max(l_max, height[i]);
        r_max = Math.max(r_max, height[height.length - i - 1]);
        ans += l_max + r_max - height[i];
    }
    return ans - l_max * height.length;
};

