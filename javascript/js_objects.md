-----------------------------------------------------
JavaScript Objects

Date: 2016-04-29

-----------------------------------------------------

1. Real life objects, properties, and methods

	In real lift, a car is an **object**.

	A car has **properties** like weight and color, and **methods** like start 
	and stops:

	All cars have the same **properties**, but the property values differ from 
	car to car.

	All cars have the same **methods**, but the methods are performed at different
	times.

	```
	object: car

	properties: car.name = Fiat; car.model = 500; car.weight = 850kg; 
	car.color = white.

	Methods: car.start(); car.drive(); car.brake(); car.stop().
	```

2. JS objects

	You have already learned that JS variables are containers for data values.

	This code assigns a **simple value** to a **variable** named car.

	```
	var car = "Fiat";
	```

	objects are variables too. But objects can contain many values.

	This code assigns **many values** (Fiat, 500, white) to a **variable**
	named car:

	```
	var car = {type="Fiat", model="500", color="white"};
	```

	The values are written as **name:value** pairs (name and value separated by
	a colon).

	Note: JS objects are containers for **name values**.

3. Object Properties.

	The name:value pairs (in JS objects) are called **properties**.

	```
	var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
	```

	```
	**Property**: **Property value**
	firstName: John
	lastName: Doe
	age: 50
	eyeColor: blue
	```

4. Object Methods

	Methods are **actions** that can be performed on objects.

	Methods are stored in properties as **function definitions**.

	```
	**Property**: **Property Value**
	firstName: John
	lastName: Doe
	age: 50
	eyeColor: blue
	fullName: function() {return this.firstName + " " + this.lastName;}
	```

	Note: JS objects are containers for named values (called properties) and 
	methods.

5. Object definition

	Spaces and line breaks are not important. An object definition can span 
	multiple lines.

6. Accessing the object properties.

	You can access the object properties in two ways:

	```
	objectName.propertyName
	```

	OR

	```
	objectName["propertyName"]
	```

7. Accessing Object Methods

	You can access an object method with the following syntax:

	```
	objectName.methodName()
	```

	If you access the methodName, without (), it will return the **function definition**.

8. Do not declare Strings, Numbers and Booleans ar Objects!

	When a JS variable is declared with the keyword "new", the variable
	is created as an object:

	BUT! Avoid String, Number, and Boolean objects, they compilcate your code 
	and slow down execution speed.

