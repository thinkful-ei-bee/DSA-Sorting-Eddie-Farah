'use strict';
// Understanding Merge Sort

// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// 21, 1, 26, 45, 29, 28, 2, 9  - 16, 49, 39, 27, 43, 34, 46, 40
// 21, 1, 26, 45 - 29, 28, 2, 9     16, 49, 39, 27 - 43, 34, 46, 40
// 21, 1 - 26, 45   29,28 - 2,9   16,49 - 39,27   43,34 - 46,40
// 21 1 26 45 29 28 2 9 16 49 39 27 43 34 46 40

// 1,21 26,45 28,29 2,9 16,49 27,39 34,43 40,46
// 1,21,26,45 2,9,28,29 16,27,39,49 34,40,43,46
// 1,2,9,21,26,28,29,45 16,27,34,39,40,43,46,49
// 1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49


// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// After 16 calls the list would be 1

// What are the first 2 lists to be merged?
// The first two list to be merged would be 21 and 1

// Which two lists would be merged on the 7th merge?
// On the 7th merge it would be lists 43 and 34 to be merged



// Understanding quicksort
// 1. The pivot could have been 17, but could not have been 14
// False, pivot could be both, values to the left of 17 or 14 are all lower, and values to the right are all higher. 

// 2. The pivot could have been either 14 or 17
// True. Values to the left of 17 or 14 are all lower, and values to the right are all higher. 

// 3. Neither 14 nor 17 could have been the pivot
// False. All other value are either higher or lower than values to their left/right. 

// 4. The pivot could have been 14, but could not have been 17
// False, pivot could be both, values to the left of 17 or 14 are all lower, and values to the right are all higher. 


// 2) 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
// When using the last item on the list as a pivot
// 1st partition: 10, 17, 13, 15, 19, 14, 3, 16, 9, 12
// 2nd partition: 10, 3, 13, 15, 19, 14, 17, 16, 9, 12

// When using the first item on the list as a pivot
// 1st partition: 14, 13, 17, 15, 19, 10, 3, 16, 9, 12 
// 2nd partition: 14, 13, 10, 15, 19, 17, 3, 16, 9, 12 


// Implementing quicksort
// 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5


function qSort(array,start=0,end=array.length){
  if (start >= end){
    return array;
  }
  const middle = partition(array,start,end);
  qSort(array,start,middle);
  qSort(array,middle+1,end);
  return array;
}

function partition(array,start,end){
  const pivot = array[end-1];
  let j = start;
  for (let i = start; i < end-1;i++){
    if (array[i]<=pivot){
      swap(array, i, j);
      j++;
    }
  }
  swap(array,end-1,j);
  return j; 
}

function swap(array,i,j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const tempArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
console.log(qSort(tempArr));