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
v = function() { };
typeof v; // function
v = [1, 2, 3];
typeof v; // object

/**
 * the NaN value is a special value that is returned when:
 * Number conversion fails
 * Math operation where the result is not a real number
 */
var string = "Hello World";
var something = string / 2;

something; // NaN
Number.isNaN(something); // true
Number.isNaN(string); // false

/**
 * Truthy and Falsy Values, meaning what values return false / true
 * Falsy Values = [ "", undefined, null, NaN, false, 0, -0 ]
 * Truthy Values = ["foo", 23 , {a:1}, true, function (){}]
 *
 * Truthy Values = !Falsy
 */


/**
 * == allows coercion (types different)
 * === disallows coercion (types same)
 * */
