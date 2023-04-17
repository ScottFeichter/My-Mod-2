//OVERVIEW of BIG-O
/*
Big-O notation is used to describe the efficiency of algorithms with respect to
the size of the input.

Big picture ideas:
1. The Big-O of a function should be defined in terms of the size of the input 
    or number of steps required for the function to complete operation
2. Smaller Big-O function is more desireable than a larger one. 
  -We want to use a minimal amount of time and space.
3. Big-O describes the worst case scenario for our code
4. Big-O function should be simplified to show only its most dominant
    mathematical term.
    Key Terms:
    n: the size of the input
    T(f): an unsimplified mathematical function
    O(n): the Big-O simplified mathematical function

    - Simplify Products: if the function is a product of many terms, we drop the
      terms that don't depend on the size of the input.

    Unsimplified	        Big-O Simplified
    T( 5 * n^2 )	            O( n^2 )
    T( 100000 * n )	        O( n )
    T( n / 12 )	            O( n )
    T( 42 * n * log(n) )	O( n * log(n) )
    T( 12 )	                O( 1 )

    - Simplify Sums: if the function is a sum of many terms, we keep the term
      with the largest growth rate and drop the other terms.

    Unsimplified	        Big-O Simplified
    T( n^3 + n^2 + n )	    O( n^3 )
    T( log(n) + 2^n )	    O( 2^n )
    T( n + log(n) )	        O( n )
    T( n! + 10^n )	        O( n! )

*/

//COMPLEXITY CLASSES:
/*
There are 7 major complexity classes:

Big-O	                    Complexity Class Name
O(1)	                    constant
O(log(n))	                logarithmic
O(n)	                    linear
O(n * log(n))	            loglinear, linearithmic, quasilinear
O(nc) - O(n2), O(n3), etc.	polynomial
O(cn) - O(2n), O(3n), etc.	exponential
O(n!)	                    factorial

*/

//O(1) - Constant: the algorithm takes roughly the same amount of steps for any size
//input.
//Example:
function constant(n) {
        //  c    c
    return n * 2 + 1;
} // T(c + c);
  // T(1 + 1);
  // T(2);
  // O(1);

function constant2(n) {
      //       c     (c * 100)(c * 100)
    for (let i = 1; i <= 100; i++){
      // (c * 100)
        console.log(i)
    }
} // T(c + (c * 100) + (c * 100) + (c * 100))
  // T(1 + (1 * 100) + (1 * 100) + (1 * 100))
  // T(1 + 100 + 100 + 100);
  // T(100);
  // T(1);
  // O(1)
//O(1) => no matter how big n gets, the algorithm doesn't change in complexity


//O(log(n)) - Logarithmic: display a sense of continually halving the size of
//the input. Every time you double the size of the input, it only requires one
//additional step. 
    //-larger input sizes will only increase the number of steps required by 
    //a small amount
//Ex:
// O(log(n))
function logarithmic1(n) {
  if (n <= 1) return;
  logarithmic1(n / 2);
}

// O(log(n))
function logarithmic2(n) {
  let i = n;
  while (i > 1) {
    i /= 2;
  }
}

/*
O(n) - Linear: linear algorithms access each item in the input
    -increasing the size of the input increases the number of steps
    -deals with NON-nested loops
Examples:

*/
// O(n)
function linear1(n) {
  //        c      (c * n) (c * n)
  for (let i = 1; i <= n; i++) {
    // (c * n)
    console.log(i);
  }
} // T(c + (c * n) + (c * n) + (c * n));
  // T(1 + (1 * n) + (1 * n) + (1 * n));
  // T(1 + n + n + n);
  // T(n + n + n)
  // T(3n)
  // O(n);

// O(n), where n is the length of the array
function linear2(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
}

// O(n)
function linear3(n) {
  if (n === 1) return;
  linear3(n - 1);
}

/*
O(n * log(n)) - Loglinear: combination of linear and logarithmic behavior 
    - use both recursion and iteration -recursive calls will halve 
    the input each time, but iterations are also performed

    Example: 
*/

// O(n * log(n))
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  loglinear(n / 2);
  loglinear(n / 2);
}

/*
O(n^c) - Polynomial: complexity grows significantly based on the size of the
input 
    -O(n^2) is better than O(n^3), but they are still both polynomial 
    -nested loops are a good indicator of polynomial complexity

Examples:
*/
// O(n^2)
function quadratic(n) {
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        //do some stuff
    }
  }
}

// O(n^3)
function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
          //do some stuff
      }
    }
  }
}

/*
O(c^n) - Exponential: complexity grows exponentially based on the input size
    - common indicator is recursive code with a constant number of recursive
    calls in each stack frame.
    - these algorithms are considered VERY slow

Examples:
*/
// O(2^n)
function exponential2n(n) {
  if (n === 1) return;
  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

// O(3^n)
function exponential3n(n) {
  if (n === 0) return;
  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}

/*
O(n!) - Factorial: code has a variable number of recursive calls based on input
per stack frame
-Factorial is worse than exponential for this reason, since at least exponential 
algorithms have a constant amount of recursive calls.
-This is one of the worse case scenarios for code, as it is incredibly slow and 
can take up a lot of space.

Example: This will freeze your computer if you put too big of a value for n!!
*/

// O(n!)
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}

