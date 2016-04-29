-----------------------------------------------------
JavaScript Introduction

Date: 2016-04-29

-----------------------------------------------------

String, Number, Boolean, Array, Object.

1. JS Data Types.

	JS variables can hold many data types: numbers, string, arrays, objects
	and more.

	```
	var length=16; //Number
	var lastName="Johnson"; //String
	var cars = ["saab","volvo","BMW"]; //Array
	var x = {firstName: "John", lastName: "Doe"}; //object
	```

2. The concept of Data Types.

	In programming, data types is an important concept.
	
	To be able to operate on variables, it is important to know something about 
	type.

	Without data types, a computer cannot safely solve this:

	```
	var x = 16 + "volvo";
	```

	Since it does not make any sense for the above, JS will treat the example 
	above as:

	```
	var x = "16" + "volve";
	```

	JS evaluate expressions from left to right. Different sequences can produce 
	different results:

	Example 1: 

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p id="demo"></p>

			<script>
				var x = 16 + 4 + "Volvo";
				document.getElementById("demo").innerHTML = x;
			</script>

		</body>
	</html>
	```

	Example 2:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p id="demo"></p>

			<script>
				var x = "Volvo" + 16 + 4;
				document.getElementById("demo").innerHTML = x;
			</script>

		</body>
	</html>
	```

	In the first example, JS treats 16 and 4 as numbers, until it reaches 'volvo'.
	
	In the second example, since the first operation is a string, all operands are 
	treated as strings.

3. JS has Dynamic Types.

	JS has dynamic types means that the same variables can be used as different 
	types.

	Example:

	```
	var x;               // Now x is undefined
	var x = 5;           // Now x is a Number
	var x = "John";      // Now x is a String
	```

4. JS Strings

	JS string (text string) is a series of characters like "John Doe".

	Strings are written with quotes. You can use single or double quotes.

	You can use quotes inside a string, as long as they don't match the quotes 
	surrounding the string:

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p id="demo"></p>

			<script>
				var carName1 = "Volvo XC60";
				var carName2 = 'Volvo XC60';
				var answer1 = "It's alright";
				var answer2 = "He is called 'Johnny'";
				var answer3 = 'He is called "Johnny"';

				document.getElementById("demo").innerHTML =
				carName1 + "<br>" + 
				carName2 + "<br>" + 
				answer1 + "<br>" + 
				answer2 + "<br>" + 
				answer3;
			</script>

		</body>
	</html>
	```

5. JS Numbers.

	JS has only one type of numbers.

	Numbers can be written with, or without decimals:

	Extra large or extra small numbers can be written with scientific (exponential)
	notations:

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p id="demo"></p>

			<script>
				var x1 = 34.00;
				var x2 = 34;
				var y = 123e5;
				var z = 123e-5;

				document.getElementById("demo").innerHTML = x1 + "<br>" + x2 + "<br>" 
				+ y + "<br>" + z
			</script>

		</body>
	</html>
	```

6. JS booleans.

	Booleans can only have two values: true or false.

	Booleans are often used in conditional testing.

7. JS arrays.

	JS arrays are written with **square brackets**.

	Array items are separated by commas.

	The following code declares (creates) an array called cars, containing 3 items.

	Example

	```
	var cars = ["Saab", "Volvo", "BMW"];
	```

	Array indexes are **zero-based**, which means the first item is [0], second is
	[1], and so on.

8. JS Objects.

	JS objects are written with **curly braces**.

	Object properties are written as **name: value** pairs, separated by **commas**.

	The object (person) in the example above has 4 properties.

	Example

	```
	var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
	```

9. The type of operator

	You can use the JS **typeof** operator to find the type of a JS variable.

	Example

	```
	typeof "John"                // Returns string 
	typeof 3.14                  // Returns number
	typeof false                 // Returns boolean
	typeof [1,2,3,4]             // Returns object
	typeof {name:'John', age:34} // Returns object
	```

	Note: in JS, an array is a **special type of object**. Therefore, typeof[1,2,3,4]
	returns object.

10. Undefined.

	In JS, a variable without a value, has the value **undefined**, the typeof
	is also **undefined**.

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p>Variables can be emptied by setting the value to <b>undefined</b>.</p>

			<p id="demo"></p>

			<script>
				var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
				var person = undefined;
				document.getElementById("demo").innerHTML =
				person + "<br>" + typeof person;
			</script>

		</body>
	</html> 
	```

	Note: `<b... />` above?

11. Empty values

	An empty value has nothing to do with undefined.

	An empty string variable has both a value and a type.

	```
	var car = "";                // The value is "", the typeof is string
	```

12. Null

	In JS, the data type of null is an **object**.

13. Difference between undefined and null

	```
	typeof undefined             // undefined
	typeof null                  // object
	null === undefined           // false
	null == undefined            // true
	```
