function frankenSplice(arr1, arr2, n) {
    // supaya tidak merubah isi arr2, 
    // saya copy arr2 menjadi arrPalsu
    let arrPalsu = [...arr2];
    arrPalsu.splice(n,0,...arr1);
    return arrPalsu;
  }
  
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  