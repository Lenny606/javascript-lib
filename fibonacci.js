/**
 * Generuje Fibonacciho posloupnost
 * Fibonacciho posloupnost je řada čísel, kde každé číslo je součtem dvou předchozích čísel.
 * Posloupnost začíná čísly 0 a 1, a pokračuje: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 * Každé další číslo získáme sečtením dvou předchozích čísel v řadě.
 * @param {number} numTerms - Počet prvků posloupnosti, které mají být vygenerovány
 * @returns {number[]} Pole obsahující prvních numTerms čísel Fibonacciho posloupnosti
 */
export function fibonacci(numTerms) {
    // Inicializace pole s prvními dvěma čísly Fibonacciho posloupnosti
    // Posloupnost vždy začíná čísly 0 a 1, která tvoří základ pro generování dalších čísel
    let fib = [0, 1];
    // Generování dalších čísel posloupnosti
    // Každé nové číslo je vytvořeno sečtením dvou předchozích čísel v posloupnosti
    // Například: třetí číslo (index 2) je součtem čísel na indexech 1 a 0 (1 + 0 = 1)
    for (let i = 2; i < numTerms; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Funkce přijímá jeden parametr numTerms, který představuje počet prvků posloupnosti, které chcete vygenerovat.
// Funkce vrací pole obsahující prvních numTerms čísel Fibonacciho posloupnosti.

