// extracting json /////////////////////////////////////////////////////////////

let cookiesJSON;
async function getCookieData() {
    console.log("cookie data getting");
    let response = await fetch("./interface/json/cookies.json");
    cookiesJSON = await response.json();
    console.log("cookie data got");
}
getCookieData();
    
let bookJSON;
async function getBookData() {
    // need full path to work
    let response = await fetch("./interface/json/book.json");
    console.log(response);
    bookJSON = await response.json();
    console.log("book data got");
}
getBookData();


// style functions /////////////////////////////////////////////////////////////

function toggleItemSelection(item) {
    $(".selected-item").toggleClass("selected-item");
    item.toggleClass("selected-item");
}


// implementation functions ////////////////////////////////////////////////////

function resetPages() {
    // deselect all pages
    $(".selected-item").toggleClass("selected-item");
    // hide hidden things
    $("#read-book").hide();
    // reset text on pages
    $("#book-title-text").html(`select a book from the left sidebar to read its contents`);
    $("#recording-title-text").html(`select a recording from the left sidebar to view its contents`);
    let thingsToEmpty = ["#book-synopsis-text", "#book-body-text"];
    for (selector in thingsToEmpty) {
        $(selector).empty();
    }
}

$(document).ready(resetPages);
