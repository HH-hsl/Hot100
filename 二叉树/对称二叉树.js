/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const isSameTree = (left, right) => {
        if (left == null || right == null) {
            return left === right;
        }
        return left.val === right.val && isSameTree(left.left, right.right) && isSameTree(left.right, right.left)
    }
    return isSameTree(root.left, root.right)
};