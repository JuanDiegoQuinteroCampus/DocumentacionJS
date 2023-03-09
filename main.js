//Documentacion operadores//

//Operadores Logicos//
//se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. Sin embargo, los operadores && y || en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano//


//AND Lógico (&&)//
//Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.//
var a3 = false && true;     // f && t devuelve false
var a4 = false && (3 == 4); // f && f devuelve false
var a5 = 'Cat' && 'Dog';    // t && t devuelve Dog

//OR lógico (||)//
//Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.//
var o3 =  true || false;    // t || f devuelve true
var o4 = false || (3 == 4); // f || f devuelve false
var o5 = 'Cat' || 'Dog';    // t || t devuelve Cat

//NOT lógico (!)//
//Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.//
var n1 = !true;  // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !'Cat'; // !t devuelve false

//Exclusión lógica ^ (Xor).//
//Establece una exclusión lógica de dos expresiones, es decir, que el resultado se dará evaluando una expresión u otra, y dará True si solamente una de ellas es True, lo que implica la exclusión de la otra.//
El hierro es un metal = True.
El hierro es duro = True.
El hierro es un metal ^ El hierro es duro = False.