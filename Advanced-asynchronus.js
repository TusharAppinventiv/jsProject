function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function example() {
    console.log("Start");
    await delay(2000);
    console.log("After 2 seconds");
    await delay(3000);
    console.log("After another 3 seconds");
  }
  
  example();
  