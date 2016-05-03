-----------------------------------------------------
JavaScript JSON

Date: 2016-05-03

-----------------------------------------------------

JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

1. What is JSON?

	* JSON stands for **J**ava**S**cript **O**bject **N**otation.

	* JSON is lightweight data interchange format.

	* JSON is language independent (The JSON syntax is derived from JS object
	notation syntax, but the JSON format is text only. Code for reading and
	generating JSON data can be weitten in any programming language.)

	* JSON is "self-describing" and easy to understand.

2. JSON Example

	This JSON syntax defines an employees object: an array of 3 employee records
	(objects):

	JSON Example:

	```
	{
	"employees": [
		{"firstName":"John", "lastName":"Doe"},
		{"firstName":"Anna", "lastName":"Smith"},
		{"firstName":"Peter", "lastName":"Jones"}
	]
	}
	```

3. The JSON Format Evaluates to JavaScript Objects.

	The JSON format is syntactically identical to the code for creating JS objects.

	Because of this similarity, a JS program can easily convert JSON data into
	native JS objects.

4. JSON syntax rules.

	* Data is in name/value pairs

	* Data is separated by commas

	* Curly braces hold objects.

	* Square brackets hold arrays

5. JSON data - A name an a value

	JSON data is written as name/value pairs, just like JS object properties.

	A name/value pair consists of a field name (in double quotes), followed by 
	a value.

	Note: JSON names **require** double quotes. JS names don't.

6. JSON objects

	JSON objects are written inside curly braces.

	Just like in JS, objcts can contain multiple name/value pairs.

	```
	{"firstName":"John", "lastName":"Doe"}
	```

7. JSON arrays

	Json arrays are written inside square brackets.

	Just like in JS, an array can contain objects:

	```
	"employees":[
		{"firstName":"John", "lastName":"Doe"}, 
		{"firstName":"Anna", "lastName":"Smith"}, 
		{"firstName":"Peter", "lastName":"Jones"}
	]
	```

	In this example above, the object "employees" is an array, it contains three
	objects.

	Each object is a record of a person (with first name and last name).

8. Converting JSON Text to a JS object

	A common use of JSON is to read data from a web server, and display the data
	in web page.

	For simplicity, this can be demonstrated using a string as input.

	First, create a JS string containing JSON syntax:

	```
	var text = '{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
	```

	Then, use JS built-in function JSON.parse() to convert the string into a JS
	object:

	```
	var obj = JSON.parse(text);
	```

	Finally, use the new JS object in your page:

	Example:

	```
	<p id="demo"></p>

	<script>
		document.getElementById("demo").innerHTML =
		obj.employees[1].firstName + " " + obj.employees[1].lastName;
	</script>
	```

