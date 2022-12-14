/*------------Challenge Description--------------

Create a function that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers.


*/

//-----------------My solution-------------------

function even_or_odd(number) {
    return number % 2 == 0 ? "Even" : "Odd"
  }

//--------other noteworthy solutions----------

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even" // 0 is a truthy value
  }


