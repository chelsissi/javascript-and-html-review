-----------------------------------------------------
JavaScript Array Methods

Date: 2016-05-02

-----------------------------------------------------

The strenth of JS array lies in the array methods.

1. Converting Arrays to Strings

	The JS method **toString()** converts an array to a string of (comma separated)
	array values.

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.toString();
	```

	The **join()** method also joins all array elements into a string.

	It behaves just like **toString()**, but in addition you can specify the 
	separator.

	```
	var fruits = ["Banana", "Orange","Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.join(" _ ");
	```

2. Popping and pushing

	When you work with arrays, it is easy to remove elements and add new elements.

	This is what popping and pushing is:

	Popping items **out** of an array, or pushing items **into** an array.

3. Popping

	The pop() method removes the last element from an array:

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.pop();              // Removes the last element ("Mango") from fruits
	```

	The pop() method returns the value that was "popped out";

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var x = fruits.pop();      // the value of x is "Mango"
	```

4. Pushing

	The **push()** method adds a new element to an array (at the end).

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
	```

	The push() method returns the new array length:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var x = fruits.push("Kiwi");   //  the value of x is 5
	```

5. Shifting elements

	Shifting is equivalent to popping, working on the first element instead of
	the last.

	The **shift()** method removes the first array element and "shift" all other
	elements to a lower index.

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.shift();            // Removes the first element "Banana" from fruits
	```

	The **unshift()** methods adds a new element to an array (at the beginning),
	and "unshifts" older elements:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
	```

	The shift() method returns the string that was "shifted out"

	The unshit() method returns the new array length.

6. Changing elements

	Array elements are accessed using their index number.

	Note: Array **index** start with 0, [0] is the first array element, [1] is 
	the second, [2] is the third.

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
	```

	The length property provides an easy way to append a new element to an array.

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruit
	```

7. Deleting elements

	Since JS arrays are objects, elements can be deleted by using the JS operator
	**delete**.

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	delete fruits[0];           // Changes the first element in fruits to undefined
	```

	Note: Using **delete** on array elements leaves undefined holes in the array,
	use pop() or shift() instead.

8. Splicing an Array

	The splice() method can be used to add new items to an array.

	Example:

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2, 0, "Lemon", "Kiwi");
	```

	The first parameter (2) defines the position **where** new elements should 
	be **added**(spliced in)

	The second parameter(0) defines **how many** elements should be **removed**

	The rest of the parameters ("Lemon","Kiwi") define the new elements to be
	**added**.

	Using splice to remove elements.

	With clever parameter setting, you can use splice() to remove elements 
	without leaving "holes" in the array.

	Example

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(0, 1);        // Removes the first element of fruits
	```

	The first parameter (0) defines the position where elements should be 
	**added** (spliced in).

	The second parameter (1) defines **how many** elements should be **removed**.

	The rest of the parameters are omitted. No new elements will be added.

9. Sorting an Array

	The **sort()** method sorts an array alphabetically.

10. Reversing an Array

	The **reverse()** method reverses the elements in an array.

	You can use it to sort an array in descending order:

11. Numeric sort

	By default, the sout() function sorts values as **strings**.

	This works well for strings ("Apples" comes before "banana")

	However, if numbers are sorted as strings, "25" is bigger than "100", because
	"2" is bigger than "1".

	Because of this, the sort() method will produce incorrect result when sorting
	numbers.

	You can fix this by providing a **compare function**:

	Example:

	```
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return a-b});
	```

12. The compare function
	
	The purpose of the compare function is to define an alternative sort order.

	The compare function should return a negative, zero, or positive value, 
	depending on the arguments:

	```
	function(a,b){return a-b}
	```

	When the sort function compares two values, it send the values to the compare
	function, and sorts the values according to the returned (nagative, zero,
	positive) value.

	Example:

	When comparing 40 and 100, the sort() method calls the compare function(40,100).

	Then function calculates 40-100, and returns -60 (a negative value).

	The sort function will sort 40 as a value lower than 100.

13. Find the Highest (or Lowest) value.

	How to find the highest value in the array?

	Example:

	```
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return b-a});
	// now points[0] contains the highest value
	```

14. Joining Arrays

	The **concat()** method creates a new array be concatenating two arrays:

	The concat() method can take any number of array arguments:

	```
	var arr1 = ["Cecilie", "Lone"];
	var arr2 = ["Emil", "Tobias","Linus"];
	var arr3 = ["Robin", "Morgan"];
	var myChildren = arr1.concat(arr2, arr3);
	// Concatenates arr1 with arr2 and arr3
	```

15. Slicing an Array

	The **slice()** method slices out a pieve of an array into a new array.

	This example slices out a part of an array starting from array element 1
	("Orange"):

	Example:

	```
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.slice(1);
	```

	Note: Any indexes start with 0. [0] is the first array element.

	The slice() can take two arguments like slice(1,3)

	The method then selects elements from the start element, and up to (but not
	including) the end argument.

16. The valueOf method

	The **valueOf()** method is the default behavior for an array. It converts
	an array to a primitive value.

	JS will automatically convert an array to a string when a primitive value is 
	expected.

	Because of this, **All thse examples will produce the same result**.

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits;
	```

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.valueOf();
	```

	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.toString();
	```

	Note: All JS objects have the valueOf() and toString() methods.

