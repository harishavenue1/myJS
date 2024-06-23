const p = new Promise((resolve, reject) => {
    resolve("Promise resolved")
})

async function handlePromise() {
    try {
        const val = await p
        console.log(val) // new way to handle promise
    } catch (error) {
        console.log(error.message)
    }
}
handlePromise()

// older way to handle promise
function getData() {
    p.then((res) => console.log(res))
}
getData()