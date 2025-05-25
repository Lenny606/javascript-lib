class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new BinaryTreeNode(data);
        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                //left
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(data) {
        if (this.root === null) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data) {
                return true;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(data) {
        if (this.root === null) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (data < currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                //found the node
                if (currentNode.data === data) {
                    //3 options

                    //1st no right child
                    if (currentNode.right === null) {
                        if (parentNode === null) { //is root
                            this.root = currentNode.left;
                        } else {
                            if (currentNode.data < parentNode.data) {
                                parentNode.left = currentNode.left;
                            } else if (currentNode.data > parentNode.data) {
                                parentNode.right = currentNode.left;
                            }
                        }
                    }

                    //2nd option - right child with no left child
                    else if (currentNode.right && currentNode.right.left === null) {
                        if (parentNode === null) { //is root
                            this.root = currentNode.right;
                        } else {
                            currentNode.right.left = currentNode.left;
                            if (currentNode.data < parentNode.data) {
                                parentNode.left = currentNode.right;
                            } else if (currentNode.data > parentNode.data) {
                                parentNode.right = currentNode.right;
                            }
                        }
                    }
                    //3rd option - right child with left child
                    else if (currentNode.right && currentNode.right.left) {
                        let leftmost = currentNode.right.left;
                        let leftmostParent = currentNode.right;
                        while (leftmost.left) {
                            leftmostParent = leftmost;
                            leftmost = leftmost.left;
                        }

                        //parents subtree
                        leftmostParent.left = leftmost.right;
                        leftmost.left = currentNode.left;
                        leftmost.right = currentNode.right;
                        if (parentNode === null) {
                            this.root = leftmost;
                        } else {
                            if (currentNode.data < parentNode.data) {
                                parentNode.left = leftmost;
                            } else if (currentNode.data > parentNode.data) {
                                parentNode.right = leftmost;
                            }
                        }
                    }
                    return true;
                }
            }
        }
    }
}