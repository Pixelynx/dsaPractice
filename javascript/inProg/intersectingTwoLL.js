class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        let newNode = new ListNode(val);
        let current;
        if (!this.head) this.head = newNode;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

let listA = new LinkedList();
listA.insert(4);
listA.insert(1);
listA.insert(8);
listA.insert(4);
listA.insert(5);
let listB = new LinkedList();
listB.insert(5);
listB.insert(0);
listB.insert(1);
listB.insert(8);
listB.insert(4);
listB.insert(5);
// console.log(listA.head)

const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;
    console.log('HEADS: ', headA, headB)
    let pointerA = headA;
    let pointerB = headB;
    // console.log(pointerA.val)
    while (pointerA !== pointerB && (pointerA != null && pointerB != null)) {
        // console.log('NEXTS: ', pointerA.next == null ? headB : pointerA.next, pointerB.next == null ? headA : pointerB.next)
        pointerA = (pointerA == null ? headB : pointerA.next);
        console.log('POINTER: ', pointerA)
        pointerB = (pointerB == null ? headA : pointerB.next);
    }
    return pointerA;
}


// let listA = [4,1,8,4,5];
// let listB = [5,0,1,8,4,5];

// let listA = [0,9,1,2,4] 
// let listB = [3,2,4]

console.log(getIntersectionNode(listA.head, listB.head));


// POINTERS:  ListNode {
//     val: 4,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } }
//            ListNode {
//     val: 5,
//     next:
//      ListNode { val: 0, next: ListNode { val: 1, next: [ListNode] } } }



//   WHILE LOOP:  POINTERA:  ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } } 
//                POINTERB:  ListNode {
//     val: 0,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } }



//   WHILE LOOP:  POINTERA:  ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } } 
//                POINTERB:  ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } }



//   WHILE LOOP:  POINTERA:  ListNode { val: 4, next: ListNode { val: 5, next: null } } 
//                POINTERB:  ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }



//   WHILE LOOP:  POINTERA:  ListNode { val: 5, next: null } 
//                POINTERB:  ListNode { val: 4, next: ListNode { val: 5, next: null } }



//   WHILE LOOP:  POINTERA:  null 
//                POINTERB:  ListNode { val: 5, next: null }



//   WHILE LOOP:  POINTERA:  ListNode {
//     val: 5,
//     next:
//      ListNode { val: 0, next: ListNode { val: 1, next: [ListNode] } } } 
//                POINTERB:  null



//   WHILE LOOP:  POINTERA:  ListNode {
//     val: 0,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } } 
//                POINTERB:  ListNode {
//     val: 4,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } }



//   WHILE LOOP:  POINTERA:  ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } } 
//                POINTERB:  ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } }



//   WHILE LOOP:  POINTERA:  ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } } 
//                POINTERB:  ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }