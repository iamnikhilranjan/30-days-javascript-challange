//Implement the bubble sort , selection sort and insertion sort to an array of numbers in ascending order.

let arr = [1, 9, 3, 5, 8, 2, 0, 3, 5, 6, 2, 5, 7, 8, 10, 5];

function bubbleSort(arr){
    const n = arr.length;
    for( let k = 1 ; k < n ; k++){
        let flag = 0;
        for(let i = 0 ; i < n-1 ; i++){
            if( arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                flag = 1;
            }
        }

        if( flag == 0) break;
    }
    return arr;
}

console.log(bubbleSort(arr));

arr = [4, 6, 1, 9, 10, 5, 2, 4, 6, 8, 1];

function selectionSort(arr){
    const n = arr.length;
    for( let i = 0 ; i < n-1 ; i++){
        let imin = i;
        for( let j = i+1 ; j < n ; j++){
            if( arr[j] < arr[imin]){
                imin = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[imin];
        arr[imin] = temp;
    }
    return arr;
}

console.log(selectionSort(arr));

arr = [4, 6, 1, 9, 10, 5, 2, 4, 6, 8, 1];

function insertionSort(arr){
    const n = arr.length;
    for( let i = 1; i < n ; i++){
        let key = arr[i];
        let hole = i;

        while( hole > 0 && arr[hole - 1] > key){
            arr[hole] = arr[hole - 1];
            hole = hole - 1;
        }
        arr[hole] = key;
    }
    return arr;
}

console.log(insertionSort(arr));
