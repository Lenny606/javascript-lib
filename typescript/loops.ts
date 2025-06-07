//LOOPING OBJECT


// Define a type O with two properties: name (string) and age (number)
type O = {
    name: string,
    age: number
}

// Mapped type New<T>:
// For each property P in T, if the type of T[P] is string, keep it as string; otherwise, keep the original type
type New<T> = {
    [P in keyof T]: T[P] extends string ? string : T[P]
}

// Create an object o of type New<O>
// Note: age is expected to be number, but here it's assigned a string, which will cause a type error
const o: New<O> = {
    age: "5544", // Type error: 'age' should be a number, not a string
    name: "sdv"
}