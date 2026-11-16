/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head1
     * @param {ListNode} head2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newHead = new ListNode();
        const res = newHead;
        let head1 = list1,
            head2 = list2;

        while (head1 && head2) {
            if (head1.val <= head2.val) {
                newHead.next = head1;
                head1 = head1.next;
            } else {
                newHead.next = head2;
                head2 = head2.next;
            }
            newHead = newHead.next;
        }

        while (head1) {
            newHead.next = head1;
            newHead = newHead.next;
            head1 = head1.next;
        }

        while (head2) {
            newHead.next = head2;
            newHead = newHead.next;
            head2 = head2.next;
        }

        return res.next;
    }
}
