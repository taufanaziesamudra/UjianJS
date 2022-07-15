function kotak() {
    let str = ""
    // let c = 5
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            str += '*';
        }

        str += '\n'
    }

    console.log(str)
}

function segititga() {
    var s = '';
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j <= i; j++) {
            s += '*';
        }
        //s += '*';
        s += '\n';
    }
    console.log(s);

}

function kotakPola() {
    let str = ""
    let c = 10

    for (let i = 1; i <= c; i++) {
        for (let j = 1; j <= i; j++) {
            str += '*'
            str += ''
        }
        str += '\n'
    }
    for (let i = 1; i <= c - 1; i++) {
        for (let j = c - 1; j >= i; j--) {
            str += '*'
            str += ''
        }
        str += '\n'
    }
    console.log(str)
}

