function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Pick the current element
        let current = arr[i];
        let j = i - 1;
        // Find the correct position for the current element by comparing with the elements in the sorted part of the array
        while (j >= 0 && arr[j] > current) {
            // Shift the elements of the sorted part to the right to make room for the current element
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert the current element into the correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
const array = [5, 6, 77, 88, 99];
console.log('Sorted array:', insertionSort(arr));function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Pick the current element
        let current = arr[i];
        let j = i - 1;
        // Find the correct position for the current element by comparing with the elements in the sorted part of the array
        while (j >= 0 && arr[j] > current) {
            // Shift the elements of the sorted part to the right to make room for the current element
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert the current element into the correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
const arr = [5, 6, 77, 88, 99];
console.log('Sorted array:', insertionSort(arr));