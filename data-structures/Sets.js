const data = new Set(["1", "2", "3"])
const data2 = new Set(["1", "2", "4"])

const intersection = data.intersection(data2)
const union = data.union(data2)
const difference = data.difference(data2)
console.log(difference)
