//,,GUARDS,,  the code
//often inverses condition
if (!email.inludes('@')) {
    showError('no email')
    return; //fails fast
}
//run main code

//Extracting control structures into functions
//prefering positive writing
function isEmpty(array) {
    return array.length === 0
}
function showError(message = "error", item = {}){
    console.log(message)
    console.log(item)
}
if (isEmpty(data))
{
    showError('No data')
    return
}
//ERRORS => create + handle
function displayerrrors(){
    if (isEmpty(data))
    {
        const err = new Error("No data")
        err.code = 404
        err.item = data
        throw err
        // return {code: 1, message: 'No data'}
    }
}
try {
    displayerrrors()
} catch (err) {
    showError(err.message )
}

//FACTORY FUNC - creates object with various methods
function getTransactionProcessors(transaction){
    let process = {
        payment: null,
        refund: null
    }
    //points to functions
    if(transaction){
        processors.payment = validatePayment
        processors.refund = createRefund
    }
    return process
}
const processor = getTransactionProcessors(transaction)
processor.payment(transaction) || processor.refund(transaction)