
  /*------------challenge Description--------------

    ATM machines allow 4 or 6 digit PIN codes and PIN 
    codes cannot contain anything but exactly 4 digits or 
    exactly 6 digits.

    If the function is passed a valid PIN string, return true, 
    else return false.

    Examples (Input --> Output)
    "1234"   -->  true
    "12345"  -->  false
    "a234"   -->  false

*/

//-----------------My solution-------------------

function validatePIN (pin) {
    let isnum = /^\d+$/.test(pin);
    return isnum && (pin.length == 6 || pin.length == 4)
  }


//--------other noteworthy solutions----------

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }