class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let currStudent = 0, currSandwitch = 0, loopCount = 0;

        while(currStudent < students.length && loopCount <= sandwiches.length){
            loopCount++;
            const first = students.shift();
            const taken = sandwiches[currSandwitch] === first;
            if(!taken){
                students.push(first);
                continue;
            }
            sandwiches.shift();
            loopCount = 0;
        }

        return sandwiches.length;
    }
}
