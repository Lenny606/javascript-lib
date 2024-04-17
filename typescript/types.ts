//objects-------------------------------------
let object: { id: number, title: string, items: string[] } =
    {
        id: 1,
        title: "hello",
        items: [
            'one',
            'two'
        ]
    }

let item = {
    title: "new",
    cost: 10
}
let item2 = {
    title: "new",
    price: 10
}
/**
 * array of objects , each object has to have prop title, cost (optional)
 * readonly on title
 * */
let itemsObject: { readonly title: string, cost?: number }[] = [
    item, item2
]
itemsObject[0].title = 5  //readonly

//functions------------------------------------
function calc(num1: number, num2: number): number {

    return num1 + num2
}

//alias - custom type, use for DRY, can be exported
export type User = { id: number, name: string, isActive: boolean, printUser():void }
//adds property
export type UserAdmin = User & {clearence: number }
//grouping custom types with Union
type Users = UserAdmin | User;
const newUser: User = {
    id: 1,
    name: "jon",
    isActive: false,
    printUser() {
    }
}

function updateUser(user: User): User {
    //logic
    return
}

type StringOrNumber = string | number;
let value: StringOrNumber;

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

interface Method{
    print : (value: number) => number
}

interface ComplexMethod extends Method {
    complexFunction( value: number) : number;
}

let objectMethod: Method = {
    print: (value) => value
}
objectMethod.print(5)