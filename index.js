//1

const array_1 = [1, 2, 3];
const array_2 = [4, 5, 6];

console.log(array_1.concat(array_2));

//2

const array_reverse = [1, 2, 3];

console.log(array_reverse.reverse());

//3

let array_push = [1, 2, 3];
let array_push2 = array_push.push(4, 5, 6);
console.log(array_push);

//4

const unshift_1 = [1, 2, 3];
const unshift_2 =unshift_1 .unshift(4, 5, 6);
console.log(unshift_1);

//5
const arr_language = ["js", "css", "html"];
const shift = arr_language.shift();
console.log(shift);
console.log(arr_language);

//6
const arr_language_1 = ["js", "css", "html"];
const pop = arr_language_1.pop();

console.log(pop);
console.log(arr_language_1);

//7
const arr_slice = [1, 2, 3, 4, 5];
const slice = arr_slice.slice(0, 3);
console.log(slice);

//8

const slice_2 = arr_slice.slice(3, 5);
console.log(slice_2);

//9

const arr_splice = [1, 2, 3, 4, 5];
const splice = arr_splice.splice(1, 2);
console.log(arr_splice);

//10

const arr_splice_1 = [1, 2, 3, 4, 5];
const splice_1 = arr_splice_1.splice(5, 3, 2, 3, 4);
console.log(arr_splice_1);

//11
const arr_splice_2 = [1, 2, 3, 4, 5];
const splice_2 = arr_splice_2.splice(3, 0, "a", "b", "c");
console.log(arr_splice_2);

//12

const arr_splice_3 = [1, 2, 3, 4, 5];
const splice_3 = arr_splice_3.splice(1, 4, "a", "b", 2, 3, 4, "c", 5, "e");
console.log(arr_splice_3);

//13

const arr_sort = [3, 4, 1, 2, 7];
const sort = arr_sort.sort();
console.log(arr_sort);

//14

const testObject = {
  js: "test",
  jq: "hello",
  css: "word",
};
console.log(Object.keys(testObject));

//Function

//1

const arr_numbers_2 = [1, '2', 3, 4, 5];


function hasElem(arr_numbers_2, string) {
 return arr_numbers_2.includes(string)
} 

console.log(hasElem([1,2,3], "apple"));

//2
const arr_numbers = [1, 2, 3, 4, 5];

function chekNumbers(arr, elem) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === elem ) {
      return true;
    }
  }
  return false;
}

console.log(chekNumbers(arr_numbers, 4));

//3




const hasSeqEq = arr => arr.some((el, i, arr) => i!=0 && el===arr[i-1]);

console.log(hasSeqEq([2,2,1])); 
console.log(hasSeqEq([1,2,1])); 
    

//4

function rand(val, max) {
 let arr = [],
    i = 9,
    pos = Math.floor(Math.random() * (i + 1));

  while (i--) {
   let rnd = Math.floor(Math.random() * max);

    arr.push(rnd >= val ? ++rnd : rnd);
  }

  arr.splice(pos, 0, val);
  return arr;
}

console.log(rand(5, 33));

//5


function averageFun (nums=[]) {
  if(nums.length===0){
    return false;
  }
   let sum=0
  for (let i=0; i<nums.length; i++){
   sum+=nums[i]};
   {
    return sum/nums.length;
   
  }

} console.log(averageFun())