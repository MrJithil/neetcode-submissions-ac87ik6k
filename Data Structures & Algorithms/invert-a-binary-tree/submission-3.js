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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root || root.length){
            return root;
        }
        let queue = [root];

        while(queue.length){
            const node = queue.pop();
            [node.right, node.left] = [node.left, node.right];
            
            if(node.left){
               queue.push(node.left); 
            }

            if(node.right){
               queue.push(node.right); 
            }
        }

        return root;
    }
}
