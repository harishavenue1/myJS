function a() {
    var x = 0;
    return function b() {
        console.log(x);
    }
}

var y = a();
// after a is executed, usually variable x is garbage collected
// but since func b is closured with var x, x is still on memory
// and y is referenced the return call of func b
// so y has reference and it can be used anywhere anytime, so x is still on memory and not GC
// overtime, this memory overusage can due to such closure calls, can lead to
// outOfMemory or memory leaks

y();