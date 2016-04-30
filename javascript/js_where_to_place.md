-----------------------------------------------------
Where to Put/Use the JavaScripts

Date: 2016-04-18

-----------------------------------------------------

1. JS can be placed in the `<body>` and `<head>` sections of HTML page. In HTML, 
	JS **code** must be inserted between `<script>` and `</script>` tags.

  Example:
  
  ```
  <script>
  document.getElementById("demo").innerHTML = "My first JavaScript";
  </script>
  ```

2. JS Functions and Events

  * A JS **function** is a block of JavaScript code. that can be executed when 
	"asked" for.
  * For example, a function can be executed when an **event** occurs, like when 
	the user clicks a button.

3. You can place any number of scripts in an HTML document, in `<body>` or 
	`<head>`, or both.

  Note: ALWAYS keeping all code in one place is a good habit.
  
4. JS in `<head>`

  When put in the `<head>` section, it is invoked (called) when a button is 
	clicked.
  
  Example:
  
  ```
  <!DOCTYPE html>
  <html>
    <head>
      <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
      </script>
    </head>

    <body>
      <h1>Javascript in Head Example</h1>
      <p id="demo">Initiate Paragraph</p>
      <button type="button" onclick="myFunction()">Press it!</button>
    </body>
  </html>
  ```

5. JS in `<body>`

	When JS function is placed in `<body>` section of an HTML page. The function 
	is invoked (called) when a button is clicked.

	Exmaple:

	```
	<!DOCTYPE html>
	<html>
		<body>
			<h1>Javascript in Body Example</h1>
			<h2>author:CF</h2>
			<p id="demo">A Paragraph</p>
			<button type="button" onclick="myFunction()">Press it!</button>

				<script>
					function myFunction(){
						document.getElementById("demo").innerHTML = "Paragraph Changed";
					}
				</script>

		</body>
	</html>
	```

	Note: It is a good idea to place scripts at the bottom of the `<body>` element,
	This can improve page load, because script compilation can slow down the 
	display.

6. External JS

	JS can also be put into external files.

	(myscript.js)

	```
	function myFunction(){
		document.getElementById("demo").innerHTML = "Paragraph Changed";
	}
	```

	External scripts are practical when the same code is used in many different web pages.
	
	JS have the file extension .js
	
	To use an external script, put the name of the script file in the **src** (source) attribute of a `<script>` tag.
	
	Example:
	
	```
	<!DOCTYPE html>
	<html>
	<body>
	
	<script src="myscript.js"></script>
	
	</body>
	</html>
	```
	
	You can place an external script reference in <head> or <body> as you like.
	
	The script will behave as if it was located exactly where the <script> tag is located.
	
	Note: External script can not contain <script> tags.
	
7. External JS advantages.

	* It separates HTML code
	
	* It makes HTML and JS easier to read and maintain
	
	* Cached JS files can speed up page loads.
	
