-----------------------------------------------------
JavaScript Statement

Date: 2016-05-03

-----------------------------------------------------

In HTML, JS statement are "instructions" to be "executed" by the web browser.

1. JS statement.

	This statement tells the browser to write "Hello, Dolly." inside an HTML
	element with id="demo".

	Example

	```
	document.getElementById("demo").innerHTML = "Hello Dolly";
	```

2. JS programs

	Most JS programs contain many JS statements.

	The statements are executed, one by one, in the same order as they are 
	written.

	Note: JS programs (and JS statements are often called JS code).

3. Semicolons

	Semicolons separate JS statements.

	Add a semicolon at the end of each executable statement.

	When separated by semicolons, multiple statements on one line are allowed.

	Note: On the web, you might see examples without simicolons.

	Ending statements with semicolon is not required, but highly recommended.

4. JS white space

	JS ignores multiple spaces. You can add white space to your script to make 
	it more readable.

5. JS Line length and Line breaks

	For best readability, programmers often like to avoid code lines longer than
	80 characters.

	Is a JS statement does not fit on one line, the best place to break it,	is
	after an operator:

6. JS code blocks

	JS statements can be grouped together in code blocks, inside curly brackets
	`{...}`.

	The purpose of code blocks is to define statements to be executed together.

	One place you will find statements grouped together in blocks, are in JS
	functions.

7. JS keywords

	JS statements often start with a **keyword** to identify the JS action to be
	performed.

	Here is a list of some of the keywors you will learn about:

	```
	**Keyword**: **Description**
	*break*: Terminates a switch or a loop
	
	*continue*: Jumps out of a loop and starts at the top

	*debugger*: Stops the execution of JavaScript, and calls (if available) the 
	debugging function

	*do ... while*: Executes a block of statements, and repeats the block, while 
	a condition is true 
	
	*for*: Marks a block of statements to be executed, as long as a condition is 
	true

	*function*: Declares a function

	*if ... else*: Marks a block of statements to be executed, depending on a 
	condition

	*return*: Exits a function

	*switch*: Marks a block of statements to be executed, depending on different 
	cases

	*try ... catch*: Implements error handling to a block of statements

	*var*: Declares a variable
	```


