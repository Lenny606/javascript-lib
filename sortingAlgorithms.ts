/**
 * Performs insertion sort on an array of numbers
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function insertionSort(arr: number[]): number[] {
    // Create a copy of the array to avoid mutating the original
    const sortedArr = [...arr];
    
    // Start from the second element (index 1)
    for (let i = 1; i < sortedArr.length; i++) {
        // Store the current element to be inserted
        const currentElement = sortedArr[i];
        
        // j points to the last position of the sorted portion
        let j = i - 1;
        
        // Move elements that are greater than currentElement
        // to one position ahead of their current position
        while (j >= 0 && sortedArr[j] > currentElement) {
            sortedArr[j + 1] = sortedArr[j];
            j--;
        }
        
        // Insert the current element at its correct position
        sortedArr[j + 1] = currentElement;
    }
    
    return sortedArr;
}

/**
 * Performs bubble sort on an array of numbers
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function bubbleSort(arr: number[]): number[] {
    // Create a copy of the array to avoid mutating the original
    const sortedArr = [...arr];
    
    // Flag to optimize the algorithm
    let swapped: boolean;
    
    // Outer loop for each pass
    for (let i = 0; i < sortedArr.length - 1; i++) {
        swapped = false;
        
        // Inner loop to compare adjacent elements
        for (let j = 0; j < sortedArr.length - i - 1; j++) {
            // Compare adjacent elements
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap elements if they are in wrong order
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
                swapped = true;
            }
        }
        
        // If no swapping occurred in this pass, array is sorted
        if (!swapped) {
            break;
        }
    }
    
    return sortedArr;
}

/**
 * Performs selection sort on an array of numbers, worse then bubble or insertion
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function selectionSort(arr: number[]): number[] {
    // Create a copy of the array to avoid mutating the original
    const sortedArr = [...arr];
    
    // Outer loop for each position in the array
    for (let i = 0; i < sortedArr.length - 1; i++) {
        // Find the minimum element in the unsorted portion
        let minIndex = i;
        
        // Inner loop to find the minimum element
        for (let j = i + 1; j < sortedArr.length; j++) {
            if (sortedArr[j] < sortedArr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found minimum element with the first element of unsorted portion
        if (minIndex !== i) {
            [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
        }
    }
    
    return sortedArr;
}

/**
 * Partitions the array around a pivot element  - Quick sort algorithm\>
 * @param arr - The array to partition
 * @param low - Starting index
 * @param high - Ending index
 * @returns The final position of the pivot element
 */
export function partition(arr: number[], low: number, high: number): number {
    // Choose the rightmost element as pivot
    const pivot = arr[high];
    
    // Index of smaller element
    let i = low - 1;
    
    // Compare each element with pivot
    for (let j = low; j < high; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++;
            // Swap elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    
    return i + 1;
}

/**
 * Performs quick sort on an array of numbers
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n) due to recursion stack
 * 
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function quickSort(arr: number[]): number[] {
    // Create a copy of the array to avoid mutating the original
    const sortedArr = [...arr];
    
    /**
     * Internal recursive quick sort function
     * @param low - Starting index
     * @param high - Ending index
     */
    function quickSortHelper(low: number, high: number): void {
        if (low < high) {
            // Find partition index
            const pi = partition(sortedArr, low, high);
            
            // Recursively sort elements before and after partition
            quickSortHelper(low, pi - 1);
            quickSortHelper(pi + 1, high);
        }
    }
    
    // Start the recursive quick sort
    quickSortHelper(0, sortedArr.length - 1);
    
    return sortedArr;
}

/**
 * Merges two sorted subarrays into a single sorted array
 * @param arr - The array containing the subarrays
 * @param left - Starting index of first subarray
 * @param mid - Ending index of first subarray (mid + 1 is start of second)
 * @param right - Ending index of second subarray
 */
function merge(arr: number[], left: number, mid: number, right: number): void {
    // Calculate sizes of two subarrays to be merged
    const n1 = mid - left + 1;
    const n2 = right - mid;
    
    // Create temporary arrays
    const leftArr = new Array(n1);
    const rightArr = new Array(n2);
    
    // Copy data to temporary arrays
    for (let i = 0; i < n1; i++) {
        leftArr[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }
    
    // Merge the temporary arrays back into arr[left..right]
    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = left; // Initial index of merged array
    
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements of leftArr[] if any
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    // Copy remaining elements of rightArr[] if any
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

/**
 * Performs merge sort on an array of numbers
 * Time Complexity: O(n log n) in all cases
 * Space Complexity: O(n) for temporary arrays
 * 
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function mergeSort(arr: number[]): number[] {
    // Create a copy of the array to avoid mutating the original
    const sortedArr = [...arr];
    
    /**
     * Internal recursive merge sort function
     * @param left - Starting index
     * @param right - Ending index
     */
    function mergeSortHelper(left: number, right: number): void {
        if (left < right) {
            // Find the middle point
            const mid = Math.floor((left + right) / 2);
            
            // Sort first and second halves
            mergeSortHelper(left, mid);
            mergeSortHelper(mid + 1, right);
            
            // Merge the sorted halves
            merge(sortedArr, left, mid, right);
        }
    }
    
    // Start the recursive merge sort
    mergeSortHelper(0, sortedArr.length - 1);
    
    return sortedArr;
}
