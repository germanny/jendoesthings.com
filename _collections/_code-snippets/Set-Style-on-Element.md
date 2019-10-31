# Set Style on Element
#coding/javascript

[DOM Element setAttribute() Method](https://www.w3schools.com/jsref/met_element_setattribute.asp)

```
document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
```

### Note: 

Although it is possible to add the style attribute with a value to an element with this method, it is recommended that you use properties of the Style object instead for inline styling, because this will not overwrite other CSS properties that may be specified in the style attribute:

[HTML DOM Style object](https://www.w3schools.com/jsref/dom_obj_style.asp)

**Bad:**
```
element.setAttribute("style", "background-color: red;");
```

**Good:**
```
element.style.backgroundColor = "red";
```