'use strict';

for (let lesson = 1; lesson <= 12; lesson++) {
    // Creates class tag for each lsn
    let lsn = eval("l" + lesson)

    // for each kanji in a lesson,
    for (let i = 0; i < lsn.length; i++) {
        // data of A KANJI
        let d = lsn[i]

        let html = "<tr>"
        // eg id = '11-0' << first kanji in lsn 11
        let id = lesson + '-' + i
        html += '<td class="kanji" id="' + id + '">' + d.kanji + '</td>';

        // READING
        html += '<td class="reading">';
        if ("onyomi" in d.reading) {
            html += '<br><span class="onyo">▶ ' + d.reading.onyomi+'</span>';
        }
        if ("kunyomi" in d.reading) {
            html += '<br><span class="kunyo">▷ '+ d.reading.kunyomi+'</span>';
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
            if (cols_needed == 1) {
                // pass
            } else if (col % 3 == 0) {
                html += '<div class="' + class_tag + '">';
            }
            col++;


            let example = d.examples[i];

            // example = example.replace(d.kanji, '<span id="' + id + '">' + d.kanji + '</span>');
            // example = example.replace(d.onyomi, '<span id="' + id + '">' + d.reading.onyomi + '</span>');         

            example = example.replace(d.kanji, '<span class="'+id+'">' + d.kanji + '</span>');        
            console.log(example);

            // ADD EG TO COL
            html += '<br>' + example;

            // CHECK IF COL IS FULL
            if (col % 3 == 0) {
                html += '</div>';
            }
        }
        html += '</td>'
        $('#l11 table').append(html)

    }

}
