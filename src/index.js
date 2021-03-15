module.exports = function toReadable (number) {
    
  let b = number % 10;
  let a = (number-b)/10;
  let c = (a-b)/10; // n = 10*a+b
  let f = (a)%10; 
  let A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred'];  
  let A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  if (number === 0) {
    return 'zero'
  } else if (number > 0 && number < 100) {
    if (number <= 10) {
      return (A1[number-1]);
    } else if (number > 10 && number < 20) {
      return (A2[number-11]);
    } else if (b == 0) {
      return (A3[a-1]);
    } else if (number > 20 && number < 100) {
      return (A3[a-1]+' '+A1[b-1]);
    }
  }  else if (number > 99 && number < 1000) {
    if (b === 0 && f === 0) {
    return (A4[c-1]);
    } else if (b !== 0 && f === 0) {
      return (A4[Math.ceil(c)-1]+' '+A1[b-1]);
    } else if (b !== 0 && f === 1) {
      return (A4[Math.ceil(c)-1]+' '+A2[b-1]);
    } else if (b === 0 && f !== 0) {
      return (A4[Math.floor(c)-1]+' '+A3[f-1]);
    } else {
      return (A4[Math.trunc(a/10)-1]+' '+A3[f-1]+' '+A1[b-1]);
    }
  }
}
