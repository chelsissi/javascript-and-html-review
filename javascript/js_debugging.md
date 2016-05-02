-----------------------------------------------------
JavaScript Debugging

Date: 2016-05-02

-----------------------------------------------------

You will soon get lost, weiting JS code without a debugger.

1. JS debugging

	It is difficult to weite JS code without a debugger.

	Your code might contain syntax errors, or logical errors, that are difficult
	to diagnose.

	Often, when JS code contains errors, nothing will happen. There are no error
	message, and you will get no indications where to search for errors.

	Note: Normally, errors will happen, every time you try to write some new JS 
	code.

2. JS debugger.

	Searching for errors in programming code is called code debugging.

	Debugging is not easy. But fortunately, all modern browsers have a built-in
	debugger.

	Built-in debugger can be turned on and off, forcing errors to be reports to 
	the user.

	With a debugger, you can also set breakpoints (places where code execution
	can be stopped), and examine variables while the code is executing.

	Normally, otherwise follow the steps at the bottom of this page, you activate
	debugging in your browser with the F12 key, and select "console" in the 
	debugger menu.

3. The console.log() method

	If your browser supports debugging, you can use console.log() to display 
	values in the debugger window:

	```
	<!DOCTYPE html>
	<html>
		<body>

		<h1>My First Web Page</h1>

		<script>
			a = 5;
			b = 6;
			c = a + b;
			console.log(c);
		</script>

		</body>
	```

4. Setting breakpoint

	In the debugger window, you can set breakpoing in the JS code.

	At each breakpoint, JS will stop executing, and let you examine JS values.

	After examining values, you can resume the execution of code (typically
	with a play button).

5. The debugger keyword

	The **debugger** keyword stops the execution of JS, and calls (if available)
	the debugging function.

	This has the same function as setting a breakpoint in the debugger. If no
	debugging is available, the debugger statement has no effect.

	With the debugger turnd on, this code will stop executing before it executes 
	the third line.

	```
	var x = 15 * 5;
	debugger;
	document.getElementbyId("demo").innerHTML = x;
	```

6. Major browser's debugging tools.

	Normally, you activate debugging in your browser with F12, and select 
	"Console" in the debugger menu.

	Otherwise follow these steps:

	* Chrome

		- Open the browser.

		- From the menu, select tools.

		- From tools, choose developer tools.

		- Finally, select Console.

	* Firefox Firebug

		- Open the browser.

		- Go to the web page:

		- http://www.getfirebug.com

		- Follow the instructions how to:

		- install Firebug

	* Internet Explorer

		- Open the browser.

		- From the menu, select tools.

		- From tools, choose developer tools.

		- Finally, select Console.

	* Opera

		- Open the browser.

		- Go to the webpage:

		- http://dev.opera.com

		- Follow the instructions how to:

		- add a Developer Console button to your toolbar.

	* Safari Firebug

		- Open the browser.

		- Go to the webpage:

		- http://extensions.apple.com

		- Follow the instructions how to:

		- install Firebug Lite.

	* Safari Develop Menu

		- Go to Safari, Preferences, Advanced in the main menu.

		- Check "Enable Show Develop menu in menu bar".

		- When the new option "Develop" appears in the menu:

		- Choose "Show Error Console".

