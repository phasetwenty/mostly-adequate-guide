// Use `add` and `map` to make a function that increments a value inside a functor.

// incrF :: Functor f => f Int -> f Int
const incrF = map(add(1));
// Cheated, had to look at solution to understand API
