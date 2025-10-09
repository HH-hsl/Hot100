// 最长连续序列
// set
// s.add(value)     → Set 自身   // 写
// s.has(value)     → boolean    // 查
// s.delete(value)  → boolean    // 删
// s.clear()        → undefined  // 清空
// s.size           → number     // 数量（属性）
var longestConsecutive = function (nums) {
    // nums转换为 集合 -去重
    const st = new Set(nums)
    // 序列长度
    let ans = 0;
    // 遍历哈希集合
    for (const x of st) {
        // 从x开始 如果不是序列的起点 - 跳过
        if (st.has(x - 1)) {
            continue;
        }
        // x 是 序列的起点
        let y = x + 1;
        // 查找下一个数是都在序列中
        while (st.has(y)) {
            y++;
        }
        // 段的长度 y-x
        // 循环结束后，y-1是最后一个在哈希集合中的数
        ans = Math.max(ans, y - x)
    }
    return ans;
};

// 时间复杂度O（n）