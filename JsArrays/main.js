//#region Task 1
// function findMinimumInArray(array) {
//     let min = array[0];

//     for (let i = 1; i < array.length; i++) {
//         if(array[i] < min){
//             min = array[i];
//         }
//     }

//     return min;
// }

// console.log(findMinimumInArray([34,543,65,23,556]));
//#endregion

//#region Task 2
// function findMaximumInArray(array) {
//     let max = array[0];

//     for (let i = 1; i < array.length; i++) {
//         if(array[i] > max){
//             max = array[i];
//         }
//     }

//     return max;
// }

// console.log(findMaximumInArray([34,543,65,23,556]));


//Sureti daha azdi forEach loopun
// function findMaximumInArray(array) {
//     let max = array[0];

//     array.forEach(element => {
//         if(element > max){
//             max = element;
//         }
//     });

//     return max;
// }

// console.log(findMaximumInArray([34,543,65,23,556]));
//#endregion

//#region Task 3
// function findMinimumIndexInArray(array) {
//     let min = array[0];
//     let minI = 0;

//     for (let i = 1; i < array.length; i++) {
//         if(array[i] < min){
//             min = array[i];
//             minI = i;
//         }
//     }

//     return minI;
// }

// console.log(findMinimumIndexInArray([34,543,65,23,556]));
//#endregion

//#region Task 4
// function findMaximumIndexInArray(array) {
//     let max = array[0];
//     let maxI = 0;

//     for (let i = 1; i < array.length; i++) {
//         if(array[i] > max){
//             max = array[i];
//             maxI = i;
//         }
//     }

//     return maxI;
// }

// console.log(findMaximumIndexInArray([34,543,65,23,556]));
//#endregion

//#region Task 5
// function oddSumOfArray(array) {
//     let sum = array.filter((element , index) => {
//         return index % 2 == 1;
//     })

//     return sum.reduce((pr , cr) => {
//         return pr += cr;
//     })
// }

// console.log(oddSumOfArray([34,543,65,23,556,456]));
//#endregion

//#region Task 6
// function reverseArray(array){
//     let revIndex = array.length-1;

//     for (let index = 0; index < (array.length/2).toFixed(0); index++) {
//         let temp = array[index];
//         array[index] = array[revIndex];
//         array[revIndex] = temp;

//         revIndex--;
//     }

//     return array;
// }
// console.log(reverseArray([34,543,65,23,556,456,368,78]));
//#endregion

//#region Task 7
// function oddElementsCount(array) {
//     let count = 0;

//     for (const element of array) {
//         if(element % 2 == 1){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(oddElementsCount([34,543,65,23,556,456,368,78,675]));
//#endregion

//#region Task 8
// function middleSwap(array){
//     let index = (array.length/2).toFixed(0);

//     for (let i = 0; i < (array.length/2).toFixed(0); i++) {
//         if(index < array.length){
//             let temp = array[i];
//             array[i] = array[index];
//             array[index] = temp;

//             index++;
//         }
//     }

//     return array;
// }

// console.log(middleSwap([1,2,3,4]));
// console.log(middleSwap([1,2,3,4,5]));
//#endregion

//#region Task 9
// function customSortAsc(array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if(array[j] > array[i]){
//                 let temp = array[j];
//                 array[j] = array[i];
//                 array[i] = temp;
//             }
//         }
//     }

//     return array;
// }

// console.log(customSortAsc([34,543,65,23,556,456,368,78,675]));
//#endregion

//#region  Task 10
// function customSortDesc(array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if(array[j] > array[j+1]){
//                 let temp= array[j + 1];
//                 array[j + 1] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }

//     return array;
// }

// console.log(customSortDesc([34,543,65,23,556,456,368,78,675]));
//#endregion

//Deep Equal Task
// const object1 = {
//     id: 1,
//     name: "Obj1",
//     adress: "0x00000F"
// }
// const object2 = {
//     id: 1,
//     name: "Obj1",
// }

// function DeepEqual(obj1, obj2){
//     return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
// }

// console.log(DeepEqual(object1, object2));