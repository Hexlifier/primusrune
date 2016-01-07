function main() {
    var $runetable = $("#runetable");
    var $runetext = $("#runetext");
    var $decodedtext = $("#decodedtext");

    $('.reference').click(function(e,a) {
        ele = $(e.currentTarget);
        addRune(ele)

    });

};

function addRune(ele) {
    var $runetext = $("#runetext");
    $runeimg = $('<img>').attr('src',ele.find('img').attr('src'));
    $rune = $('<div>').addClass('rune').attr('id',ele.attr('id')).append($runeimg);
    $runetext.append($rune);
    recalcText();

}

function recalcText() {
    mapping = {
        2: 'F',
        3: 'U',
        5: 'TH',
        7: 'O',
        11: 'R',
        13: 'C',
        17: 'G',
        19: 'W',
        23: 'H',
        29: 'N',
        31: 'I',
        37: 'J',
        41: 'EO',
        43: 'P',
        47: 'X',
        53: 'S',
        59: 'T',
        61: 'B',
        67: 'E',
        71: 'M',
        73: 'L',
        79: 'NG',
        83: 'OE',
        89: 'D',
        97: 'A',
        101: 'AE',
        103: 'Y',
        107: 'IA',
        109: 'EA',
        'dot': ' ',
        'dots': '\n'
    }

    var $runes = $("#runetext > .rune");
    var out = "";
    for(var i = 0; i < $runes.length; i += 1) {
        var id = $runes[i].id
        if ( mapping[id] === undefined) {
            console.log("Couldn't find id " + id);
        } else {
            out += mapping[id];
        }
    }
    $("#decodedtext").text(out);

}


$(main);
