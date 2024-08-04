//1. Basic Recursion
//Write a function to calculate the factorial of a number. Log th result for a few test cases

function factorial(n){
    if( n == 1) return 1;
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));
console.log(factorial(6));

//Write a recursive function to calculate the nth Fionacci number. Log the result for few test cases

function fib(n){
    if( n == 1 || n == 2) return 1;
    else{
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

//2. Recursion with arrays
//Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfArray(arr, index = 0){
    if( index >= arr.length){
        return 0;
    }
    return arr[index] + sumOfArray(arr, index + 1);
}

console.log(sumOfArray(arr));

//write a recursive function to find the maximum element in an array. Log the result for few test cases

function maxElement(arr, index = 0){
   if( arr.length === 0){
    return -Infinity;
   }
   if(index === arr.length - 1){
    return arr[index];
   }

   return Math.max(arr[index], maxElement(arr, index + 1));
}

console.log(maxElement(arr));
const array = [];
console.log(maxElement(array));

//3. String manipulation with recursion
//Write a recursive function to reverse a string. Log the result for a few test cases

function reverseString(str){
    if( str.length <= 1){
        return str;
    }

    return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString('Hello'));

//Write a recursive function to check if a string is a palindrome.

function isPalindrome(str){
    if(str.length <= 1){
        return true;
    }
    if( str.charAt(0) != str.charAt(str.length - 1)){
        return false;
    }

    return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('malayalam'));

//4. Recursive Search
//Write a recursive function to perform a binary search on a sorted array.

function binarySearch(arr, target, left = 0, right = arr.length - 1){
    if( left > right) return -1;

    let mid = Math.floor((left + right)/2);

    if(arr[mid] === target){
        return mid;
    }

    if( arr[mid] > target){
        return binarySearch(arr, target, left, mid -1);
    }else{
        return binarySearch(arr, target, mid + 1, right);
    }
}



const arr1 = [2, 3, 12, 23, 45, 56, 67, 78, 89];
console.log(binarySearch(arr1, 12));
console.log(binarySearch(arr, 8));

//Write a recursive function to count the occurances of a target element in an array.

function findOccurances(arr, target, index = 0){
   if( index >= arr.length){
    return 0;
   }

   let count = arr[index] === target ? 1 : 0 ;

   return count + findOccurances(arr, target, index + 1);
}

const arr2 = [1, 2, 1, 2, 2, 3, 1, 2, 3, 1, 3, 3, 2, 1];

console.log(findOccurances(arr2, 1));
console.log(findOccurances(arr2, 2));
console.log(findOccurances(arr2, 3));

//Tree traversal (optional)
//write a recursive function to perform an in-order traversal of a binary tree. 

class TreeNode{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(root){
    if(root === null){
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

//Write a recursive function to calculate the depth of a binary tree.

function calculateDepth(root){
    if( root == null){
        return 0;
    }
    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

console.log(`depth: ${calculateDepth(root)}`);