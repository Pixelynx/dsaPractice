class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class Tree {
    constructor() {
        this.head = null;
    }

    addNode = (val) => {
        let node = new Node(val);
        if(!this.head) this.head = node;
        else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
        current.next = node;
        }
        return this;

    };
};

let newTree = new Tree();
newTree.addNode(3).addNode(5).addNode(19).addNode(6);

let diameterOfBinaryTree = function(root) {
    
};