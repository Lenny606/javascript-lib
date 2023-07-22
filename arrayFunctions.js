const sortNumbersFn = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

//use as argument
//numbersArr.sort(sortNumbersFn)


//built in functions
const numbersArr = [5, 6, 8, 6, 1]
numbersArr.sort().reverse() //dosnt work, numbers are converted to Unicode!!!

//Sorting based on the content of the string
const names = ["Mike Smith", "Dr. Johnson", "John Doe", "Dr. Williams"];

names.sort((a, b) => {
    if (a.startsWith("Dr.") && !b.startsWith("Dr.")) {
        return -1;
    } else if (!a.startsWith("Dr.") && b.startsWith("Dr.")) {
        return 1;
    } else {
        return a.localeCompare(b); // sort alphabetically
    }
});
