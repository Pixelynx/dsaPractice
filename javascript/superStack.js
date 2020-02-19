class Stack{
    constructor() {
        this.items = [];
    }

    push(v) {
        this.items.push(v);
        return this;
    }
    
    pop() {
        this.items.pop();
    }
    
    // inc(i, v) {
    //     let items = this.items;
    //     if(i === 1) return this;
    //     items[i] = v + items[i];
    //     return this.inc(i-1, v);
    //     // while(count < i) {
    //     //     items[count] = v + items[count]
    //     //     count++
    //     // }
    // }

    inc(i, v) {
        let items = this.items;
        let count = 0;
        while(count < i) {
            items[count] = v + items[count]
            count++
        }
    }

    print() {
        return !this.items.length ? "EMPTY" : this.items[this.items.length-1];
    }
}

let stack = new Stack();
function superStack(operations) {


    for(let i = 0; i < operations.length; i++) {
        let currentItem = operations[i].split(' ');
        
        switch(currentItem[0]) {
            case "push":
                stack.push(Number(currentItem[1]))
                console.log(stack.print());
                break;
            case "pop":
                stack.pop();
                console.log(stack.print());
                break;
            case "inc":
            stack.inc(Number(currentItem[1]), Number(currentItem[2]))
            console.log(stack.print());
        }  
}
    // for(let i = 0; i < operations.length; i++) {
    //     let currentItem = operations[0].split(' ');
        
    //     switch(currentItem[0]) {
    //         case "push":
    //             stack.push(Number(currentItem[1]))
    //             console.log(stack.print());
    //             break;
    //         case "pop":
    //             stack.pop();
    //             console.log(stack.print());
    //             break;
    //         case "inc":
    //             currentItem[1] = Number(currentItem[1]), currentItem[2] = Number(currentItem[2]);
    //         stack.inc(currentItem[1], currentItem[2])
    //         console.log(stack.print());

    //     }  
    //     // operations = operations.slice(1);

    // }
            // if(currentItem[0] === 'push') {
            //     currentItem[1] = Number(currentItem[1]);
            //     stack.push(currentItem[1])
            //     console.log(stack.print());
            // }
            // if(currentItem[0] === 'pop') {
            //     stack.pop();
            //     console.log(stack.print());
            // }
            // if(currentItem[0] === 'inc') {
            //     currentItem[1] = Number(currentItem[1]), currentItem[2] = Number(currentItem[2]);
            //     stack.inc(currentItem[1], currentItem[2])
            //     console.log(stack.print());
            // }  
}
console.log(superStack([ 'push 4', 'pop', 'push 3', 'push 5', 'push 2', 'inc 3 1', 'pop', 'push 1', 'inc 2 2', 'push 4', 'pop', 'pop' ]))
// 4
// => 4
//
// => EMPTY
// 3
// => 3 
// 3 5
// => 5 
// 3 5 2
// => 2
// 4 6 3
// => 3
// 4 6
// => 6
// 4 6 1
// => 1
// 6 8 1
// => 1
// 6 8 1 4
// => 4
// 6 8 1
// => 1
// 6 8
// => 8

// 4
// EMPTY
// 3
// 5
// 2
// 3
// 6
// 1
// 1
// 4
// 1
// 8