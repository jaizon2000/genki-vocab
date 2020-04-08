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

$(document).ready(function () {
    $(".kanji").hover(function () {
        // GET ID OF CURRENT HOVERED KANJI
        let id = '#' + $(this).attr("id");
        $(">.kanji," + id).addClass("hover");

    }, function () {
        let id = '#' + $(this).attr("id");
        $(">.kanji," + id).removeClass("hover");
    });
});


function hovering(selector){
    $(selector).hover(function () {
        // GET ID OF CURRENT HOVERED KANJI
        let id = '#' + $(this).attr("id");
        $(">"+selector+"," + id).addClass("hover");

    }, function () {
        let id = '#' + $(this).attr("id");
        $(">"+selector+"," + id).removeClass("hover");
    });
};


// var str = '昔々 (むかしむかし) once upon a time';
// var kanji_hiragana = /昔|むかし/g; 
// var n = str.match(kanji_hiragana);

// console.log(n);
// if ($("td:contain(手)")) {
//     $(this).css("color", "yellow");