-----------------------------------------------------
Where to Put/Use the JavaScripts

Date: 2016-04-18

-----------------------------------------------------

1. JS can be placed in the `<body>` and `<head>` sections of HTML page. In HTML, JS **code** must be inserted between
  `<script>` and `</script>` tags.

  Example:
  
  ```
  <script>
  document.getElementById("demo").innerHTML = "My first JavaScript";
  </script>
  ```

2. JS Functions and Events

  * A JS **function** is a block of JavaScript code. that can be executed when "asked" for.
  * For example, a function can be executed when an **event** occurs, like when the user clicks a button.

3. You can place any number of scripts in an HTML document, in `<body>` or `<head>`, or both.

  Note: ALWAYS keeping all code in one place is a good habit.
  
4. JS in `<head>`

  When put in the `<head>` section, it is invoked (called) when a button is clicked.
  
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
      <h1>Javascript Head Name</h1>
      <p id="demo">Initial Paragraph</p>
      <button type="button" onclick="myFunction()">Press it!</button>
    </body>
  </html>
  ```

5. JS in `<body>`

When JS function is placed in `<body>` section of an HTML page. The function is invoked (called) when a button is clicked.

Exmaple

```
Add in later
```
