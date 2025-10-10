// 题目：
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 1.栈
// 时间复杂度：O(n)，其中 n 是 nums 的长度。
// 空间复杂度：O(1)。
var moveZeroes = function (nums) {
    // 栈的大小
    let stackSize = 0
    for (const x of nums) {
        // 如果 x 不等于 0，从size=0开始把x传入栈中，然后 size++
        if (x != 0) {
            nums[stackSize++] = x
        }
    }
    // 遍历完成后，从size为下标开始到n-1的数组元素 填充为0
    nums.fill(0, stackSize)

};

// 2.双指针＋交换元素
// 时间复杂度：O(n)，其中 n 是 nums 的长度。
// 空间复杂度：O(1)
var moveZeroes = function (nums) {
    // 标记 空位即0 的开始
    let i0 = 0
    for (let i = 0; i < nums.length; i++) {
        // 如果nums[i] 不等于0，和空位第一个交换位置，i0+1
        if (nums[i] !== 0) {
            [nums[i], nums[i0]] = [nums[i0], nums[i]];
            i0++;
        }
    }
}
