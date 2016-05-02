-----------------------------------------------------
JavaScript Arrays

Date: 2016-05-02

-----------------------------------------------------

Javascript arrays are used to store multipl values in a single variable.

1. Displaying arrays

	In this tutorial we will use a script a display arrays inside a `<p>` 
	element with id=`demo`:

	Example:

	```
	<p id="demo"></p>

		<script>
		var cars = ["Saab", "Volvo", "BMW"];
		document.getElementById("demo").innerHTML = cars;
		</script>
	```

	The first line (in the script) creates an array named cars.

	The second line "finds" the element with id=`demo`, and "displays" the array
	in the "innerHTML" of it.

	Note: When creating an array, never put a comma after the last element,
	the effect is inconsistent across browsers.

2. What is array?

	An array is a special variable, which can hold more than one value at a time.

	If you have a list of items (a list of car names, for example). storing the
	cars in single variables could look like this:

	```
	var car1 = "Saab";
	var car2 = "Volvo";
	var car3 = "BMW";
	```

	However, what if you want to loop over it and find the specific one? and what
	if you had not 3 cars, but 300?

	The solution is **Array**!

	An array can hold many values under a single name, and you can access the 
	values by referring to an index number.

3. Creating an array

	Syntax: 

	```
	var *array-name* = [item1, item2, item3, ...];
	```

4. Using the JS keyword new

	Syntax: 

	```
	var *array-name* = new Array(item1, item2, item3, ...);
	```

	Note: the two examples do exactly the same, there is no need to use 
	new Array(). For simplicity, readability and execution speed, use the first
	one (the array literal method).

5. Access the element of an Array

	You can refer to an array element by referring to the **index number**.

	This statement accesses the value of the first element in cars:

	```
	var name = cars[0];
	```

	This statement modifies the first element in cars:

	```
	cars[0] = 'modified_car';
	```

	Note: [0] is the first element in an array, [1] is the second. Array indexes
	start with 0.

6. You can have different objects in one array

	JS variables can be objects. Arrays are special kind of objects.

	Because of this, you can have variables of different types in the same array.

	You can have objects in an Array. You can have functions in an Array. You can
	have arrays in an Array.

	```
	myArray[0] = Date.now;
	myArray[1] = myFunction;
	myArray[2] = myCars;
	```

7. Arrays are Objects

	Arrays are a special type of objects, the *typeof* operator in JS returns 
	"object" for arrays.

	But, JS arrays are best described by as arrays.

	Arrays use **numbers** to access its "elements". person[0] returns John.

	```
	var person = ["John", "Doe", 46];
	```
	
	Objects use **names** to access its "members". person.firstName returns John.

	```
	var person = {firstName:"John", lastName:"Doe", age:46};
	```

8. Array properties and methods.

	The **real strength** of JS arrays are the built-in array methods and 
	properties.

9. The length property

	The **length** property of an array returns the length of an array (the
	number of array elements).

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.length;                       // the length of fruits is 4
	```

	Note: The length property is always one more than the highest array index.

10. Adding Array Elements

	THe easiest way to add a new element to an array is using the **push** method.

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Lemon");                // adds a new element (Lemon) to fruits
	```

	Another way:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits[fruits.length] = "Lemon";     // adds a new element (Lemon) to fruits
	```

	Adding elements with high indexes can create undefined "holes" in an array:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits[10] = "Lemon";                // adds a new element (Lemon) to fruits
	```

11. Looping Array Element

	The best way to loop through an array, is using a "for" loop.

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p>The best way to loop through an array is using a standard for loop:</p>

			<p id="demo"></p>

			<script>
				var fruits, text, fLen, i;

				fruits = ["Banana", "Orange", "Apple", "Mango"];
				fLen = fruits.length;
				text = "<ul>";
				for (i = 0; i < fLen; i++) {
					text += "<li>" + fruits[i] + "</li>";
				}
				text += "</ul>";
				document.getElementById("demo").innerHTML = text;
			</script>

		</body>
	</html>
	```

12. Associative Arrays

	Many programming languages support arrays with named indexes.

	Arrays with named indexes are called associative arrays (or hashes).

	JS does **NOT** support arrays with named indexes.

	In JS, **arrays** always use numbered indexes.

	Warning: If you use a named index, JS will redefine the arrays to a standard
	object. After that, _All array methods and properties will produce incorrect results._

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p>
			If you use a named index, when accessing an array, JavaScript will 
			redefined the array to a standard object, and all array methods and 
			properties will produce undefined or incorrect results.
			</p>

			<p id="demo"></p>

			<script>
				var person = [];
				person["firstName"] = "John";
				person["lastName"] = "Doe";
				person["age"] = 46; 
				document.getElementById("demo").innerHTML =
				person[0] + " " + person.length;
			</script>

		</body>
	</html>
	```

13. The difference between Arrays and Objects

	In JS, **arrays** use **numbered indexes**

	In JS, **objects** use **named indexes**

	Note: Arrays are a special kind of objects, with numbered indexes.

14. When to use arrays and when to use object?

	* JS does not support associative arrays.

	* You should use **objects** when you want the element names to be **string(text)**

	* You should use **arrays** when you want the element names to be **numbers**

15. How to recognize an Array?

	A common question is: How do I know if a variable is an array?

	The problem is that the JS operator *typeof* returns "object":

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];

	typeof fruits;             // returns object
	```

	* SOLUTION 1:

	To solve this problem ECMAScript 5 defines a new method **Array.isArray()**:

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

		<p>The new ECMASCRIPT 5 method isArray returns true when used on an array.</p>

		<p id="demo"></p>

		<script>
			var fruits = ["Banana", "Orange", "Apple", "Mango"];
			document.getElementById("demo").innerHTML = Array.isArray(fruits);
		</script>

		</body>
	</html>
	```

	The problem with this solution is that ECMAScript 5 is *not supported* in
	older browsers.

	* SOLUTION 2:

	to solve this problem you can create your own isArray() function:

	The function above always returns true if the argument is an array.

	Or more precisely: it returns true if the object prototype contains the 
	word "Array".

	* SOLUTION 3:

	The **instanceof** operator returns true if an object is created by a given 
	constructor.
