//题意：
// 如果两个字符串从小到大排序后相等，那么两个字符串就互为字母异位词，否则不是。
// 例如 aab,aba,baa 排序后都是 aab，所以 aab,aba,baa 互为字母异位词。

var groupAnagrams = function (strs) {
    // 新建哈希map
    const m = new Map()
    // 遍历数组
    for (const x of strs) {
        // 将x 进行拆分-排序-合并
        const sortedX = x.split('').sort().join('')
        // 如果哈希表中不存在 排序后的元素，则增加 （排序后的x，[]），x作为 key
        if (!m.has(sortedX)) {
            m.set(sortedX, [])
        }
        // 哈希表中存在 sortedX 的话，获取到 以sortedX为Key的数组，添加x
        m.get(sortedX).push(x);
    }
    // 哈希表的value 保存分组后的结果
    // m.values() -》 返回一个迭代器对象，保存 value值的序列
    return Array.from(m.values())
};

// str =["eat","tea","tan","ate","nat","bat"]
// 空间复杂度 O(nm)
// 时间复杂度 O(nmlogm)

var groupAnagrams = function (strs) {
    const m = new Map()
    for (const x of strs) {
        const sortedX = x.split('').sort().join('')
        // 优化 - 使用三目运算符
        m.has(sortedX) ? m.get(sortedX).push(x) : m.set(sortedX, [x])
    }
    return Array.from(m.values())
};