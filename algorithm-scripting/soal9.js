function fearNotLetter(str) {

    // buat array angka supaya mudah dijumlahkan / dikurangi
    let angka = []
    for(let i = 0; i < str.length; i++){
      angka.push(str.charCodeAt(i))
    }
    for(let j = 0; j < angka.length; j++){
      if(angka[j] !== str.charCodeAt(0) + j){
        return String.fromCharCode( angka[j] - 1 )
      }
    }
  
  }
  
  console.log(fearNotLetter("adef"));
  