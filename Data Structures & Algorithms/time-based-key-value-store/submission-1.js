class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
         if(!this.keyStore.has(key)){
            return "";
         }

         const times = this.keyStore.get(key);
         let left = 0, right = times.length - 1;
         let result = "";

         while(left <= right){
            const mid = Math.floor((left + right) /2);
            const currTime = times[mid][1];
            if( currTime <= timestamp){
                result = times[mid][0]
                left = mid + 1;
            }
            else if(currTime > timestamp){
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
         }

         return result;
    }
}
