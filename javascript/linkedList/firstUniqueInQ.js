// You have a queue of integers, you need to retrieve the first unique integer in the queue.
// Implement the FirstUnique class:

// - FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// - int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// - void add(int value) insert value to the queue.

class FirstUnique {
    constructor(nums) {
        this.set = new Set();
        this.map = new Map();
        this.buildMap(nums);
    }
    buildMap(nums) {
        nums.forEach(num => this.add(num))
    }
    
    showFirstUnique() {
        return this.set.size ? this.set.values().next().value : -1;
    }
    
    add(num) {
       if(this.map.has(num)) {
            this.map.set(num, this.map.get(num) + 1)
           this.set.delete(num)
        } else {
            this.map.set(num, 1)
            this.set.add(num)
        }
    }
    
}

// let FirstUnique = function(nums) {
    
// };

// FirstUnique.prototype.showFirstUnique = function() {
    
// };

// FirstUnique.prototype.add = function(value) {
    
// };

let input1 = ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
[[[2,3,5]],[],[5],[],[2],[],[3],[]];
let input2 = ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]];
let input3 = ["FirstUnique","showFirstUnique","add","showFirstUnique"]
[[[809]],[],[809],[]];

console.log(FirstUnique("OUTPUT: ", input1));
console.log("EXPECTED OUTPUT: [null,2,null,2,null,3,null,-1]");
console.log(FirstUnique("OUTPUT: ", input2));
console.log("EXPECTED OUTPUT: [null,-1,null,null,null,null,null,17]");
console.log(FirstUnique("OUTPUT: ", input3));
console.log("EXPECTED OUTPUT: [null,809,null,-1]");