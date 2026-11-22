class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const count = [0, 0];
        for (const s of students) count[s]++;

        for (let i = 0; i < sandwiches.length; i++) {
            if (count[sandwiches[i]] === 0) return sandwiches.length - i;
            count[sandwiches[i]]--;
        }

        return 0;
    }
}
