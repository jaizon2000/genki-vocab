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

// HOVERING FUNCTION
function hovering(selector, attribute) {
    $(selector).hover(function () {
        // GET ID OF CURRENT HOVERED KANJI
        $(this).addClass("hover");
        let id = '.' + $(this).attr(attribute);
        $(">.kanji," + id).addClass("hover");


    }, function () {
        $(this).removeClass("hover");
        let id = '.' + $(this).attr(attribute);
        $(">.kanji," + id).removeClass("hover");
    });
};

$(document).ready(function () {
    // TO HOVER - KANJI
    $('.kanji').hover(function () {
        console.log(this.id);
        hovering(".kanji", "id");

    })
 
    // TO HOVER - HIRAGANA
    $('.kunyo').hover(function () {
        console.log(this.class);
        hovering(".kunyo", "class");

    })

    $('.onyo').hover(function () {
        console.log(this.class);
        hovering(".onyo", "class");

    })

});

