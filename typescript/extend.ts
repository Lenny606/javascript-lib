interface A {
    name: string;
}
interface C {
    email: string;
}
//B is superset of A and C
interface B extends A, C{
    age: number;
}

const b: B = {
    age: 0,
    name: "",
    email: ""
}

//AS TYPES
type AA = {
    name: string;
}
type CC = {
    email: string;
}
type BB = AA & CC & {
    age: number;
}
const bb: BB = {
    age: 0,
    name: "",
    email: ""
}

type Generic <T> ={ 
    prop: T extends string ? string : (T extends number ? number : undefined);
}
//CUSTOM is superset of string
type Custom = {
    age: number;
} & string
 
const a: Generic<Custom> 
const n: Generic<Custom> = {
    prop: "88",

}
