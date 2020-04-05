'use strict';


function format() {
    // initially hides all tabs
    $(".tabcontent").hide();

    // Table format
    $('table').addClass("w3-table-all w3-hoverable w3-xlarge");

    // Kanji Format
    $('.kanji').addClass("w3-center");
}

function openLesson(lesson) {
    // Hide all of the other lessons
    $(".tabcontent").hide();

    // Show the current tab, and add an "active" class to the link that opened the tab
    $("#" + lesson).css("display", "block");
    $("#" + lesson).show();
}