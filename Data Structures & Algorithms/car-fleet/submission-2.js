class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    sortingAndCalculations(posArr, speedArr, target) {
        const combined = posArr.map((pos, ind) => {
            const result = {
                position: pos,
                speed: speedArr[ind],
            };

            result.timeToTarget = (target - pos) / speedArr[ind];

            return result;
        });

        combined.sort((a, b) => a.position - b.position);

        return combined;
    }

    carFleet(target, position, speed) {
        const sortedArr = this.sortingAndCalculations(position, speed, target);

        let carFleet = 0;
        let lastFleetSpeed = 0;

        for (let i = position.length - 1; i >= 0; i--) {
            const currVal = sortedArr[i].timeToTarget;
            if (lastFleetSpeed < currVal) {
                lastFleetSpeed = currVal;
                carFleet++;
            }
        }

        return carFleet;
    }
}
