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
        97: 'A',
        101: 'AE',
        61: 'B',
        13: 'C', // Can also be K
        89: 'D',
        67: 'E',
        109: 'EA',
        41: 'EO',
        2: 'F',
        17: 'G',
        23: 'H',
        31: 'I',
        107: 'IA', // Can also be IO
        37: 'J',
        73: 'L',
        71: 'M',
        29: 'N',
        79: 'NG', // Can also be ING
        7: 'O',
        83: 'OE',
        43: 'P',
        11: 'R',
        53: 'S', // Can also be Z
        59: 'T',
        5: 'TH',
        3: 'U',
        19: 'W',
        47: 'X',
        103: 'Y',

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
