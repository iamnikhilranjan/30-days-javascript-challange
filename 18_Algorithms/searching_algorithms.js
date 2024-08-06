//Implement the linear search algorithm to find a target value in an array
let arr = [1, 4, 5, 2, 3, 7, 8, 9, 10];

function linearSearch(arr, target){
    const n = arr.length;

    for( let i = 0 ; i < n ; i++){
        if( arr[i] === target) return i;
    }
    return "element not found!";
}

console.log(linearSearch(arr, 99));


//binary search implementation
arr = [1, 4, 5, 2, 3, 7, 8, 9, 10];

function binarySearch(arr, target) {
  arr.sort((a, b) => a - b); 
  const n = arr.length;
  let left = 0;
  let right = n - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return "Element not found!";
}

console.log(binarySearch(arr, 3)); 
console.log(binarySearch(arr, 6)); 
