/**
 * Definition for a binary tree root.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    constructor() {
        this.res = [];
    }
    getLonelyNodes(root) {
        if (!root) return this.res;

        if (!root.left && root.right) {
            this.res.push(root.right.val);
        }

        if (root.left && !root.right) {
            this.res.push(root.left.val);
        }

        if (root.left) {
            this.getLonelyNodes(root.left);
        }

        if (root.right) {
            this.getLonelyNodes(root.right);
        }

        return this.res;
    }
}
