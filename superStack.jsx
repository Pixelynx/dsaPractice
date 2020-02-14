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
        while(count <= i) {
            items[count] = v + items[count]
            count++
        }
        return items;
    }

    print() {
        return !this.items.length ? "EMPTY" : this.items[0];
    }
}

function superStack(operations) {
    let stack = new Stack();

        for(let i = 0; i < operations.length; i++) {
            let currentItem = operations[i].split(' ');
            if(currentItem[0] === 'push') {
                currentItem[1] = Number(currentItem[1]);
                stack.push(currentItem[1])
                console.log(stack.print());
            }
            if(currentItem[0] === 'pop') {
                stack.pop();
                console.log(stack.print());
            }
            if(currentItem[0] === 'inc') {
                currentItem[1] = Number(currentItem[1]), currentItem[2] = Number(currentItem[2]);;
                stack.inc(currentItem[1], currentItem[2])
                console.log(stack.print());
            }  
    }
    return this;

}

console.log(superStack([ 'push 4', 'pop','push 3','push 5','push 2','inc 3 1','pop','push 1','inc 2 2','push 4','pop','pop' ]))
// 4
// => 4
//
// => EMPTY
// 3
// => 3 
// 3 5
// => 3 
// 3 5 2
// => 3
// 4 6 3
// => 4
// 4 6
// => 4
// 4 6 1
// => 4
// 6 8
// => 6
// 6 8 4
// => 6
// 6 8
// => 6
// 6
// => 6

// 4
// EMPTY
// 3
// 3
// 3
// 4
// 4
// 4
// 6
// 6
// 6
// 6