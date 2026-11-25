/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    getLonelyNodes(root) {
        const res = [];
        if (!root) return res;

        const queue = [root];
        while (queue.length) {
            const node = queue.shift();
            if (!node.left && node.right) {
                res.push(node.right.val);
            }

            if (node.left && !node.right) {
                res.push(node.left.val);
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
        return res;
    }
}
