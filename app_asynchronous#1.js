//Asynchronous execution
//1
boilWater(0);
//2
console.log("chop carrots");
// for (let i = 0; i < 10000; i++) {
//   console.log("still busy");
// }

function boilWater(time) {
  console.log("boiling....");

  setTimeout(() => {
    //3
    console.log("done");
  }, time);
}
