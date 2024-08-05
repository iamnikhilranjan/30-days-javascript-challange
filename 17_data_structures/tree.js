//Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
//Implement a BinaryTree class with methods for inerting values and performing in-ordertraversal to display nodes

class TreeNode{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
};

const tree = new TreeNode();

function inOrderTraversal(root){
   if( root === null){
    return;
   }

   inOrderTraversal(root.left);

   console.log(root.value);

   inOrderTraversal(root.right);
}

let root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1), new TreeNode(3)
    ),
    new TreeNode(6,
        new TreeNode(5),
        new TreeNode(7)
    )
);

inOrderTraversal(root);
