// button-ify the buttons //////////////////////////////////////////////////////

function toggleScreen(key) {
    $(".current-screen").toggleClass("current-screen");
    $(`#${key}-screen`).toggleClass("current-screen");
    if (key != "main") {
        $("#return-to-main-page").show();
    } else {
        $("#return-to-main-page").hide();
        resetPages();
    }
}
// make and hide the return button until needed
$("#return-to-main-page").hide()
    .html("<< RETURN")
    .click(function() {toggleScreen('main')});
// screen selection
let screens = ["library", "notepad", "recordings"];
for (let key of screens) {
    $(`#I_${key}`).click(function() {toggleScreen(key)});
}

// cookies /////////////////////////////////////////////////////////////////////
let cookiesJSON;
async function getCookieData() {
    console.log("cookie data getting");
    let response = await fetch("./interface/json/cookies.json");
    cookiesJSON = await response.json();
    console.log("cookie data got");
}
getCookieData();
    
// libray functions ////////////////////////////////////////////////////////////
let bookJSON;
async function getBookData() {
    // need full path to work
    let response = await fetch("./interface/json/book.json");
    console.log(response);
    bookJSON = await response.json();
    console.log("book data got");
}
getBookData();

function toggleItemSelection(item) {
    $(".selected-item").toggleClass("selected-item");
    item.toggleClass("selected-item");
}

function resetPages() {
    // deselect all pages
    $(".selected-item").toggleClass("selected-item");
    // hide hidden things
    $("#read-book").hide();
    // reset text on pages
    $("#book-title-text").html("select a book from the left sidebar to read its contents");
    $("#recording-title-text").html("select a recording from the left sidebar to view its contents");
    let thingsToEmpty = ["#book-synopsis-text", "#book-body-text"];
    for (selector in thingsToEmpty) {
        $(selector).empty();
    }
}

$(document).ready(resetPages);

$(".book-icon").click(function() {
    console.log("book clicked");
    // selection coloring
    toggleItemSelection($(this));
    // get book data
    let title = $(this).data('booktitle').replace(/-/g, ' ');
    $("#book-title-text").html(title);
    $("#book-synopsis-text").html(bookJSON[title].synopsis);
    // display proper number of passages read
    $("#book-body-text").empty();
    if (!(title in cookiesJSON.book)) { // new book, haven't clicked before
        console.log("adding title");
        cookiesJSON.book[title] = 0;
    }
    if (cookiesJSON.book[title] === 0) {
        $("#book-body-text").append("<p>You have yet to start reading this book.</p>");
        return;
    }
    for (let i = 0; i < cookiesJSON.book[title]; ++i) {
        $("#book-body-text").append("<p>" + bookJSON[title].passages[i] + "</p>");
    }
    // the read button
    if (cookiesJSON.book[title] < bookJSON[title].passages.length) {
        $("#read-book").show();
    } else {
        $("#read-book").hide();
    }
});
