// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.
// Hint, the `flip` function may come in handy.

// fastestCar :: [Car] -> String
const fastestCar = compose(
  flip(concat, ' is the fastest'),
  prop('name'),
  last,
  sortBy(prop('horsepower'))
);

// console.log(prop('name', last(sortBy(prop('horsepower'), cars))));

