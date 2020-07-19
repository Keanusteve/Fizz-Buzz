for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}
// ///or  below code has not been tested yet 
// let text = '';
// if (i %3 === 0) {
// text = text + 'FIZZ';
// }
// if (i% 5 === 0)
// {
//     text = text + 'BUZZ';
// }
// if (text) {
//  console.log(text);// fizz buzz or both 
// } else console.log(i);
