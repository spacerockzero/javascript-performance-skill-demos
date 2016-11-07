////////////////////////////////////////////////////////////////////////////////
//  Lower Algorithmic Complexity                                              //
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// Setup                                                                      //
////////////////////////////////////////////////////////////////////////////////

// How we generate the randomized arrays of numbers
function randomArray( length, max ) {
  return Array.apply(null, Array(length)).map(function( _, i ) {
    return Math.round(Math.random() * max);
  })
}


const unordered1x = randomArray(10,10); // 1x size
console.log('unordered1x.length', unordered1x.length); // 10

const unordered2x = randomArray(20,20); // 2x size
console.log('unordered2x.length', unordered2x.length); // 20

const unordered4x = unordered2x.concat(unordered2x); // 4x size
console.log('unordered4x.length', unordered4x.length); // 40

const unorderedN2 = unordered2x
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x); // (n^2) size
console.log('unorderedN2.length', unorderedN2.length); // 100
console.log('unorderedN2', unorderedN2);

const unordered2N2 = unordered2x
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x)
                           .concat(unordered2x); // (2n^2) size
console.log('unordered2N2.length', unordered2N2.length); // 1000
console.log('unordered2N2', unordered2N2);

const unorderedN4 = unordered2N2
                           .concat(unordered2N2)
                           .concat(unordered2N2)
                           .concat(unordered2N2)
                           .concat(unordered2N2); // (n^4) size
console.log('unorderedN4.length', unorderedN4.length); // 200
console.log('unorderedN4', unorderedN4);

const unordered2N4 = unorderedN4
                    .concat(unorderedN4); // (n^4) size
console.log('unordered2N4.length', unordered2N4.length); // 2000
console.log('unordered2N4', unordered2N4);



////////////////////////////////////////////////////////////////////////////////
// Sort Functions                                                             //
////////////////////////////////////////////////////////////////////////////////

// high-complexity sort function
function sort(arr){
  const start = window.performance.now();

  for(let x=1; x < arr.length; x++) {
    for(let y=x; y > 0 && arr[y-1] > arr[y]; y--){
      let t = arr[y];
      arr[y] = arr[y-1];
      arr[y-1] = t;
    }
  }

  const end = window.performance.now();
  console.log(`complex sort takes ${end-start} ms and has complexity of O(n2)`);
  return arr;
}

// insertion sort using one for loop:
function insertionSort(array) {
  const start = window.performance.now();

  for(var i = 1 ; i < array.length;){
    if(array[i] < array[i-1]){
      var temp = array[i]
      array[i] = array[i -1]
      array[i -1] = temp
      i--
    } else{i++}
  }

  const end = window.performance.now();
  console.log(`insertion sort takes ${end-start} ms and has complexity of O(n)`);
  return array
}


////////////////////////////////////////////////////////////////////////////////
//  Results                                                                   //
////////////////////////////////////////////////////////////////////////////////

const highSort1x = sort(unordered1x);               // 0.014999999999997016 ms
const insertSort1x = insertionSort(unordered1x);    // 0.00999999999999801 ms (-0.005 ms)

const sort2x = sort(unordered2x);                   // 0.00999999999999801 ms
const insertSort2x = insertionSort(unordered2x);    // 0.005000000000002558 ms (-0.005 ms)

const sort4x = sort(unordered4x);                   // 0.019999999999999574 ms
const insertSort4x = insertionSort(unordered4x);    // 0.004999999999999005 ms (-0.015 ms)

const sortN2 = sort(unorderedN2);                   // 0.11999999999999744 ms
const insertSortN2 = insertionSort(unorderedN2);    // 0.004999999999999005 ms (-0.115 ms)

const sort2N2 = sort(unordered2N2);                 // 0.384999999999998 ms
const insertSort2N2 = insertionSort(unordered2N2);  // 0.010000000000001563 ms (-0.375 ms)

const sortN4 = sort(unorderedN4);                   // 9.905000000000001 ms
const insertSortN4 = insertionSort(unorderedN4);    // 0.02499999999999858 ms (-9.88 ms)

const sort2N4 = sort(unordered2N4);                 // 36.18499999999999 ms
const insertSort2N4 = insertionSort(unordered2N4);  // 0.05499999999999261 ms (-36.13 ms)
