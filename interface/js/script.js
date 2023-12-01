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

// mirror functions ////////////////////////////////////////////////////////////

$(".mirror-obj").click(function() {
    // toggle screen
    toggleScreen("mirror");
});

// libray functions ////////////////////////////////////////////////////////////

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
        $("#book-body-text").append(`<p>You have yet to start reading this book.</p>`);
        return;
    }
    for (let i = 0; i < cookiesJSON.book[title]; ++i) {
        $("#book-body-text").append(`<p>${bookJSON[title].passages[i]}`);
    }
    // the read button
    if (cookiesJSON.book[title] < bookJSON[title].passages.length) {
        $("#read-book").show();
    } else {
        $("#read-book").hide();
    }
});

// recording functions /////////////////////////////////////////////////////////

$(".recording-icon").click(function() {
    console.log("recording clicked");
    // selection coloring
    toggleItemSelection($(this));
    // clear old data
    $("#recording-length-text").empty();
    $("#recording-data-text").empty()
    // input data into the right fields
    let recordingNum = $(this).data("recordingnum");
    let recordingData = cookiesJSON.recording[recordingNum.toString()];
    // the data is stored in cookies.json key = recording
    $("#recording-title-text").html(`recording no.${recordingNum}`);
    if (recordingData.len) {
        $("#recording-length-text").append(`<p>recording length: ${recordingData.len} hours`);
        for (let i = 0; i < recordingData.data.length; ++i) {
            $("#recording-data-text").append(`<p>${recordingData.data[i]}`);
        }
    } else {
        $("#recording-data-text").append(`<p>this recording is currently empty`);
    }
});

// notepad functions ///////////////////////////////////////////////////////////

// data binding?
