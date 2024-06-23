const githubApi = "https://api.github.com/users/harishavenue1"

const user = fetch(githubApi);

console.log(user);

// only be resolved post fullfiled
// states are - pending, fullfiled and rejected

user.then(function (data) {
    console.log(data);
})

// promise chaining
// way1
createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (summaryLink) {
        return printOptions(summaryLink)
    });

// way2
createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((summaryLink) => printOptions(summaryLink));