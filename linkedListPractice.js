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

    printList() {
        let current = this.head;
        console.log(current)
        let str = "";
        while (current) {

            str += current.value + " " + "=>" + " ";
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
list.printList()