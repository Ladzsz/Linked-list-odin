//class for linked list
export class linkedlist {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.size = 0;  
    }

    //append function
    append(value) {
        //making new node object
        const newnode = new node(value);

        //if list empty set head and tail to new node
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        //adding the new node to the end and updating
        } else {
            this.tail.nextNode = newnode;
            this.tail = newnode;
        }

        //incremenet list size
        this.size++;
    }

    //preappend function
    preAppend(value) {
        //making new node object
        const newnode = new node(value);

        //if list empty set head and tail to new node
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        //adding the new node to the start and updating
        } else {
            newnode.nextNode = this.head;
            this.head = newnode;
        }

        //incremenet list size
        this.size++;
    }

    //size of list function
    sizes() {
        console.log(this.size);
    }

    //return head of list function
    heads() {
        console.log(this.head);
    }

    //return end of list function
    tails() {
        console.log(this.tail);
    }
}

//class for node
export class node {
    constructor(value, nextNode = null) {
        this.value = value;       
        this.nextNode = nextNode; 
    }
}