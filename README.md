# JSEx - JavaScript Extensions

##String extensions
Additional functions used everyday attached to String type, so you can access directly on string variable. e.g. "senad@example.com".isEmail()

###String.contains(string)

String.contains is a function to check if string contains another string
```JavaScript
"abcdfgh".contains('cdf'); //returns true
"abcdfgh".contains('cda'). //returns false
```
###String.toArray(separator1, separator2)

Converts string to array, or array of arrays

```Javascript
//single separator
"1,2,3,4,5,6".toArray(','); //passing "," as separator
//returns Array ["1", "2", "3", "4", "5", "6"]
```

```Javascript
//multiple separators
"1,2,3|4,5,6|7,8,9".toArray('|',','); //passing "|" as first separator, and "," as second
//returns Array of Arrays
//[["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]
```
###String.isEmpty()
Used to check if string is empty, I use it to avoid " if(variable.length > 0) "
```Javascript
"".isEmpty(); //returns true
"senad".isEmpty(); //returns false
```
###String.isEmail()

Returns "true" if string is an email, and "false" if it's not.

```Javascript
//example of valid
"senad@example.com".isEmail(); //returns true

//example of invalid
"senad@example".isEmail(); //returns false
```
###String.deserialize()

Used to deserialize string to Object, string needs to be valid JSON
```Javascript
 var obj = '{"firstName": "John", "lastName": "Doe", "city": "N/A", "country": "JS"}'.deserialize();
//returns object deserialized from string so you can access
//it's properties like obj.firstName
console.log(obj.firstName);
//writes "John" to console
```

##Object extensions
Serialize object by calling prototyped method on its' instance.
###Object.serialize()
```Javascript
//create object
var b = { firstName: "John", lastName: "Doe", country: "JavaScript" };
//serialize object 
var serialized = b.serialize();
//write to console
console.log(serialized);
//result
//{"firstName":"John","lastName":"Doe","country":"JavaScript"}
```
###Object.getProperties()
Returns list of properties (ignoring functions) and theirs values[{key: "memberName", value:"memberValue"}] 
```Javascript
//create object
var b = { firstName: "John", lastName: "Doe", country: "JavaScript", init: function(){ console.log('I\'m function!'); }};
var properties = b.getProperties();
console.log(properties); //writes object to console
//[{"key":"firstName","value":"John"},{"key":"lastName","value":"Doe"},{"key":"country","value":"JavaScript"}]
```