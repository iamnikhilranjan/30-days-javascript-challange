//1. Linked list
//Implement a Node class to represent an element in a linked list with properties value and next
//Implement a linked List class with methods to add a node to the end, remove a node from the end, and dispaly all nodes

class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor(){
        this.head = null;
    }

    addNode(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode(){ //from end of the list
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        if(this.head.next == null){
            this.head = null;
        }else{
            let current = this.head;
            while (current.next.next !== null){
                current = current.next;
            }
            current.next = null;
        }
    }

    print(){
        if(this.head === null){
            console.log("list is empty");
            return;
        }
        let current = this.head;
        while( current !== null){
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new linkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(66);

console.log("List after adding nodes:");
list.print();

list.removeNode();
list.print();
