/* STRINGS */

/* String.prototype.charCodeAt()

El método codePointAt() devuelve un entero no negativo que equivale al valor Unicode code point del carácter. */
'ABC'.codePointAt(1);          // 66
'\uD800\uDC00'.codePointAt(0); // 65536

'XYZ'.codePointAt(42); // undefined
