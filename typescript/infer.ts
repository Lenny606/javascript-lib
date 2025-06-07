// Generic type that extracts the element type of an array, or returns never if not an array
type Generic2<T> = T extends Array<infer A> ? (A extends string ? number : never) : never

const x = ["kjsd", "kjsd", "kjsd", 5545]

// Using Generic2 to infer the type of elements in x
// Since x contains both strings and a number, A is inferred as string | number
// Therefore, A extends string is false (because of the number), so Generic2<typeof x> resolves to never
const z: Generic2<typeof x> = "555" // Error: Type 'string' is not assignable to type 'never'
const zz: Generic2<typeof x> = 555  // Error: Type 'number' is not assignable to type 'never'

// CUSTOM RETURN TYPE
// CustomReturnType extracts the return type R from a function type T
type CustomReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

// CustomAwaited extracts the resolved type P from a Promise, or returns T if not a Promise
type CustomAwaited<T> = T extends Promise<infer P> ? P : T

// R is the resolved type of the return type of fetch (i.e., the type that fetch resolves to)
type R = CustomAwaited<CustomReturnType<typeof fetch>>

//KEY:VALUE SPLIT
type KeyValueSplit<T> = T extends `${infer K}:${infer V}` ?
    {
        key: K,
        value: V
    } : never

type S = KeyValueSplit<"xxx:yyy">   