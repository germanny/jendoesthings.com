# Regex Helpers
#coding/regex

## Images

Note: dates directories have been excluded moving forward.

### Wordpress to Cloudinary ~ Image to image.

```
    [https://www.tbs.org/wp-uploads/2045/23/yom-edelen-escalante-gradillas-check-740x416.jpg](https://www.tbs.org/wp-uploads/2045/23/yom-edelen-escalante-gradillas-check-740x416.jpg)
    
    ->
    
    https://res.cloudinary.com/highereducation/image/upload/v1/TheBestSchools.org/yom-edelen-escalante-gradillas-check-740x416.jpg
```

*Search & Replace*

```
    [https://www.tbs.org/wp-uploads/(\d{4}/\d{2}/)?([^\s]+](https://www.tbs.org/wp-uploads/(%5C%5Cd%7B4%7D/%5C%5Cd%7B2%7D/)?(%5B%5E%5C%5Cs%5D+)).(png|jpe?g|gif)
    
    Reference Group ->
    
    https://res.cloudinary.com/highereducation/image/upload/v1/TheBestSchools.org/$2.$3
```

### Wordpress to Cloudinary ~ Image Thumbnail Size to Cloudinary Thumbnail Size.
```
    [https://www.tbs.org/wp-uploads/2045/23/yom-edelen-escalante-gradillas-check-740x416.jpg](https://www.tbs.org/wp-uploads/2045/23/yom-edelen-escalante-gradillas-check-740x416.jpg)
    
    ->
    
    https://res.cloudinary.com/highereducation/image/upload/w_740,h_416/v1/TheBestSchools.org/yom-edelen-escalante-gradillas-check.jpg
```

*Search & Replace*

```
    https://www.tbs.org/wp-uploads/(\d{4}/\d{2}/)?([^\s]+)-(\d{2,4})x(\d{2,4}).(png|jpe?g|gif)
    
    Reference Group ->
    
    https://res.cloudinary.com/highereducation/image/upload/w_$3,h_$4/v1/TheBestSchools.org/$2.$5
```

### Cloudinary to Cloudinary Search Regex

```
    [https://res.cloudinary.com/highereducation/image/upload/v1527267997/TheBestSchools.org/best-online-colleges-2017-summer-500x600.jpg](https://res.cloudinary.com/highereducation/image/upload/c_scale,q_auto,w_740/v1527267997/TheBestSchools.org/best-online-colleges-2017-summer.jpg)
    
    -> 
    
    https://res.cloudinary.com/highereducation/image/upload/w_500,h_600/v1527267997/TheBestSchools.org/best-online-colleges-2017-summer.jpg
```

*Search & Replace*

```
    [https?://res.cloudinary.com/highereducation/image/upload/v(\d+)/TheBestSchools.org/([^\s]+)-\d{2,4}x\d{2,4}.(png|jpe?g|gif)](https://res.cloudinary.com/highereducation/image/upload/c_scale,q_auto,w_740/v1527267997/TheBestSchools.org/best-online-colleges-2017-summer.jpg)
    
    Reference Group ->
    
    https://res.cloudinary.com/highereducation/image/upload/w_$3,h_$4/v$1/TheBestSchools.org/$2.$5
```

## Cloudinary URL - Replace version number and missing flags
```
    FIND
    upload/v1(\d+)/
    
    REPLACE
    upload/f_auto/fl_lossy,q_auto/v1/
```
![](Regex%20Helpers/Untitled-16aabd1d-3691-4a90-b63f-b8155e0422fd.png)

