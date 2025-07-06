
// Example of generator function
// Generator functions are special functions that can be paused and resumed,
// yielding multiple values over time
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Using the generator
const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

