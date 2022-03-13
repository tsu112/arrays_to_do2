// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
// **********************************************************************
var arr1 = [1, 2, 3, 4, 5];

function reverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var x = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = x;
  }
}
reverse(arr1);
console.log(arr1);
// **********************************************************************

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1),
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// ********************************************************************

var arr1 = [1, 2, 3, 4, 5];

function rotateArr(arr, shiftBy) {
  var move;
  if (shiftBy > 0) {
    move = shiftBy % arr.length;
  } else {
    move = shiftBy % arr.length;
  }
  if (move > 0) {
    for (var i = 0; i < move; i++) {
      var temp = arr[arr.length - 1];
      for (var j = arr.length - 1; j >= 0; j--) {
        arr[j] = arr[j - 1];
      }
      arr[0] = temp;
    }
  } else {
    for (var i = 0; i > move; i--) {
      var temp = arr[0];
      for (var j = 0; j <= arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1] = temp;
    }
  }
}

rotateArr(arr1, 51);
console.log(arr1);
// ********************************************************************

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
// ********************************************************************

var arr1 = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, min, max) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      for (var j = i + 1; j < arr.length; j++) {
        arr[j - 1] = arr[j];
      }
      arr.length--;
      i--;
    }
  }
}

filter(arr1, 3, 5);
console.log(arr1);
// ********************************************************************

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
// ********************************************************************

function concat(arr1, arr2) {
  var newArr = [];
  var current = 0;
  for (var i = 0; i < arr1.length; i++) {
    newArr[current] = arr1[i];
    current++;
  }
  for (var i = 0; i < arr2.length; i++) {
    newArr[current] = arr2[i];
    current++;
  }
  return newArr;
}
var arr = concat([1, 2, 3], ["hello", "world"]);
console.log(arr);
