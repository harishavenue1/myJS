// What is Callback Function
// ex1
function x(y) {

}

x(function y() {                // y is callback function

})

// ex2
setTimeout(function () {        // async timeout
    console.log("timed out!")
}, 5000);

// Blocking the main thread
// Deep about Event Listeners
// Closures with Event Listeners
// Scope with Event listeners

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("button clicked ", ++count); // closure
    });
}
attachEventListeners();

// GC and remove Event listeners
// why need to remove event listeners
// eventlisteners are heavy, as it takes more memory, due to closures, even if call stack is empty
// so need logic to remove eventListeners with GC