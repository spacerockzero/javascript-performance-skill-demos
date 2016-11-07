var start = window.performance.now();
var otherThing = theThing.longStr.split('').reverse().join('').split('').reverse().join('');
// console.log('otherThing:', otherThing);
var end = window.performance.now();
var diff = end - start;
// console.log(`start: ${start}, end: ${end}`);
console.log(`op took ${diff} ms to complete`);
