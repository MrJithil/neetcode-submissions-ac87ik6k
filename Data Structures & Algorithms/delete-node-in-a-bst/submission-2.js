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
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        const findMin = (root) => {
            let curr = root;
            while (curr && curr.left) {
                curr = curr.left;
            }
            return curr;
        };

        if (!root) return null;
        // find the node
        if (root.val < key) {
            root.right = this.deleteNode(root.right, key);
        } else if (root.val > key) {
            root.left = this.deleteNode(root.left, key);
        } else {
            // we got the node to be deleted.
            // now, check the node has no or 1 children. If 0 children, remove it.
            // if a single children, return the child to its parent.
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                // both left and right are not empty
                // now, find the min of right subtree
                const minRight = findMin(root.right);
                root.val = minRight.val;
                // recursively remove the minNode to avoid duplicates.
                root.right = this.deleteNode(root.right, minRight.val);
            }
        }

        return root;
    }
}