Here’s how you find stuff like `featured_images:` that don’t have the full URL in them: [https://monosnap.com/file/DWjNxQIgBckNJh0hc7W7j7Oh1ULXe4](https://monosnap.com/file/DWjNxQIgBckNJh0hc7W7j7Oh1ULXe4)

![](Regex%20Helpers/Untitled-4c79d1de-9f27-44dc-99e2-098e537d08fd.png)

[https://monosnap.com/facebook/generate_image_preview?id=DWjNxQIgBckNJh0hc7W7j7Oh1ULXe4](https://monosnap.com/facebook/generate_image_preview?id=DWjNxQIgBckNJh0hc7W7j7Oh1ULXe4)

`featured_image: [^http]`
or with more of an exact match to replace the numbers:
• find: `featured_image: [^http]/v1(\\d+)/`
• replace: `featured_image: <https://res.cloudinary.com/highereducation/image/upload/f_auto,fl_lossy,q_auto/v1/`>

## Extract CSS background image URLs and find missing in Cloudinary

1. not sure how to do this in VS Code, but Sublime Text will let you copy out the things you search for, so perform a `Find in Files...` ⌘⇧F, paste `url[(]["|']?.*?["|']?[)]`, and turn on the RegEx option.
2. Once that returns your results, perform a `Find` ⌘F on the search results page, then click `Find All`. Copy/paste that into a new doc.
3. Be sure to remove the `url` and `( )` and `"`. You’ll need to `Permute Lines: Sort` and then `Permute Lines: Unique` to help clear up the list. Your 2000+ links are now ~200.
4. Copy out the URLs you want to test
5. Open up Frogger, change the mode to `List`, then paste in the URLs.
6. Run the scan and it will report which URLs return a 200/301/404/etc
7. Add links to a links.txt file and from the same directory run to download: `wget -c -p -i links.txt;`

# More RegEx Helpers

• find every `<a>` tag: `<a\\s[^>]*href=("|')([^("|')]*)("|')[^>]*>(.*)</a>` [https://monosnap.com/file/lkvrKVBeCLN626rpP5Pi4ALfg4oDeQ](https://monosnap.com/file/lkvrKVBeCLN626rpP5Pi4ALfg4oDeQ)
• find all `href=`: `href=("|')([^("|')]*)("|')` [https://monosnap.com/file/LXR1xyN7k9WkkNwcnF5LFbKWZNyT8V](https://monosnap.com/file/LXR1xyN7k9WkkNwcnF5LFbKWZNyT8V)
• find all `http(s)` or `ftp(s)` links: `(https?|ftps?)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(/S*)?/?` (this one isn’t perfect because it doesn’t find the full URL to the ending `"` mark) [https://monosnap.com/file/sUm36Y4D38HvBdOJK5QdqNcb0XQ80L](https://monosnap.com/file/sUm36Y4D38HvBdOJK5QdqNcb0XQ80L)
• find empty html `<tag></tag>`: `<(\\w+)(?:\\s+\\w+="[^"]+(?:"\\$[^"]+"[^"]+)?")*>\\s*</.>` [https://monosnap.com/file/bQ3moAn9FJvqThT7POJNxxxa82jJVt](https://monosnap.com/file/bQ3moAn9FJvqThT7POJNxxxa82jJVt)
• find px, em or % values: `[0-9]{1,4}(px|em|%)` [https://monosnap.com/file/0aNWGzP8PWzTqzhZEoRu1dGJfOoVv3](https://monosnap.com/file/0aNWGzP8PWzTqzhZEoRu1dGJfOoVv3)
• find all `@import`: `^.*@import.*$` [https://monosnap.com/file/Bhk8o6gkUfTnmrXzm7HDXfVbilfbDg](https://monosnap.com/file/Bhk8o6gkUfTnmrXzm7HDXfVbilfbDg)
• find all `url:` : `url[(]["|']?.*?["|']?[)]` [https://monosnap.com/file/n4wpR4TblAsHuiWl1h5cV5ekzPHW8C](https://monosnap.com/file/n4wpR4TblAsHuiWl1h5cV5ekzPHW8C)
• find all urls that start with `/`, do not contain `#`, and do not end with  `/`: `href=(['"])\/[^\s#]+(?<!\/)\1` (e.g. href="/careers/mental-health-counselor")
• find links missing a trailing `/`: `href=(['"])([^\s]+)(?<!\/)\1`