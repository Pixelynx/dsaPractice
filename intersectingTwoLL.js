function ListNode(val) {
    this.val = val;
    this.next = null;
};

const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;
        var pointerA = headA;
        var pointerB = headB;
        while (pointerA != pointerB) {
            pointerA = pointerA == null ? headB : pointerA.next;
            pointerB = pointerB == null ? headA : pointerB.next;
        }
        return pointerA;
}
let listA = [4,1,8,4,5];
let listB = [5,0,1,8,4,5];

console.log(getIntersectionNode(listA, listB));


// POINTERS:  ListNode {
//     val: 4,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } } ListNode {
//     val: 5,
//     next:
//      ListNode { val: 0, next: ListNode { val: 1, next: [ListNode] } } }


//   WHILE POINTERS !=:  ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } } ListNode {
//     val: 0,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } }


//   WHILE POINTERS !=:  ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } } ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } }


//   WHILE POINTERS !=:  ListNode { val: 4, next: ListNode { val: 5, next: null } } ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }


//   WHILE POINTERS !=:  ListNode { val: 5, next: null } ListNode { val: 4, next: ListNode { val: 5, next: null } }


//   WHILE POINTERS !=:  null ListNode { val: 5, next: null }


//   WHILE POINTERS !=:  ListNode {
//     val: 5,
//     next:
//      ListNode { val: 0, next: ListNode { val: 1, next: [ListNode] } } } null


//   WHILE POINTERS !=:  ListNode {
//     val: 0,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } } ListNode {
//     val: 4,
//     next:
//      ListNode { val: 1, next: ListNode { val: 8, next: [ListNode] } } }


//   WHILE POINTERS !=:  ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } } ListNode {
//     val: 1,
//     next:
//      ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } } }


//   WHILE POINTERS !=:  ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } } ListNode {
//     val: 8,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }