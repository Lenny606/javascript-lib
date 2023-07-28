const timeout = (func, timer) => setTimeout(() => {
    func();

}, timer);

const log = () => console.log("timeout")

// timeout(log, 1000)

function func() {
    //code 
    console.log("timeout")
}
const test = setInterval(func, 5000)

clearTimeout(test) //function expression as argument


const interval = setInterval(func, 5000) //calls repeatedly
clearInterval(interval) //stops, needs to be function expression for id