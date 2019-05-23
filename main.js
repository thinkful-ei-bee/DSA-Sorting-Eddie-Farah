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

