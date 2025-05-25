class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    insert(index, value) {
        if ( index >= this.length ) {
            this.append(value);
        }
        const node = new Node(value);
        //get reference of leader node
        const leaderNode = this.traverseToIndex(index - 1);
        //save reference of next node
        const holdingPointer = leaderNode.next;
        //update leader node
        leaderNode.next = node;
        //update next node with saved reference
        node.next = holdingPointer;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
        }
        //get reference to the node before the one we want to remove
        const leaderNode = this.traverseToIndex(index - 1);
        //get reference to the node we want to remove
        const unwantedNode = leaderNode.next;
        //update leader node's next pointer to skip the unwanted node
        leaderNode.next = unwantedNode.next;
        this.length--;
        return this
        
    }


    traverseToIndex(index) {

        let counter =0 ;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    printList() {
        let currentNode = this.head;
        const arr = [];
        while (currentNode) {
            console.log(currentNode.value);
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const list = new LinkedList(1).append(10).prepend(20);