// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    };

    insert(val) {
        let newNode = new Node(val);
        if (!this.head) this.head = newNode;
        else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this;
    };

    pop() {
        if (!this.head) return "EMPTY";
        if (!this.head.next) this.head = null;
        else {
            let prev = this.head, tail = this.head.next;
            while (tail.next) {
                prev = tail;
                tail = tail.next;
            }
            prev.next = null;
        }
    }
};
let newList = new LinkedList();
newList.insert(2).insert(6).insert(2).insert(2);
//onsole.log("LINKED LIST:", newList)

const isPalindrome = (head) => {
    console.log(head, "head")

    // let stack = [];
    // let count = -1;
    // let current = head;
    // console.log(current.next)
    // while (current.next) {
    //     stack.push(current.val)
    //     current = current.next;
    //     // if(current === stack[count]) {
    //     //     stack.pop(); count--;
    //     // } else {
    //     //     stack.push(current); count++;
    //     // }
    // }
    // console.log(stack)
    // return stack.length === 0 ? true : false;
}


// console.log(newList)
console.log(isPalindrome(newList));