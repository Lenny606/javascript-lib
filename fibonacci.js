export function fibonacci(numTerms) {
    let fib = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}


//The function takes one parameter numTerms, which represents the number of terms in the sequence that you want to generate.
// The function returns an array containing the first numTerms numbers in the Fibonacci sequence.