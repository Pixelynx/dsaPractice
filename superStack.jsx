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

    // operations.forEach(op => {
        //     op.split(/(\s+)/)
        // })
        
        
        for(let i = 0; i < operations.length; i++) {
            let set = new Set(operations[i].split(/(\s+)/))
            set.delete(set.has(' '))
            console.log(set)
        // operations[i].split(/(\s+)/)
        // switch(set) {
        //     case set.has('push'):
        //         console.log('NEXT', first)
        //         let values = set.values()
        //         let first = values.next()
        //         let value = operations[i].pop()
        //         // console.log(value)
        //         stack.push(value)
                
        //         // console.log(stack.print());
        //         case "pop":
        //             stack.pop()
        //             // console.log(stack.print());
        // }
        // return this;
    }
}

let stack = new Stack();
// stack.push(2)
// stack.push(3)
// stack.push(5)
// stack.pop()
// stack.push(7)
// stack.print()

console.log(superStack([ 'push 4', 'pop','push 3','push 5','push 2','inc 3 1','pop','push 1','inc 2 2','push 4','pop','pop' ]))

// console.log(superStack(print(), push(2), pop(), inc(1, 2)))