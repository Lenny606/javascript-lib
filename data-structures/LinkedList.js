class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        node.prev = this.tail
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
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
        const follower = leaderNode.next;
        //update leader node
        leaderNode.next = node;
        //update next node with saved reference
        node.next = follower;
        node.prev = leaderNode;
        follower.prev = node;
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
        unwantedNode.next.prev = leaderNode;
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

    reverse() {
        //if there is only one node, return the list
        if (!this.head.next) {
            return this;
        }
        //set first to head and tail to head
        let first = this.head;
        this.tail = this.head;
        //set second to node after first
        let second = first.next;
        //iterate until second is null
        while (second) {
            //save reference to next node
            let temp = second.next;
            //reverse pointer to point backwards
            second.next = first;
            //move first forward
            first = second;
            //move second forward using saved reference 
            second = temp;
        }
        //set original head's next to null since its now tail
        this.head.next = null;
        //update head to the last node
        this.head = first;
        return this;
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