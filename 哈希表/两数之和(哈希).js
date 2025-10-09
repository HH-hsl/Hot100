/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
// 两数之和 - 暴力解法
var twoSum = function (nums, target) {
    // 第一层遍历 - i从0开始
    for (let i = 0; ; i++) {
        // 第二层 遍历 - j 从 i+1 = 1 开始
        for (let j = i + 1; j < nums.length; j++) {
            // 如果num[i] +nums[j] 之和等于 target 的话 将i 和j下标以数组形式返回 
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// 哈希表法 - map（key，value） key -元素 value -下标
// set(key,value) - 增加 或修改，链式调用
// get(key,value) - 查找元素，不存在返回 undefine
// has(key) - 布尔，判断元素是否存在
// delete(key) - 删除单挑记录，成功返回true
// clear() - 一键清空
// Map.size - 当前键值的个数
var twoSum = function (nums, target) {
    // 牺牲空间，节约时间
    const idx = new Map()
    // 从j=0 开始遍历
    for (let j = 0; ; j++) {
        // 把num[j] 存储在常量x中
        const x = nums[j]
        // 逆序查找如果哈希表里面存在 目标值-x 的值的话
        if (idx.has(target - x)) {
            // 把哈希表李这个值 获取value，和j一起 以数组形式返回
            return [idx.get(target - x), j]
        }
        // 哈希表中不存在的话，把j和j的值添加到哈希表里面
        idx.set(x, j)
    }
}
