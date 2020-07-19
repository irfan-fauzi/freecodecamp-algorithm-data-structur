function countdown(n){
    if( n >= 0){
  
      if( n == 0){
        return [];
      }
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
  
    } else if( n < 0){
      return []
    }
  }
  // Only change code above this line
  console.log(countdown(10));