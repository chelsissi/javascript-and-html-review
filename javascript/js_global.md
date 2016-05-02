-----------------------------------------------------
JavaScript Global Properties and Functions

Date: 2016-05-02

-----------------------------------------------------

The Js global properties and functions can be used with all the built-in
**JS objects**.

1. JS Global Properties.

	> **Property**: **Description**
	> Infinity: A numeric value that represents positive/negative infinity.
	> NaN: "Not-a-Number" value
	> undefined: Indicates that a variable has not been assigned a value

2. JS Global Functions

	> **Function**: **Description**
	> decodeURI(): Decodes a URI
	> decodeURIComponent(): Decodes a URI component.
	> encodeURI(): Encodes a URI
	> encodeURIComponent(): Encodes a URI component.
	> escape(): Deprecated in version 1.5, Use encodeURI() or EncodeURIComponent() instead.
	> eval(): Evaluates a string and executes it as if it was script code.
	> isFinite(): Determine whether a value is a finite, legal number.
	> isNaN(): Determine whether a value is an illegal number.
	> Number(): COnverts an object's value to a number.
	> parseFloat(): Parses a string an returns a floating point number.
	> parseInt(): Parses a string and returns an integer.
	> String(): Converts an object's value to a string.
	> unescape(): Deprecated in version 1.5, Use decodeURI() or decodeURIComponent() instead.

3. Function OR Methods.

	It make sense to call the list of above **global functions** rather than
	**global methods** because the functions are called globally and not any
	objects.

	Anyway, you can also call these functions methods, since they are methods
	of the global object where they run. In a web browser, the global objects in 
	the browser window. Then isNan() is actually a window method: window.isNan().
