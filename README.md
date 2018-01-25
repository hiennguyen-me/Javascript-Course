# 1. Javascript: An Introduction
- jQuery: libraries JS functions
- Frameworks: AngularJS, React
- Server site tool: Node.js  
- We have JS platforms and runtime enviroments like Node.js

# 2. The basics:
- <script> </script> : should put it after <body> section
- HTML reference to the file JS: <script src="scripts.js"> </script>
- How JS loads:
	+ Right away: HTML parsing => Js download => JS execution => HTML parsing
	+ Asynchronous: <script src="scripts.js" async> </script> : HTML parsing + Js download alongside HTML=> JS execution => HTML parsing
	+ Deferred:
- External JavaScript Advantages
	+ Placing scripts in external files has some advantages:
	+ It separates HTML and code
	+ It makes HTML and JavaScript easier to read and maintain
	+ Cached JavaScript files can speed up page loads
- Basic Rules:
	+ Js is case sensitive
	+  Use camelCase
	+ Whitespace matters (to humans)
	+ End each statement with semicolon
	+ use comments liberally

# 3. Working with data
- Variables: The catch-all containers of JS
	+ Can't start with number
- Data types:
	+ Data type:
		+ Numberic:
		+ String:
			* If there are double quote in the string, use single quote to open and close the string; or use \".
		+ Boolean
		+ null
		+ undefined: create a new variable and don't set it's value.
		+ Symbol
	+ Check type of data: typeof var/type;
	* typeof null : Object
	* typeof undefined : undefined
	* typeof NaN: number
	* typeof array: object
	* typeof function : function
- Operators:
	+ ++a: Increase a by 1 before ...
	+ a++: Increase a by 1 after ...
- Working with strings and numbers:
	* Number + String = String (first var followed by the second var).
	* Number - String:
		if (value(String) is number)
			result = number
		else
			Result = NaN (not a number)

- Conditional statement and logic:
	* 1 == "1" => true
	* 1 === "1" =>false (===: identical)
	* !== : NOT identical
	* && : And
	* || : or
	* Shorthand condition statement: condition ? true : false
- String:
	+ substring(start, end)
- Arrays:
	+ var arr1 = ["a", "b", "c"];
	+ var mixArr = ["a", 1, "sgf", 34];
	+ Properties: length,
	+ Methods: 	
		- reverse()
		- shift() : removes the first value of the array.
		- unshift("a", "b"): add new items to the front of the array.
		- pop(): remove the last items
		- push(): add more items to the end of the array.
		- splice(postion, n): remove n items from position in the array.
		- slice(): create a copy of the array an and return new array.
		- indexOf(searchKey, index) : search key from position index, return a index of the first key.
		- arr.join(Separated): create a string from arr, each items are separated by "separated"
		Ex: var arrStr = arr.join(",");
- Object:
	+ Object can include another one.

## 4. Functions:
- 3 types of function:
	+ Named functions: executed when called by name
	+ Anonymous function: run when they are triggered by specific event
	+ Immediately invoked function expressions: run the moment the browsers encounters them.
- Variable scope:
	+ Global
	+ Local
- ES2015: let and const:
	+ const: constant, can't be changed once defined
	+ let: block scope variable, smaller scope than var. Limit the scope of a variable to just one code block.
- Make sense of objects:
	+ Object includes properties and methods.
	+ Declare:
		var newObject = new Object();
		newObject.property1= value;
		...
	+ Shorthand declare:
		var newObject = {
			property1: value;
			property2: value;
			...
		}
- Sidebar: Dot and bracket notation
- Closures:
	+ 1em = 16px
## 5. JS and the DOM
- DOM : the document object model
	+ The browser is an object, document is an object
	+ BOM: Browser object model
		- window: the top-level object in the BOM
		- document is a property of window
	+ DOM : Document Object Model
- Target elements in the DOM with querySelector methods:
	+ DOM methods:
		- getElementById("id")
		- getElementsByClassName("classname")
		- getElementsByTagName("HTML tag")
		- querySelector("selector"): return the first instance that matches the specified selectors.
			* Ex: document.querySelector(".main-nav a")
		- querySelectorAll(""): return all instances that matches the specified selectors.
- Access and change elements:
	+ innerHTML: content inside HTML tag
	+ outerHTML: HTML tag + content inside
	+ We can change ID, className, HTML
- Access and change classes:
	+ Element.classList
	+ Methods:
		- add("Classname"): add specified class values
		- remove ("className"): remove specified class values
		- item(Number): return class value by index in collection
		- toggle("className"): toggle class value. If class exists then remove it and return false, else then add it and return true. When a second argument is present: If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.
		- contains("className"): checks if specified class value exists in class attribute of the element.
		- replace (oldClass, newClass): replaces an existing with a new class.
