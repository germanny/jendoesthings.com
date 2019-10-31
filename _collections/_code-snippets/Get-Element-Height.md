# Get Element Height
#coding/javascript

[javascript - Get element height when style = auto or 100%? - Stack Overflow](https://stackoverflow.com/a/15277379)

**Javascript**
```
var divHeight;
var obj = document.getElementById('id_element');

if(obj.offsetHeight) {
    divHeight=obj.offsetHeight;

} else if(obj.style.pixelHeight) {
    divHeight=obj.style.pixelHeight;

}
```

With jQuery library it's easier :

**JQuery**
```
var height = $('#element').height();
```


Now with many elements within a container :

**Html**
```
<div id="divId">
    <img class="node" src="path/to/pic" style="z-index:10; opacity:0;"/>
    <img class="node" src="path/to/pic" style="z-index:9; opacity:0;"/>
    <img class="node" src="path/to/pic" style="z-index:8; opacity:1;"/> 
    <img class="node" src="path/to/pic" style="z-index:7; opacity:1;"/>
    <img class="node" src="path/to/pic" style="z-index:6; opacity:1;"/>
</div>
I changed your opacity to visibility for compatibility purposes. Don't use display:none; or the height parsing will fail ;).
```

**JQuery**
```
$("#divId img").each(function(index, picture) {
   var height = $(picture).height();
   //Do everything you want with the height from the image now
});
```