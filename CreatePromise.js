const cart = ['a', 'b', 'c']

// const promise = createOrder(cart)
// console.log(promise)

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId
    })
    .catch(function (err) { // called when reject
        console.log(err.message)
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {

        if (!validateCart(cart)) {
            const err = new Error("Invalid Cart")
            reject(err)
        }
        const orderId = '123123'
        if (orderId) {
            setTimeout(function () {
                resolve(orderId)
            }, 5000)
        }
    })
    return pr
}

function validateCart(cart) {
    return true
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful")
    })
}