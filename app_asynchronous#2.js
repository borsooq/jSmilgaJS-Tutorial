//Asynchronous execution
boilWater();
console.log("chop carrots");

function boilWater() {
  console.log("boiling....");

  setTimeout(() => {
    console.log("boiling done");
    console.log("add carrots");
    setTimeout(() => {
      console.log("carrots done");
      console.log("add onion");
      setTimeout(() => {
        console.log("onion done");
      }, 1000);
    }, 1000);
    console.log("chop onion");
  }, 3000);
}
