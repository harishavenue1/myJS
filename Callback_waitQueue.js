console.log("start")

setTimeout(function cb() {
    console.log("Callback")     // even if 0, it executes always via queue
}, 0);

console.log("end")