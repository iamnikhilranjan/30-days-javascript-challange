//3. Stack
//Implement a stack class with methods push(add element), pop(remove element), and peek( view the top element).

class Stack{
    constructor(){
        this.items = [];
    }

    //add an element to the stack
    push(element){
        this.items.push(element);
    }

    //Remove and return the top element from the stack
    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

stack.clear();
console.log(stack.isEmpty());

//Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.


function reverseString(str){
    const stack = new Stack();

    for(let char of str){
        stack.push(char);
    }

    let reversedStr = '';
    while (!stack.isEmpty()){
        reversedStr += stack.pop();
    }

    return reversedStr;
}

const originalString = "HELLO";
console.log(reverseString(originalString));
