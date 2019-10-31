# Regex Examples
#coding/regex

## Regex to get pattern with multiple lines

```
(?s)<div id="map">(.*)(\n.*)<div class="msg_box_grey">
```

```
(?s)(.*)(\n.*)featured_image: ""\n---\n\n\n---
 class="menu-item(.*)\smenu-item-\d+"
```

## `body_class` updates
To add a `body_class` front matter item with classes from a `<body>` tag further down the page and remove the extraneous `body` tag simultaneously:

1. Add an empty `body_class: ""` item to all affected pages and save.
2. Add a `body_class` below the existing `<body>`:

3. Find/replace everything between the empty `body_class: ""` and the new `body_class: "with all the classes"` to add the classes to the proper front matter item and remove the extraneous `<body>` and `body_class` items from the content area.

FIND:
```
(?s)body_class:
---(.*)(\n.*)<body (.*?)">
body_class: "(.*?)"
```

REPLACE:
```
<body class="$1" $2">
body_class: "$1"
```

## Find missing ""
Example:
```
title: This is a title : with a colon
```

Fix with:
```
Find: title: (?!")(.*)(?<!\")\n
Replace: title: "$1"\n
```
- - - -


https://gist.github.com/ericrasch/6378893

http://seangoresht.com/index.php/tutorials/item/regular-expressions-reference-guide

`https?` means both `http` and `https`, because you're saying if you do or don't have the s on the end

I find it's best to leave off the domain on redirects (the redirect target). So this:

```
RewriteRule ^degree-index/?$ degrees/ [R=301,L]
```

instead of this:

```
RewriteRule ^online-schools/?$ http://oedb.org/accreditation/ [R=301,L]
```

This:
```
RewriteRule ^videos(.*)$ / [R=301,L]
```

instead of:
```
RewriteRule ^videos(.*)$ http://oedb.org/ [R=301,L]
```



`$` is the end of the road. Stop here.
`?` is 0 or 1 of the preceding character.

![](Regex%20Examples/5348051ac38aa5221bdbd712.png)

Must have 0 or 1 of preceding characters
![](Regex%20Examples/53480539c38aa522140c145a.png)

Match anything with 1 or more character after, then STOP
![](Regex%20Examples/53480602c38aa522167ced68.png)

Match 0 or more characters at the the end, then STOP
![](Regex%20Examples/5348060ec38aa52215050750.png)

Other examples I don’t really understand yet how they work
![](Regex%20Examples/534806a7c38aa52215050752.png)

This one needs /?$ at the end to catch the / and not /
![](Regex%20Examples/53480a18c38aa52215050756.png)

### Cloudinary URL replacement
```
upload/v1(\d+)/

upload/f_auto/fl_lossy,q_auto/v1/
```

![](Regex%20Examples/download.jpg)

Here’s how you find stuff like `featured_images:`  that don’t have the full URL in them: https://monosnap.com/file/DWjNxQIgBckNJh0hc7W7j7Oh1ULXe4

![](Regex%20Examples/slack-imgs.png)

https://monosnap.com/facebook/generate_image_preview?id=DWjNxQIgBckNJh0hc7W7j7Oh1ULXe4
`featured_image: [^http]`
or with more of an exact match to replace the numbers:
• find: `featured_image: [^http]/v1(\d+)/`
• replace: `featured_image: https://res.cloudinary.com/highereducation/image/upload/f_auto,fl_lossy,q_auto/v1/`


### Extract CSS background image URLs and find missing in Cloudinary
1. Sublime Text will let you copy out the things you search for, so perform a `Find in Files...` ⌘⇧F, paste `url[(]["|']?.*?["|']?[)]`, and turn on the RegEx option.
2. Once that returns your results, perform a `Find` ⌘F on the search results page, then click `Find All`. Copy/paste that into a new doc.
3. Be sure to remove the `url` and `( )` and `"`. You’ll need to `Permute Lines: Sort` and then `Permute Lines: Unique` to help clear up the list. Your 2000+ links are now ~200.
4. Copy out the URLs you want to test
5. Open up Frogger, change the mode to `List`, then paste in the URLs.
6. Run the scan and it will report which URLs return a 200/301/404/etc