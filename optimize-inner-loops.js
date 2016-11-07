////////////////////////////////////////////////////////////////////////////////
//  Optimize Inner Loops                                                      //
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//  Setup                                                                     //
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
// console.log('unorderedN2', unorderedN2);

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
// console.log('unordered2N2', unordered2N2);

const unorderedN4 = unordered2N2
                           .concat(unordered2N2)
                           .concat(unordered2N2)
                           .concat(unordered2N2)
                           .concat(unordered2N2); // (n^4) size
console.log('unorderedN4.length', unorderedN4.length); // 200
// console.log('unorderedN4', unorderedN4);

const unordered2N4 = unorderedN4
                    .concat(unorderedN4); // (n^4) size
console.log('unordered2N4.length', unordered2N4.length); // 2000
// console.log('unordered2N4', unordered2N4);

const unorderedN10 = unorderedN4
                    .concat(unorderedN4)
                    .concat(unorderedN4)
                    .concat(unorderedN4)
                    .concat(unorderedN4)
                    .concat(unorderedN4)
                    .concat(unorderedN4)
                    .concat(unorderedN4)
                    .concat(unorderedN4)
                    .concat(unorderedN4); // (n^4) size
console.log('unorderedN10.length', unorderedN10.length); // 10,000
// console.log('unordered2N4', unordered2N4);



////////////////////////////////////////////////////////////////////////////////
//  Functions                                                                 //
////////////////////////////////////////////////////////////////////////////////
function square( x ) {
  return x * x;
}

function hypotenuse( a, b ) {
  return Math.sqrt(square(a) + square(b));
}

function badHypotenuse( a, b ) {
  function innerSquare( x ) {
    return x * x;
  }
  return Math.sqrt(innerSquare(a) + innerSquare(b));
}



////////////////////////////////////////////////////////////////////////////////
//  Results                                                                   //
////////////////////////////////////////////////////////////////////////////////

console.log('NOTE: I\'ve noticed that the second test is usally faster, regardless of which alg it ran, if they are close');

// 1x length
(function() {
  const start = performance.now();
  unordered1x.forEach( num => {
    hypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`1x good time: ${end - start} ms`);
})();

(function() {
  const start = performance.now();
  unordered1x.forEach( num => {
    badHypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`1x bad time: ${end - start} ms`);
})();

// n^2 length
(function() {
  const start = performance.now();
  unorderedN2.forEach( num => {
    hypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`n^2 good time: ${end - start} ms`);
})();

(function() {
  const start = performance.now();
  unorderedN2.forEach( num => {
    badHypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`n^2 bad time: ${end - start} ms`);
})();

// n^4 length
(function() {
  const start = performance.now();
  unorderedN4.forEach( num => {
    hypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`n^4 good time: ${end - start} ms`);
})();

(function() {
  const start = performance.now();
  unorderedN4.forEach( num => {
    badHypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`n^4 bad time: ${end - start} ms`);
})();

// n^10 length
(function() {
  const start = performance.now();
  unorderedN4.forEach( num => {
    hypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`n^10 good time: ${end - start} ms`);
})();

(function() {
  const start = performance.now();
  unorderedN10.forEach( num => {
    badHypotenuse(num, num + 1);
  });
  const end = performance.now();
  console.log(`n^10 bad time: ${end - start} ms`);
})();
