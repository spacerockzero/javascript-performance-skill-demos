var start = window.performance.now();
var otherThing = theThing.longStr.split('').reverse().join('').split('').reverse().join('');
// console.log('otherThing:', otherThing);
var end = window.performance.now();
var diff = end - start;
// console.log(`start: ${start}, end: ${end}`);
console.log(`op took ${diff} ms to complete`);

var start2 = window.performance.now();
var otherThing2 = theThing.longStr.split('').reverse().join('');
// console.log('otherThing:', otherThing);
var end2 = window.performance.now();
var diff2 = end2 - start2;
// console.log(`start: ${start2}, end: ${end2}`);
console.log(`op 2 took ${diff2} ms to complete`);

var start3 = window.performance.now();
var otherThing3 = theThing.longStr;
// console.log('otherThing:', otherThing);
var end3 = window.performance.now();
var diff3 = end3 - start3;
// console.log(`start: ${start3}, end: ${end3}`);
console.log(`op 3 took ${diff3} ms to complete`);
