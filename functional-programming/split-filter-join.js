// Only change code below this line
function urlSlug(title) {

    return title.split(" ").filter(el => el !== "").join("-").toLowerCase();

}
// Only change code above this line
console.log(urlSlug("   Winter    Is Coming"));
   // winter-is-coming