'use strict';
var l11 = [{
        kanji: "手",
        reading: {
            onyomi: "しゅ",
            kunyomi: "て"
        },
        def: "(hand)",
        examples: ["手紙 (てがみ) letter", "手 (て) hand", "上手な (じょうずな) good at", "歌手 (かしゅ) singer", "手話 (しゅわ) sign language"]
    },
    {
        kanji: "紙",
        reading: {
            onyomi: "し",
            kunyomi: "がみ　かみ"
        },
        def: "(paper)",
        examples: ["手紙 (てがみ) letter", "紙 (かみ) paper", "表紙 (ひょうし) front cover", " (わし) Japanese paper"]
    },
    {
        kanji: "",
        reading: {
            // onyomi: "",
            kunyomi: ""
        },
        def: "()",
        examples: [" () ", " () "]
    }
]

function checkReading(d) {
    let onyomi = "";
    let kunyomi = "";
    if ("onyomi" in d.reading) {
        onyomi += '<br>▶ ' + d.onyomi;
    }
    if ("kunyomi" in d.reading) {
        kunyomi += '<br>▷ ' + d.kunyomi;
    }

    return [onyomi, kunyomi];
}



for (let lesson = 1; lesson <= 12; lesson++) {
    let lsn = eval("l" + lesson)
    for (let i = 0; i < lsn.length; i++) {

        let d = lsn[i] // d=data

        let html = "<tr>"
        html += '<td class="kanji">' + d.kanji + '</td>';

        // READING
        html += '<td class="reading">';
        if ("onyomi" in d.reading) {
            html += '<br>▶ ' + d.reading.onyomi;
        }
        if ("kunyomi" in d.reading) {
            html += '<br>▷ ' + d.reading.kunyomi;
        }
        html += '<p>' + d.def + '</p></td>';

        // EXAMPLES
        /* 
        KNOW LENGTH OF EXS
        how many cols you need = Math.floor(length of example/3); >> cols_needed
        find out size of cols = 12/cols_needed; >> col_size
        class = "w3-col s"+ "col_size"
        */
        html += '<td class="examples">';
        let cols_needed = Math.ceil(d.examples.length / 3);
        let col_size = 12 / cols_needed;
        let class_tag = "w3-col s" + col_size;

        let col = 0;
        for (let i = 0; i < d.examples.length; i++) {

            // ADD DIV COLS
            if (col % 3 == 0) {
                console.log("Hello")
                html += '<div class="' + class_tag + '">';
            }
            col++;
            // ADD EX TO COL
            html += '<br>' + d.examples[i];
            // CHECK AGAIN IF COL IS FULL
            if (col % 3 == 0) {
                html += '</div>';
            }
        }
        html += '</td>'
        $('#l11 table').append(html)

    }

}