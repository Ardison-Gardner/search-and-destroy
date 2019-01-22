'use strict';

// Complete this algo

const binarySearch = (array, target) => {
	let first = 0;
	let last = array.length;
	let pointer = Math.floor((first + last) / 2);
	while (array[pointer] !== target && first < last) {
		target < array[pointer] ? last = pointer - 1 : first = pointer + 1;
		pointer = Math.floor((first + last) / 2);
	}
	return (array[pointer] === target);
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));


/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