- Access and change attributes:
	+ Element.hasAttribute("attributeName"): checks if exists attribute
	+ Element.getAttribute("attributeName"): return the value of specified attribute.
	+ Element.setAttribute(name, value)
	+ Element.removeAttribute(attributeName")
- Add DOM elements:
	+ Create the element : document.createElement("Element-name")
	+ Create the text node that goes inside the element: .createTextNode();
	+ add the text node to the element:
	+ add the element to the DOM tree
	+ .appendChild(): place one child node inside another
- Add inline CSS to an element
	+ the same way to add attribute to an element

## 6. Project: Analog Clock
- <SVG></SVG>:
	+ What is SVG:
		- SVG stands for Scalable Vector Graphics
		- SVG is used to define graphics for the Web
	+ SVG has several methods for drawing paths, boxes, circles, text, and graphic images.
- Transform property in CSS:
	+ This property allows you to rotate, scale, move, skew, etc., elements.
- Transform-origin property allows you to change the position of transformed elements.
- Transition: To create a transition effect, you must specify two things:
	+ the CSS property you want to add an effect to
	+ the duration of the effect
## 7. JS and the DOM, part 2: Events
- Trigger functions with event handlers:
- Add and use event listener:
	+ Element.addEventListener(event, function, useCapture)
		- Event: specified the name of the event, don't use the on prefix.
		- function: run when the event occurs.
		- useCapture: optional, a boolean values that specifies whether the event should be executed in the capturing or in the bubbling phase.
	+ We can add muptiple functions for the same event and the same element, That functions run at the same time when event occurs.
- Pass arguments via event listners:
## 9. Loops:
- Break: terminate the current loop, jump to the next stament
- Continue: terminate the current iteration of the loop, jump back up and run the next iteration.
## 11. Troubleshooting, Validation and Minifying JS
- Troubleshooting JS:
	+ Open console to show error when I write JS.
- Send troubleshooting info to the console.
	+ console.info(message , object) : Informative logging information. You may use string substitution and additional arguments with this method.
	+ console.error() : Outputs an error message. You may use string substitution and additional arguments with this method.
- Step through your JS with browser tools:
	+ Sources tab: step through code line-by-line
		- chose file js
		- Load document
		- Add breakpoint
		- Step into next command
- Online script linting:
	+ Should check the quality of your Javascript code is to run it through an online quality checker.
	+ The oldest and most well known of these is JSLint.
	+ JSLint is the de facto gold standard for Javascript code quality
	+ JSHint goes through your code to find any errors, but unlike JSLint, it holds your code to a reasonable standard that is easier to meet.
	+ jslint.com and jshint.com
- Automate script linting:
	+ ESLint
	+ To use this tool:
		- npm install -g ESLint
		- npm init
		- ESLint --init
	+ Run ESLint while you're writing your JavaScript and you'll see immediately if you make any mistakes, and it'll tell you exactly how to fix them.
- Online script minification: minifier.org
- Automate script minification:
	npm install -g uglify-js-es6
	uglifyjs script.js -o script.min.js

##12. Others:

### A. BOM (Browser Object Model)
- window:
	+ is considered a browser object.
	+ get height and width of browser: window.innerHeight and window.innerWidth
	+ open new window: window.open()
	+ close window: window.close()
- location: is a property of window, is a object use to handle URL.
	* Mothods:
		- reload()
		- replace("url") : don't save to history
		- location.href = "url" : same as replace() method, but save to history
		- assign("url") : same as location.href
	* Attributes:
		- hash: set or get anchor tag (section after '#' sign of URL).
		- host: set or get hostname and port of URL
		- hostname: set or get hostname
		- href: set or get URL
		- origin: return protocal, hostname, port of URL
		- port: set or get port
		- search: get query string of URL
- history: is a property of window.
	+ history.back(): back to previous page
	+ history.forward(): go to next page
	+ history.go(number)
		if number > 0 : go to next number page
		else : go back to number page.  
- cookie:
	+ save information about user on browser.
	+ Cookie are saved at name=value
	+ To use cookie : document.cookie
	+ Create cookie: document.cookie = "name=value; expires = date at UTC; path=path";
	expires: set live span of cookie
	+ get Cookie: var value = document.cookie
	+ Delete cookie: set expires < date now
	+ Function with cookie:
		// function set Cookie
		function setCookie(cname, cvalue, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		// function get value Cookie
		function getCookie(cname) {
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1);
		        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		    }
		    return "";
		}
- Window navigator: use to check information about user such as which browers, version of browser, which operating system, turn on cookie?,..
	+ Check cookie: navigator.cookieEnabled
	+ Name of browser: navigator.appName
	+ Code Name of browser: navigator.appCodeName
	+ Engine: navigator.product
	+ Version of browser: navigator.appVersion or navigator.userAgent
### B. Regular expression:
+ Some rules in Regular Expression:
	- [abc] : find characters a or b or c
	- [0-9] or [a-z] : find characters 0-9 or a-z
	- (x|y) : find character x or y
	- \d : find numbers
	- \s : find space
	- n+ :find one or many character n  consecutive.
	- n* : find 0 or many character n  consecutive.
	- n? : find  0 or 1 character n
pattern.test(string)
	- pattern: is pattern string, is a Regular Expression string, but it isn't put in single or double quotes, it is put in pair /.
	- string: is a string to check
	- Ex: var res = /Hien/.test("Hello Hien");
	res = true
	- Can put modifiers after pattern. Modifier is the configuration parameter for the pattern string and it has following values:
		+ i : not case sentitive
		+ g : match the whole string to find
		+ m : match both the multiline data
	- [^a-z]: match with first character
	- $: match with last
	- ^ and $: lấy chính xác chuỗi
	- a{3-5}: lấy chuỗi chứa 3 đến 5 ký tự a  
+ Can see more about Regular Expresion table at: https://freetuts.net/bang-bieu-thuc-regular-expression-trong-javascript-418.html
