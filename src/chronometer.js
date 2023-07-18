class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
    }, 1000);
    
  }

  getMinutes() {
    // ... your code goes here
    let minut = this.currentTime/60
    return Math.floor(minut)
  }

  getSeconds() {
    // ... your code goes here
    let second = this.currentTime
    return Math.floor(second % 60 )
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString = value.toString();

    if( valueString.length === 1 ){
     return `0${valueString}`;
    }else{
      return valueString;
    }
   
  
  }

  stop() {
    // ... your code goes here
    this.intervalId = clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this,this.currentTime = 0 ;
  }

  split() {
    // ... your code goes here
  }
}
