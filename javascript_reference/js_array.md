-----------------------------------------------------
JavaScript Global Properties and Functions

Date: 2016-05-02

-----------------------------------------------------

1. Array Object

	The array object is used to store multiple valuyes in a single variable:

	Array indexes are zero-based: the first element in the array is 0, the second
	is 1, and so on.

2. Array properties

	> **Property**: **Description**
	> constructor: Returns the function that created the Array object's prototype
	> length: Sets or returns the number of elements in an array
	> prototype: Allows you to add properties and methods to an Array object

	example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<p>Click the button to create an array, call the new ucase() method, and display the result.</p>

			<button onclick="myFunction()">Try it</button>

			<p id="demo"></p>

			<script>
				Array.prototype.myUcase = function() {
					var i;
					for (i = 0; i < this.length; i++) {
						this[i] = this[i].toUpperCase();
					}
				};

				function myFunction() {
					var fruits = ["Banana", "Orange", "Apple", "Mango"];
					fruits.myUcase();
					document.getElementById("demo").innerHTML = fruits;
				}
			</script>

		</body>
	</html>
	```

3. Array Methods

	> **Methods**: **Description**
	> concat(): Joins two or more arrays, and returns a copy of the joined arrays
	> copyWithin(): Copies array elements within the array, to and from specified positions
	> every(): Checks if every element in an array pass a test
	> fill(): Fill the elements in an array with a static value
	> filter(): Creates a new array with every element in an array that pass a test
	> find(): Returns the value of the first element in an array that pass a test
	> findIndex(): Returns the index of the first element in an array that pass a test
	> forEach(): Calls a function for each array element
	> indexOf(): Search the array for an element and returns its position
	> isArray(): Checks whether an object is an array
	> join(): Joins all elements of an array into a string
	> lastIndexOf(): Search the array for an element, starting at the end, and returns its position
	> map(): Creates a new array with the result of calling a function for each array element
	> pop(): Removes the last element of an array, and returns that element
	> push(): Adds new elements to the end of an array, and returns the new length
	> reduce(): Reduce the values of an array to a single value (going left-to-right)
	> reduceRight(): Reduce the values of an array to a single value (going right-to-left)
	> reverse(): Reverses the order of the elements in an array
	> shift(): Removes the first element of an array, and returns that element
	> slice(): Selects a part of an array, and returns the new array
	> some(): Checks if any of the elements in an array pass a test
	> sort(): Sorts the elements of an array
	> splice(): Adds/Removes elements from an array
	> toString(): Converts an array to a string, and returns the result
	> unshift(): Adds new elements to the beginning of an array, and returns the new length
	> valueOf(): Returns the primitive value of an array

