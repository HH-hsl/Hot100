// 给定一个经过编码的字符串，返回它解码后的字符串。
// 编码规则为: k[encoded_string]，
// 表示其中方括号内部的 encoded_string 正好重复 k 次。
// 注意 k 保证为正整数。

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    if (s.length === 0) return s;
    if (s.length === 0) return s;

    let numStack = []  //存放倍数栈
    let strStack = []  //存放 待拼接str 栈
    let num = 0   //当前读取的倍数
    let result = ''    //字符串

    for (const item of s) {
        if (!isNaN(item)) {  //遇到数字
            num = num * 10 + Number(item)  //算出倍数
        } else if (item === '[') {
            // 左括号：result和倍数压栈后清空
            strStack.push(result)
            result = ''
            numStack.push(num)
            num = 0
        } else if (item === ']') {
            // 右括号：两个栈的栈顶出栈
            let repeatTimes = numStack.pop()  //获取拷贝次数
            // 构建子串
            result = strStack.pop() + result.repeat(repeatTimes)
        } else {
            // 字母：追加到result中
            result += item
        }
    }
    return result
};