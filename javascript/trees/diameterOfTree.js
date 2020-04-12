class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class Tree {
    constructor() {
        this.root = null;
    }

    insertNode = (node, newNode) => {
        if(newNode.data < node.data) {
            !node.left ? node.left = newNode : this.insertNode(node.left, newNode);
        } else {
            !node.right ? node.right = newNode : this.insertNode(node.right, newNode);
        }
        return this;
    };

    insert = (data) => {
        let node = new Node(data);
        if(!this.root) this.root = node;
        else this.insertNode(this.root, node);
        return this;
    };
};

let newTree = new Tree();
newTree.insert(1).insert(2).insert(3).insert(4).insert(5);
console.log(newTree)

let diameterOfBinaryTree = function(root, max = 0) {
    let maxDepth = (root) => {
        if(!root) return 0;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }

    if(!root) return 0;
    else {
        let dist = maxDepth(root.left) + maxDepth(root.right);
        if(dist > max) max = dist;
        return Math.max(diameterOfBinaryTree(root.left, max), diameterOfBinaryTree(root.right, max));
    }   

};


console.log(diameterOfBinaryTree(newTree));