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
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

    };

    pop() {
        if(!this.head) return "EMPTY";
        if(!this.head.next) this.head = null;
        else {
            let prev = this.head, tail = this.head.next;
            while(tail.next) {
                prev = tail;
                tail = tail.next;
            }
            prev.next = null;
        }
    }
};

const isPalindrome = (head) => {
    let stack = [];
    let current = head;
    while(current.next) {
        if(current === stack[stack.length-1]) {
            stack.pop();
            current = current.next;
        } else stack.push(current.val);
    }
    return !stack.length ? true : false;   
}

let newList = new LinkedList();
newList.insert(2);
newList.insert(6);
newList.insert(2);
newList.insert(2);


console.log(isPalindrome(newList));