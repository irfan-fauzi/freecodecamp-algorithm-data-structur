function truncateString(str, num) {

    if (num < str.length) {
        let regex = new RegExp('^(.\w*){' + num + '}', 'ig');
        return str.match(regex) + "...";
    } else {
        return str;
    }


    // if (str.length > num) {
    //   return str.slice(0, num) + "...";
    // } else {
    //   return str;
    // }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket ball and soccer", 5));
