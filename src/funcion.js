function findThreeEqualNumbers(arrays, numbers) {
    // Iterate over the array of arrays
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
  
  
  

  function hasThreeNumbersInCommon(arrays, numeros) {
    // Iterate over the arrays of numbers and check if any of them have
    // three numbers in common with the array of numeros.
    return arrays.some((array) => {
      // Use the filter() method to create a new array that only contains
      // numbers that are also in the array of numeros.
      const matchingNumbers = array.filter((number) => numeros.includes(number));
  
      // If there are three or more matching numbers, return true.
      return matchingNumbers.length >= 3;
    });
  }

  const combinationsWin = [
    [0,1,2],[0,3,6],[0,4,8],[3,4,5],[1,4,7],[2,5,8],[2,4,6],[6,7,8]
  ];

  console.log(hasThreeNumbersInCommon(combinationsWin,[0,4,8]));
  console.log(hasThreeNumbersInCommon(combinationsWin,[4,8,0]));
  console.log(hasThreeNumbersInCommon(combinationsWin,[4,8,0,5]));
  console.log(hasThreeNumbersInCommon(combinationsWin,[4,8,5]));
  console.log(hasThreeNumbersInCommon(combinationsWin,[0,2,5,1]));
  console.log(hasThreeNumbersInCommon(combinationsWin,[0,2,5,1]));
