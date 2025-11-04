/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 1. 先翻转左右子树，再交换儿子
var invertTree = function (root) {
    if (root == null) return null;
    const left = invertTree(root.left)
    const right = invertTree(root.right)
    root.left = right
    root.right = left
    return root;
};

// 2.先交换儿子，再翻转左右子树
var invertTree = function (root) {
    if (root == null) return null;
    [root.left, root.right] = [root.right, root.left]
    invertTree(root.left);
    invertTree(root.right);
    return root;
};