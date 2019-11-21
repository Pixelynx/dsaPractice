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

    reverseNode(node, prev) {
        let newNode = new Node(node.value, prev);
        if (node.next) {
            return this.reverseNode(node.next, newNode)
        } else return newNode;
    }

    reverseList() {
        // keep track of the current node
        // keep track of when end of list is reached
        // assign this.head to last node

        // if(this.head === null) return null;
        // if(this.head.next === null) return;
        return this.reverseNode(this.head, null);

    }

    printList() {
        let current = this.head;
        let str = "";
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
list.reverseList()
list.printList()