class Stack{
    constructor() {
        this.items = [];
    }

    push(v) {
        this.items.push(v);
    }

    pop() {
        this.items.pop();
    }

    inc(i, v) {
        let items = this.items;
        let count = 0;
        while(count < i) {
            i + items[count]
            count++
        }
    }

    print() {
        return !this.items.length ? "EMPTY" : `${this.items[this.items.length-1]}`;
    }
}

function superStack(operations) {
    let stack = new Stack();
        for(let i = 0; i < operations.length; i++) {
            // /(\s+)/ 
            
            
            
        // console.log(stack)
    }

}

let stack = new Stack();

console.log(superStack([ 'push 4', 'pop','push 3','push 5','push 2','inc 3 1','pop','push 1','inc 2 2','push 4','pop','pop' ]))

// console.log(superStack(print(), push(2), pop(), inc(1, 2)))