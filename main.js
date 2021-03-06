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

// console.log(qSort(tempArr));


// Implementing merge sort
function msort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = msort(left);
  right = msort(right);

  return merge(array, left, right);
}

function merge(array, left, right) {
  let leftIndex = 0;
  let rightIndex = 0; // right
  let k = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[k++] = left[leftIndex++];
    } else {
      array[k++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++ ){
    array[k++] = left[i];
  }
  for (let j = rightIndex; j < right.length; j++) {
    array[k++] = right[j];
  }

  return array;
}


// console.log(msort(tempArr));


// Sorting Linked List using merge sort
class _Node{
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(item){     
    this.head = new _Node(item,this.head);
  }

  insertLast(item){
    // checks if ll is empty
    if (this.head === null){
      this.insertFirst(item);
      return;
    }
    let tempNode = this.head;
    while(tempNode.next !== null){
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item,null);
  }

  insertAt(item,value){
    let currNode = this.head;
    let prevNode = this.head;
    if (currNode === null){
      this.insertFirst(item); 
      return;
    }
    for (let i=0;i<value;i++){
      if(currNode.next === null){
        currNode.next = new _Node(item,null);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = new _Node(item,currNode);
  }

  insertBefore(item,value){
    if (this.head === null){
      return null;
    }
    // currNode is where to insert
    // nextNode is where to find value
    let currNode = this.head;
    let prevNode = this.head;
    
    while (currNode.value !== value){
      if(currNode.next === null){
        return null;
      }
      prevNode = currNode;
      currNode = prevNode.next;
    }
    const newNode = new _Node(item,currNode);
    prevNode.next = newNode;
  }

  insertAfter(item,value){
    if (this.head === null){
      return null;
    }
    // currNode is where to insert
    // prevNode is where to find value
    let currNode = this.head;
    let prevNode = this.head;
    
    while (prevNode.value !== value){
      if(currNode.next === null){
        return null;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    const newNode = new _Node(item,currNode);
    prevNode.next = newNode;
  }

  find(item){
    // checks if ll is empty
    if (this.head === null){
      return null;
    }

    let tempNode = this.head;
    while(tempNode.value !== item){
      // checks to see if at the end of ll
      if (tempNode.next=== null){
        console.log('item not found');
        return null;
      }
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  remove(item){
    // checks if ll is empty
    if (this.head === null){
      return null;
    }

    // checks if value is in head
    if (this.head.value===item){
      this.head = this.head.next;
      return;
    }

    // start at head
    let prevNode = this.head;
    let currNode = this.head;

    // loop until currNode value is item
    while(currNode !==null && currNode.value !== item){
      prevNode = currNode;
      currNode = currNode.next;
    }
    // remove pointer pointing at item
    // checks to see if at end of ll
    if (currNode=== null){
      console.log('Error: item not in LinkedList');
      return;
    }
    prevNode.next = currNode.next;
  }
}

// other linked list functions
function display(ll){
  let currNode = ll.head;
  let output = 'head->';
  while (currNode !== null){
    output += `${currNode.value}->`;
    currNode = currNode.next;
  }
  output += 'null';
  console.log(output);
  return output;
}

function size(ll){
  let currNode = ll.head;
  let size = 0;
  if (currNode===null){
    return size;
  }
  while (currNode !== null){
    currNode = currNode.next;
    size++;
  }
  return size;
}

function isEmpty(ll){
  return ll.head === null;
}

function findPrevious(ll,item){
  let prevNode = ll.head;
  let currNode = ll.head;
  if (currNode === null){
    return null;
  }
  while (currNode!== null && currNode.value !== item){
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (currNode===null){
    return null;
  }
  return prevNode;
}

function findLast(ll){
  let currNode = ll.head;
  let prevNode = ll.head;
  if (currNode === null){
    return null;
  }
  while (currNode!== null){
    prevNode = currNode;
    currNode = currNode.next;
  }

  return prevNode;
}

function clear(ll){
  ll.head = null;
}

function findMiddle(ll){
  if (isEmpty(ll)){
    return null;
  }
  const middle = Math.floor(size(ll)/2);
  let curr = ll.head;
  let counter = 0;
  while(counter < middle){
    curr = curr.next;
    counter++;
  }
  return curr;
}

function mergeSortLinkedList(list){
  if (size(list)<= 1){
    return list;
  }
  const middle = findMiddle(list);
  let left = new LinkedList();
  // loop through 0 - middle, insertLast on the list
  let curr = list.head;
  while (curr !== middle){
    left.insertFirst(curr.value);
    curr = curr.next;
  }
  let right = new LinkedList();
  while (curr !== null){
    right.insertFirst(curr.value);
    curr = curr.next;
  }
  let newList = new LinkedList();

  left = mergeSortLinkedList(left);
  right = mergeSortLinkedList(right);

  return mergeLinkedList(newList,left,right);

}

function mergeLinkedList(list,left,right){

  let currLeft = left.head;
  let currRight = right.head;
  while (left.head !== null && right.head!== null){
    if (left.head.value < right.head.value){
      list.insertLast(left.head.value);
      left.remove(currLeft.value);
      currLeft = left.head;
    }else{
      list.insertLast(right.head.value);
      right.remove(currRight.value);
      currRight = right.head;
    }
  }
  while (currLeft !== null){
    list.insertLast(currLeft.value);
    left.remove(currLeft.value);
    currLeft = left.head;
  }
  while (currRight !== null){
    list.insertLast(currRight.value);
    right.remove(currRight.value);
    currRight = right.head;
  }
  return list;
}

// const list = new LinkedList();
// list.insertFirst(2);
// list.insertFirst(7);
// list.insertFirst(1);
// list.insertFirst(9);
// list.insertFirst(4);
// list.insertFirst(6);
// list.insertFirst(5);
// list.insertFirst(17);

// display(mergeSortLinkedList(list));


// Bucket Sort
// [14, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 33, 89] lowest = 2, highest = 89
function bucketSort(array, lowest, highest) {
    const sortedArray = new Array(highest - lowest)
    for (let i = 0; i < array.length; i++) {
        sortedArray[array[i] - lowest] = array[i];
    }

    let newSortedArr = []
    for (let j = 0; j < sortedArray.length; j++) {
        if (sortedArray[j]) {
            newSortedArr.push(sortedArray[j]);
        }
    }

    return newSortedArr;
}

let unsortedArr = [14, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 33, 89];
console.log(bucketSort(unsortedArr, 2, 89));