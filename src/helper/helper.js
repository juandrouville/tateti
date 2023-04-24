const combinationsWin = [
    [0,1,2],[0,3,6],[0,4,8],[3,4,5],[1,4,7],[2,5,8],[2,4,6],[6,7,8]
  ];

function findThreeEqualNumbers(numbers) {
// Iterate over the array of arrays
const arrays = combinationsWin;
    for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];
        let counter = 0; // Counter to keep track of equal numbers in each array
        // Iterate over the numbers in the current array
        for (let j = 0; j < array.length; j++) {
            const number = array[j];
            // Check if the current number is present in the array of numbers
            if (numbers.includes(number)) {
                counter++;
                // If three equal numbers are found, return true
                if (counter === 3) {
                    return true;
                };
            };
        };
    };
    // If three equal numbers are not found, return false
    return false;
};

export default findThreeEqualNumbers;