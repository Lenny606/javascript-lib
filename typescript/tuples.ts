
//tuple
let person: readonly [string, number?] = ["jon", 25]

person.push(54) //read only

function getPerson(): [string, number] {
    return ['tem', 15]
}

//enum-----------