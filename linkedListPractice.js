class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode() {
        if (this.head === null) return null;
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        else {
            let prev = this.head;
            let tail = this.head.next;
            while (tail.next !== null) {
                prev = tail;
                tail = tail.next;
            }
            prev.next = null;
            return;
        }
    }

    // RECURSIVE REVERSE ATTEMPT
    reverseNode(node, prev) {
        let newNode = new Node(node.value, prev);
        if (node.next) {
            return this.reverseNode(node.next, newNode)
        } else return newNode;
    }

    reverseList() {
        if(this.head === null) return;

        let current = this.head;
        let prev = null;
        let temp;

        while(current) {
            temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;

            this.head = prev;
        }
    }

    printList() {
        let current = this.head;
        let str = "";
        if(current === null) str = "Empty List"
        while (current) {
            str += current.value + " => ";
            current = current.next;
        }
        return str;
    }
}

let list = new LinkedList();
list.addNode(5);
list.addNode(56);
list.addNode(23);
list.addNode(3);
// list.removeNode();
list.reverseList(list)
console.log(list.printList())