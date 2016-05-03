-----------------------------------------------------
JavaScript Syntax

Date: 2016-05-03

-----------------------------------------------------

JavaScript **syntax** is the set of rules, how JS programs are constructed.

1. JS programs

	A **computer program** is a list of "instructions" to be "executed" by the
	computer.

	In a programming language, these program instructions are called 
	**statements**.

	JS is a **programming language**.

	JS statements are separated by **semicolons**.

	Example

	```
	var x = 5;
	var y = 6;
	var z = x + y;
	```

	Note: In HTML, JS programs can be executed by the web browser.

2. JS statements
	
	JS statements are composed of:

	Values, Operators, Expressions, Keywords and Comments.

3. JS values

	The JS syntax defines two types of values: Fixed values and variable values.

	Fixed values are called **literals**, variable values are called 
	**variables**.

4. JS Literals

	The most important rules for writing fixed values are:

	* **Numbers** are written with or without decimals.

	* **Strings** are text, written within double or single quotes.

5. JS variables

	In a programming language, **variable** are used to **store** data values.

	JS uses the **var** keyword to **declare** variables.

	An **equal sign** is used to **assign values** to variables.

	In this example, x is defined as a variable. Then x is assigned (given) the
	value 6:

	```
	var x;
	x = 6;
	```

6. JS operators

	JS uses an **assignment operator** (=) to **assign** values to variable.

	```
	var x = 5;
	var y = 6;
	```

	JS uses **arithmetic operators** (+ - * /) to **compute** values.

	```
	(5 + 6) * 10
	```

7. JS expressions

	An expression is a combination of values, variables, and operators, which 
	computes to a value.

	The computation is called an evaluation.

	Expressions can also contain variable values.

	The values can be of various types, such as numbers and strings.

8. JS keyword

	JS **keywords** are used to identify actions to be performed.

	The **var** keyword tells the browser to create a new variable.

9. JS comments

	Note all JS statements are "executed".

	Code after double slashes `//` or between `/*` and `*/` is treated as 
	**comment**.

	Comments are ignored, and will not be executed.

10. JS identifiers.

	Identifiers are names.

	In JS, identifiers are used to name variables (and keywords, and functions,
	and labels).

	The rules for legal names are much the same in most programming languages.

	In JS, the first character must be a letter, and underscore, or a dollar 
	sign (`&`).

	Subsequent characters maybe letters, digits, underscores, or dollar signs.

	Note: Numbers are not allowed as the first charater.
	
	This way JS can easily disringuish identifiers from numbers.

11. JS is Case Sensitive.

	All JS identifiers are **case sensitive**.

	The variables `lastName` and `lastname`, are two different variables.

	JS does not interpret VAR or Var as the keyword var.

12. JS and Camel Case
	
	Historiacally, programmers have used three ways of joining multiple words 
	into one variable name:

	**Hyphens**: first-name, last-name ...

	**Underscore**: first\_name, last\_name, ...

	**Camel Case**: firstName, lastName, ...

	In programming languages, especially in JS, camel case often starts with a 
	lowercase letter:

	Note: Hyphens are not allowed in JS, it is reserved for subtractions.

13. JS character set

	JS uses the **Unicode** character set.

	Unicode covers (almost) all the characters, punctuations, and symbols in
	the word.

