class SmartCalculator {
  constructor(initialValue) {
    this.arr = [initialValue];
   // this.arr.push(initialValue);
  }

  add(number) {
    this.arr.push("+");
    this.arr.push(number);
    return this;
  }
  
  subtract(number) {
    this.arr.push('-');
    this.arr.push(number);
    return this;
  }

  multiply(number) {
    this.arr.push('*');
   this.arr.push(number);
    return this;
  }

  devide(number) {
    this.arr.push('/');
    this.arr.push(number);
    return this;
  }

  pow(number) {
    this.arr.push('^');
    this.arr.push(number);
    return this;
  }

  valueOf(){

    for (let i = this.arr.length; i > 0; i--) {
      if (this.arr[i] === '^') {
        this.arr[i-1] = Math.pow(this.arr[i-1], this.arr[i+1]);
        this.arr.splice(i, 2);
        i++; 
      }
    }
    
    for(let i = 0; i < this.arr.length; i++) {
      if(this.arr[i] === '*') {
        this.arr[i-1] *=  this.arr[i+1];
        this.arr.splice(i, 2);
        i--;
      }
      if(this.arr[i] === '/') {
        this.arr[i-1] /= this.arr[i+1];
        this.arr.splice(i, 2);
        i--;
      }
    }

    for(let i = 0; i < this.arr.length; i++) {
      if(this.arr[i] === '+') {
        this.arr[i-1] += this.arr[i+1];
        this.arr.splice(i, 2);
        i--;
      }
      if (this.arr[i] === '-') {
        this.arr[i-1] -= this.arr[i+1];
        this.arr.splice(i, 2);
        i--;
      }
    } 
    return this.arr[0];
  }
}

module.exports = SmartCalculator;
