// 1
function x() {
    var a = 7;
    function y() {
        console.log("#1 " + a);
    }
    y();
}
x();                        // 7

// 2
function x() {
    var a = 7;
    function y() {
        console.log("#2 " + a);
    }
    return y;
}

var z = x();
z();                        // 7

// 3
function x() {
    var a = 7;
    return function y() {
        console.log("#3 " + a);
    }
}

var z = x();
z();                        // 7


// 4
function x() {
    var a = 7;
    function y() {
        console.log("#4 " + a);
    }
    a = 100;
    return y;
}

var z = x();
z();                        // 100

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log("#5 " + a + ", " + b);      // 7, 900
        }
        y();
    }
    x();
}
z();