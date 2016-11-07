//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//  Big "O" Complexity                                                                  //
//  Working through demo from:                                                          //
//  http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html  //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

// Setup
// Set up a simple array of colours
const colors = new Array ("Black", "Blue", "Brown", "Green", "Pink", "Red", "White", "Yellow");

// Set up numbers from 1 to 2500
let numbersHalf = new Array();

for (let i = 1; i < 2500; i++) {
  numbersHalf.push(i);
};

// Set up numbers from 1 to 5000
let numbersFull = new Array();

for (let i = 1; i < 5000; i++) {
  numbersFull.push(i);
};



////////////////////////////////////////////////////////////////////////////////
//  Constant Complexity                                                       //
//  Expressed as: 0(1)                                                        //
////////////////////////////////////////////////////////////////////////////////

// Find first item
function findFirstItem( items ) {
  return items[0];
}

JSLitmus.test('Find first color test', function() {
  findFirstItem(colors);
});

JSLitmus.test('Find first number test (2500 items)', function() {
  findFirstItem(numbersHalf);
});

JSLitmus.test('Find first number test (5000 items)', function() {
  findFirstItem(numbersFull);
});



////////////////////////////////////////////////////////////////////////////////
//  Linear Complexity                                                         //
//  Expresed as O(n)                                                          //
////////////////////////////////////////////////////////////////////////////////

function findItem( items, match ) {
  for (let i=0; i<items.length; i++) {
    if (items[i] == match) {
      return true;
    }
  }
  return false;
}

JSLitmus.test('Find color by color name', function() {
  findItem(colors, 'Yellow');
});

JSLitmus.test('Find number index by number (2500 items)', function() {
  findItem(numbersHalf, 2500);
});

JSLitmus.test('Find number index by number (5000 items)', function() {
  findItem(numbersFull, 5000);
});



////////////////////////////////////////////////////////////////////////////////
//  Logarithmic Complexity                                                    //
//  Expressed as O(log n)                                                     //
////////////////////////////////////////////////////////////////////////////////

function findItemBinarySearch( items, match ) {
  let low = 0;
  let high = items.length - 1;

  while ( low <= high ) {
    let mid = parseInt(( low + high ) / 2);
    current = items[mid];
    if ( current > match ) {
      high = mid - 1;
    } else if ( current < match ) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

}

JSLitmus.test('Find color by color name', function() {
  findItemBinarySearch(colors, 'Yellow');
});

JSLitmus.test('Find number index by number (2500)', function() {
  findItemBinarySearch(numbersHalf, 2500);
});

JSLitmus.test('Find number index by number (5000)', function() {
  findItemBinarySearch(numbersFull, 5000);
})
