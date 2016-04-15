-----------------------------------------------------
JavaScript Introduction

Date: 2016-04-15

-----------------------------------------------------

1. JS is the programming language of HTML and the Web.

  Programming makes computers do what you want them to do.
  
  JS is easy to learn.
  
2. Try example

```
<!DOCTYPE html>
<html>
<body>

<h1>My first JS example</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
CLick me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html>
```

3. Why study JS?

  JS is one of the **3 languages** all web developers must learn.
  
  * **HTML** to define the content of web pages
  * **CSS** to specify the layout of web pages
  * **JavaScript** to program the behavior of web pages.
  
  This set of notes explain how JS works with HTML and CSS.

4. [JS complete reference](http://www.w3schools.com/jsref/default.asp)

  Contains examples of all objects, properties, methods, and is continuously updated according to the lastest web 
  standards.

5. What does JS can do?

  * JS can change HTML Content
  * JS can change HTML Attributes
  * JS can change HTML Styles (CSS)
  * JS can validate data

  Note: JS and Java are completely different languages, both in concept and design.

6. List of examples for above

  * JS can change **HTML Content**

    One of many HTML methods is **getElementById()**.
    This example uses the method to "find" an HTML element (with id="demo"), and changes the element content (**innerHTML**)
    to "I can change the HTML content!"

    ```
    <!DOCTYPE html>
    <html>
    <body>
    
    <h1>What can JS do? 1st example</h1>
    
    <p id="demo">JS can change HTML content</p>
    <button type="button"
    onclick="document.getElementById('demo').innerHTML = 'I can change the HTML content!'">
    Click me!</button>
    
    </body>
    </html>
    ```
  
  * JS can change **HTML Attributes**
  
    This example changes an HTML image, by changing the src **attribute** of an <img> tag:
  
    ```
    <DOCTYPE html>
    <html>
    <body>
    
    <h1>What can JS do? 2nd exmaple</h1>
    <h2>JS can change Images</h2>
    
    <img id="myImage" onclick="changeImage()" src="pic_buloff.gif" width="100" height="180">
    
    <p>Click the light bulb to turn on/off the light.</p>
    
    <script>
    function changeImage(){
        var image = document.getElementById('myImage');
        if (image.src.match('bulbon')){
          image.src = "pic_bulboff.gif";
        } else {
          image.src = "pic_bulbon.gif";
        }
    }
    </script>
    
    </body>
    </html>
    ```
  
  * JS can change **HTML Styles (CSS)**

    Changing the style of an HTML element, is a variant of changing an HTML attribute:
    
    ```
    <!DOCTYPE html>
    <html>
    <body>
    
    <h1>What can JS do? 3rd example</h1>
    
    <p id="demo">JS can change the style of an HTML element</p>
    
    <button type="button" onclick="myFunction()">Click me!</button>
    
    <script>
    fuction myFunction(){
      var x = document.getElementById("demo");
      x.style.fontSize = "25px";
      x.style.color = "blue";
    }
    </script>
    
    </body>
    </html>
    ```
  
  * JS can **validate data**
  
    JS often used to validate input.
    
    ```
    <!DOCTYPE html>
    <html>
    <body>
    
    <h1>What can JS do? 4th example</h1>
    <h2>JS Can Validate Input</h2>
    
    <p>Please input a number between 1 and 10:</p>
    
    <input id="numb">
    
    <button type="button" onclick="myFunction()">Submit</button>
    
    <p id="demo"></p>
    
    <script>
    function myFunction() {
        var x, text;
    
        // Get the value of the input field with id="numb"
        x = document.getElementById("numb").value;
    
        // If x is Not a Number or less than one or greater than 10
        if (isNaN(x) || x < 1 || x > 10) {
            text = "Input not valid";
        } else {
            text = "Input OK";
        }
        document.getElementById("demo").innerHTML = text;
    }
    </script>
    
    </body>
    </html> 
    ```
