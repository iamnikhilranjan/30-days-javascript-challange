//write a function to rotate an array by k positions. Log the rotated array

function rotateArray(arr, k){
    const n = arr.length;
    k = k % n;

    if( k === 0){
        console.log(arr);
        return arr;
    }

    const rotatedPart = arr.slice(-k);
    const remainingPart = arr.slice( 0, n-k);

    const rotatedArray = rotatedPart.concat(remainingPart);
    console.log(rotatedArray);
    return rotateArray;

}

let arr = [ 1, 2, 3, 4, 5];
let k = 2;
rotateArray(arr, k);

//writre a program to merge two sorted arrays into one sorted arrary.

function mergeSortedArray(arr1, arr2){
    let mergeArray = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length && j < arr.length){
        if( arr1[i] < arr2[j]){
            mergeArray.push(arr[i]);
            i++;
        }else{
            mergeArray.push(arr2[j]);
            j++;
        }
    }

    while( i < arr1.length){
        mergeArray.push(arr1[i]);
        i++;
    }
    while( j < arr2.length){
        mergeArray.push(arr2[j]);
        j++;
    }
    console.log(mergeArray);
    return mergeArray;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
mergeSortedArray(arr1, arr2);