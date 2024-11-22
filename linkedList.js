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
        return this.size;
    }

    //return head of list function
    heads() {
        return this.head.value;
    }

    //return end of list function
    tails() {
        return this.tail.value;
    }

    //return node at given index function
    at(index) {
        //if statement incase index isnt real
        if (index < 0 || index >= this.size) {
            console.log("Index does not exist.")
            return null;
        } 

        //initalziing the current node and index
        let currentNode = this.head;
        let currentIndex = 0;

        //while loop to find the idex
        while (currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        //returning the current node value
        return currentNode.value;
    }

    //remove last element from the list
    pop() {
        // If the list is empty, nothing to remove
        if (!this.head) {
            console.log("List is empty");
            return null;
        }

        // If the list has only one node
        if (this.head === this.tail) {
            const removedValue = this.head.value;
            this.head = null;
            this.tail = null;
            this.size--;
            return `Removed: ${removedValue}`;
        }

        // Traverse to find the second-to-last node
        let current = this.head;
        while (current.nextNode !== this.tail) {
            current = current.nextNode;
        }

        // Store the value to return
        const removedValue = this.tail.value; 

        // Update the tail to the second-to-last node
        this.tail = current;       

        // Setting next node back to null
        this.tail.nextNode = null;

        // Decrease the size
        this.size--;               

        //return the removed value
        return `Removed: ${removedValue}`;       
    }

    //function checking if value is in the list
    contains(value) {
        //inizaliing current node
        let current = this.head;

        //looping through list
        while (current) {
            // Check if the current node's value matches
            if (current.value === value) {  
                return true;     
            }

            //moving to next node
            current = current.nextNode;
        }

        //return false if not found
        return false;
    }

    //function to return trhe index of the node containing value and return null if not found
    find(value) {
        //initliazing head and index
        let current = this.head;  
        let currentIndex = 0;     

        //while loop to search through list
        while (current) {         
            //if value matches return index
            if (current.value === value) {  
                return currentIndex;        
            }
            //moving to next node and incrementing the index
            current = current.nextNode;     
            currentIndex++;                 
        }

        //returning null if not found
        return null;
    }

    //function to represent linked list objects as strings
    toString() {
        //initliazing head and result
        let current = this.head;  
        let result = "";  

        //if list empty return message
        if (!current) {
            return "List is empty";  
        }

        //looping through the list
        while (current) {

            // Add the current node's value
            result += current.value;  

            // Add a separator if there's a next node
            if (current.nextNode) {   
                result += " -> ";
            }

            // Move to the next node
            current = current.nextNode;
        }

        // Adding null to end
        result += " -> null ";

        //return the result
        return result;
    }

    //insert new node with value at index
    insertAt(value, index) {

    }

    //remove node from prodivded index
    removeAt(index) {

    }
}

//class for node
class node {
    constructor(value, nextNode = null) {
        this.value = value;       
        this.nextNode = nextNode; 
    }
}