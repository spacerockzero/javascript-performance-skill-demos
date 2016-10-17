# WHEN TO MICRO-OPTIMIZE


## The Sad Tragedy of Micro-Optimization Theater, by Jeff Atwood
https://blog.codinghorror.com/the-sad-tragedy-of-micro-optimization-theater/

- `string += concat` inside a loop ends up having awful quadratic n^2 performance
- When doing this, the string you concat to cannot be garbage collected properly
- Ends up allocating more and more memory each iteration it runs through
- For render speed, there are several ways to string concat, but they all end up having comparable performance timings
- He says if general performance is comparable, we should focus on memory usage and readability, instead of diving into micro-optimizations further.


## Micro-Optimization in JavaScript
(2009) http://blog.client9.com/2009/02/07/micro-optimization-in-javascript.html

- `i++`, `++i` are speed-equivalent
- `i++`, `++i` are 1.5x faster than `i = i + 1` or `i += 1`
- not using `var` in loop counters makes loops 4x slower
- "Don't obsess over this too much. It's more interesting than useful."


## Wikipedia: Program Optimization: When to Optimize
https://en.wikipedia.org/wiki/Program_optimization#When_to_optimize

- > "Optimization can reduce readability"
- > "We should forget about small efficiencies, say 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%" -
- > "'Premature optimization' is a phrase used to describe a situation where a programmer lets performance considerations affect the design of a piece of code. This can result in a design that is not as clean as it could have been or code that is incorrect, because the code is complicated by the optimization and the programmer is distracted by optimizing."
- We should instead: `design > code it > profile/benchmark` to see which parts should be optimized
- Keep performance goals in mind when first designing software, but balance the goals of design and optimization
