// https://leetcode.com/problems/min-stack/

let MinStack = function() {
    this.stack = [];
    this.min = [];
};

MinStack.prototype.peek = function (x) {
  return x ==='s' ? this.stack[this.stack.length - 1] : this.min[this.min.length - 1];
}

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if(this.min.length === 0 || this.peek() >= x){
    this.min.push(x);
  }
};

MinStack.prototype.pop = function() {
  const popped= this.stack.pop();
  if(popped === this.peek()){
    this.min.pop();
  }
};

MinStack.prototype.top = function() {
  return this.peek('s')
};

MinStack.prototype.getMin = function() {
  return this.peek();
};
