// Considering the following function:
//
//   const average = xs => reduce(add, 0, xs) / xs.length;
//
// Use the helper function `average` to refactor `averageDollarValue` as a composition.

// averageDollarValue :: [Car] -> Int
const averageDollarValue = compose(average, map(prop('dollar_value')));
