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
            onyomi: "",
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
        console.log('onyomi' in d.reading);
        // console.log(lsn, d);

        // let [onyomi, kunyomi] = checkReading(d.reading);
        let html = "<tr>"

        html +=
            '<td class="kanji">' + d.kanji + '</td>' +
            '<td class="reading">';

        // if ("onyomi" in d.reading) {
        //     html += '<br>▶ ' + d.onyomi;
        // }
        // if ("kunyomi" in d.reading) {
        //     html += '<br>▷ ' + d.kunyomi;
        // }

        html +=
            '<p>' + d.def + '</p></td>' +
            '<td class="examples">';

        // for (let i = 0; i < d.examples.length; i++) {
        //     $('.examples').append('<br>' + d.examples[i]);
        // }
        html += '</td>'
        $('#l11 table').append(html)

    }

}