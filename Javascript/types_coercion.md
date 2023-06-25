# Types & Coercion

### Types Example

```javascript
var v;
typeof v; // undefined

v = "2";
typeof v; // string

v = 2;
typeof v; // number

v = true;
typeof v; // boolean

v = {};
typeof v; // object

v = Symbol();
typeof v; // symbol

v = null;
typeof v; // undefined

v = function () {};
typeof v; // function

v = [1, 2, 3];
typeof v; // object
```

### The NaN Value

> is a special value that is returned when:
>
> - Number conversion fails
> - Algorithmic Operation when the result is not a real number

```javascript
var string = "Hello World";
var something = string / 2;

something; // NaN
Number.isNaN(something); // true
Number.isNaN(string); // false
```

### Abstract Operations

Abstract Operations, known as _toNumber()_, _toString()_

Under the Hood they call:

_toPrimitive(hint = number || string)_
depending on the hint it calls toString() first and valueOf() second or the other way around.

#### Example Abstract Operation _toString(object)_ :

```Javascript

toString(object); //calls "toPrimitve() under the hood
toPrimitive(hint = string) // hint=string from toString()
toString() //this calls toString if available on the object if not it calls *valueOf()*

//Examples
[] : ""
[1,2,3] : "1,2,3"
[null,undefined] : ","
[,,,,] : ",,,,"
{} : "[object Object]"
{a:2} : "[object Object]"
```

#### Example Abstract Operation _toNumber(object)_ :

```Javascript

toNumber(stringj); //calls "toPrimitve() under the hood
toPrimitive(hint = number) // hint=number from toNumber()
valueOf() //this calls valueOf if available if not it calls *toString()*

//Examples
[""] : 0
["0"] : 0
["-0"] : -0
[null] : 0
[undefined] : 0
[1,2,3] : NaN
[[[[]]]] : 0
```

#### Example Abstract Operation _toNumber(string)_ :

```Javascript

toNumber(stringj); //calls "toPrimitve() under the hood
toPrimitive(hint = number) // hint=number from toNumber()
valueOf() //this calls valueOf if available if not it calls *toString()*

//Examples
"" : 0
"0" : 0
"-0" : -0
"  009" : 9
"3.141" : 3.141
"0." : 0
".0" : 0
"." : NaN
"0xaf" : 175
```

Corner Cases with boolean with toNumber(boolean)

```javascript
false : 0
true : 1
null : 0
undefined : NaN

```

### Truthy and Falsy Values

Boolean Values unlike other primitive types are only **_lookup_** tables.
| Truthy | Falsy |
|--------------- | --------------- |
| "foo" | "" |
| 23 | null |
| {a:1} | NaN |
| true | false |
| function(){} | 0 / -0 |

> If its not on the falsy list it is truthy

### Coercion Corner Cases

```javascript
Number(""); // 0 OOPS!
Number("  \t\n"); //  0 OOPS!
Number(null); // 0 OOPS!
Number(undefined); // NaN
Number([]); // 0 OOPS!
Number([1, 2, 3]); // NaN
Number([null]); // 0 OOPS!
Number([undefined]); // 0 OOPS!
Number({}); // NaN

String(-0); // "0" OOPS!
String(null); // "null"
String(undefined); // "undefined"
String([null]); // "" OOPS!
String([undefined]); // "" OOPS!

2 > 1; // true
3 > 2 > 1; //false OOPS!
3 > 2 > 1;
true > 1;
1 > 1; // false
```

### Types Coercion with the ==/=== Operator

> the == operator allows coercion
> the === disallows coercion, if the types not the same we return
