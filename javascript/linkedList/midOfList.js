class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode = (val) => {
        let newNode = new ListNode(val);

        if(this.head === null) this.head = newNode;
        else {
            let current = this.head;
                while(current.next) {
                current = current.next;
            }
            current.next = newNode;
         }
        
         return this;
        }
};

let middleNode = function(head) {
    
};

let newList = new LinkedList()
newList.addNode(1).addNode(2).addNode(3).addNode(4).addNode(5);
// newList.addNode(1).addNode(2).addNode(3).addNode(4).addNode(5).addNode(6);

console.log(newList)

// let list1 = [1,2,3,4,5];
// console.log("OUTPUT: ", middleNode(list1));
// console.log("EXPECTED OUTPUT: 3");
// // The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// // Note that we returned a ListNode object ans, such that:
// // ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

// let list2 = [1,2,3,4,5,6];
// console.log("OUTPUT: ", middleNode(list2));
// console.log("EXPECTED OUTPUT: 4");
// // Since the list has two middle nodes with values 3 and 4, we return the second one.