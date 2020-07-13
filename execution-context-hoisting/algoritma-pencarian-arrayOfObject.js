// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let result;
    for (let i = 0; i < contacts.length; i++) {
        // cek, apakah akira adalah value dari object contact
        if (contacts[i].firstName === name) {
            result = contacts[i][prop];
        }
    }
    return result;

    // Only change code above this line
}

console.log(lookUpProfile("Sherlock", "likes"));

/* "Kristian", "lastName" should return "Vos"
"Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
"Harry","likes" should return an array
"Bob", "number" should return "No such contact"
"Bob", "potato" should return "No such contact"
"Akira", "address" should return "No such property"-  */