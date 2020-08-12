function confirmEnding(str, target) {
    let regex = new RegExp('(\w*'+ target +'$)','ig');
    return regex.test(str);
  }
  
  console.log(confirmEnding("he has to give me a new name", "name"));
  