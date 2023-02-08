module.exports =  function toReadable (number) {
  
  let hundreds =['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred', 'eight hundred','nine hundred'];
  let dozens =['ten', 'twenty' , 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numbers = ['one', 'two', 'three', 'four','five', 'six', 'seven','eight', 'nine'];
  let dozNumbers = ['eleven','twelve', 'thirteen', 'fourteen' , 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let str= number.toString().split('');
    let lengthArr = str.length;
   
   if (lengthArr == 3){
  
    let i = str[0];
    let y = str[1];
    let z = str[2];
  
    let xxx = hundreds[i-1];
    let xx = dozens[y-1];
    let x = numbers[z-1];
    if(y == 0 & z == 0){
       return xxx;
  }else if(y == 0 & z !== 0){
    return xxx + " " + x;
  }else if(y !== 0 & z == 0){
    return xxx + " " + xx;
  }else if( y == 1){
    let xy = dozNumbers[z-1];
    return xxx + " " + xy;}
    return xxx + " " + xx + " " + x;
    }else if((lengthArr == 2) & (number >= 20)){
      let y = str[0];
      let z = str[1];
      let xx = dozens[y-1];
      let x = numbers[z-1];
      if( z == 0){
        return dozens[y-1];
      }
     return xx + " " + x; 
   }else if((lengthArr == 2) & (number > 10 )){
    console.log('yes');
    let z = str[1];
    return dozNumbers[z-1];
   }else if((lengthArr == 2) & (number == 10 )){
    return 'ten';
   }else if((lengthArr == 1) & (number > 0)){
    let z = str[0];
    let x = numbers[z-1];
    let result = x; 
   return result;
  }else if((lengthArr == 1) & (number == 0)){
   return 'zero';
  }
   }
