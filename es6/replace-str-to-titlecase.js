const str = "aKu adAlah rObot dari mAsa depan";

function convertToTitleCase(string) {

    let regex = /\w+/ig;
    let ArrStr = string.match(regex);
    let lowercase = ArrStr.map(el => el.toLowerCase());

    let uppercase = lowercase.map(function (el) {
        return el.replace(el.charAt(0), el.charAt(0).toUpperCase());
    });
    return uppercase.join(" ");



}

console.log(convertToTitleCase(str));