/*------------challenge Description--------------
 Complete the solution so that it reverses the string passed into it.

 'world'  =>  'dlrow'
 'word'   =>  'drow'

*/

//-----------------My solution-------------------
function solution(str){
    //split the letters into single array elements
    let splitString = str.split("")
    //reverse this array and combine the letters 
    return splitString.reverse().join("");
  }

  //--------other noteworthy solutions----------

const solution1 = str => str.split('').reverse().join('');

//---

const solution2 = s => [...s].reverse().join('')
