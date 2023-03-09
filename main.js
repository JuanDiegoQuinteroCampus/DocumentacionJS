/* Number.prototype.toFixed()

El método toFixed() formatea un número usando notación de punto fijo.
 */
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  // Expected output: "123.46"
  
  console.log(financial(0.004));
  // Expected output: "0.00"
  
  console.log(financial('1.23e+5'));
  // Expected output: "123000.00"

  var numObj = 12345.6789;

/* ------------------Mas entendible-------------------- */

numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2);  // Returns '123000000000000000000.00'