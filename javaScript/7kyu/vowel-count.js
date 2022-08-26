/*------------Challenge Description--------------

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/

//-----------------My solution-------------------

function getCount(str) {
    let sum = 0
    str.split("").forEach(n => {
       if (n== "a" || n == "i" || n == "e" || n == "o" || n == "u") {
         sum++
       }
    })
    return sum
}

//--------other noteworthy solutions----------

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }



