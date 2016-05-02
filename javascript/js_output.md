-----------------------------------------------------
JavaScript Output

Date: 2016-04-30

-----------------------------------------------------

**NOTE**: JS does not have any built-in or display functions.

1. JS Display possibilities.

    JS can *"display"* data in different ways:
    
    * Writing in an alert box, using **window.alart()**.
    
    * Writing into the HTML output using **document.write()**.
    
    * Writing into an HTML element, using **innerHTML**.
    
    * Writing into the browser console, using **console.log()**

2. Using window.alert()

    You can use an alert box to display data:
    
    Example:
    
    ```
    <!DOCTYPE html>
	<html>
		<body>

			<h1>My First Web Page</h1>
			<p>My first paragraph.</p>

			<script>
			window.alert(5 + 6);
			</script>

		</body>
	</html> 
    ```

3. Using document.write()

	For testing purposes, it is convenient to use **document.weite()**

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<h1>My First Web Page</h1>
			<p>My first paragraph.</p>

			<script>
			document.write("Output for testing purpose");
			</script>

		</body>
	</html>
	```

	Using document.write() after HTML is fully loaded, will **delete all existing HTML**.

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<h1>My First Web Page</h1>
			<p>My first paragraph.</p>

			<button onclick="document.write('Output for testing purpose')">
				Press it
			</button>

		</body>
	</html>
	```

4. Using innerHTML

	To access an HTML element, JS can use **document.getElementById(id)** method.

	the **id** attribute defines the HTML element. The innerHTML property 
	defines the HTML content:

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<h1>My First Web Page</h1>
			<p>My First Paragraph.</p>

			<p id="demo"></p>

			<script>
			document.getElementById("demo").innerHTML = "JS output";
			</script>

		</body>
	</html> 
	```

	Note: To *"Display data"* in HTML, (in most cases) you will set the value of 
	an innerHTML property.

5. Using console.log()

	In your browser, you can use the **console.log()** method to display data.

	Active the browser console with F12, and select "Console" in the menu.

	Example:

	```
	<!DOCTYPE html>
	<html>
		<body>

			<h1>My First Web Page</h1>
			<p>My first paragraph.</p>

			<p>
			Activate debugging in your browser (Chrome, IE, Firefox) with F12, 
			and select "Console" in the debugger menu.
			</p>

			<script>
			console.log("Look at me!");
			</script>

		</body>
	</html> 
	```
