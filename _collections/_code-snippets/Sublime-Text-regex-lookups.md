# Sublime Text regex lookups
#coding/regex
#webdev/sublimetext

## Add something to beginning or end of files
### Beginning
```
Search:
^\A(.*)$

Replace with: 
ANYTHING $1
```

### End
```
Search:
^\z(.*)$

Replace with: 
$1
ANYTHING
```


## Negative lookahead assertion
```
\((?!\s)
```

The pattern foo will only match if not followed by a match of pattern bar


## Negative lookbehind assertion
```
(?<!\s)\)
```

The pattern bar will only match if not preceded by a match of pattern foo.

- - - -

I had to take this beast of a list and pull all the actual URLs out of it: [http://cl.ly/image/1K0J3x2R462W](http://cl.ly/image/1K0J3x2R462W)

So, turning on the RegEx option in the find / replace, I used this RegEx will found all the URLs:  (http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/?

Super-handy. Then, after copy-pasting into a clean document, under the EDIT menu are both SORT LINES and PERMUTE LINES -> UNIQUE which sorted this list and removed any duplicate lines. 

Here's more on RegEx with Sublime Text (useful for finding/selecting all tags on a page/site):

https://tutsplus.com/lesson/regular-expressions-in-sublime/
http://developingable.com/regular-expressions-in-sublime-text-2/
http://seangoresht.com/index.php/tutorials/item/regular-expressions-reference-guide

Sublime Text Keyboard shortcuts:
https://gist.github.com/lucasfais/1207002
http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_osx.html

- - - -

## 301 salvation...

As I mentioned, I had to cleanup a lot of 301's on OnlineDegrees.org. The content team moved content from /calculator/degrees to just /degrees, and proceeded to do the same for /**/salary, and /**/occupations.

I tried using the WordPress plugin Search and Replace and after a dozen or so I was ready to shoot myself since it's very picky about wildcards and you end up having to do them one-at-a-time. Genesis to the rescue.

For this site, I was already working on a local version, so I used Sequel Pro to get a .sql dump of the database, then took that file into Sublime Text where I could use RegEx to help me find/replace said links (since most of these links were in the database in addition to template files). 

Here's the RegEx I used… The following will capture the URL in a SQL dump including escaped quotation marks.
* URL pattern: http://www.yourwebsite.org/calculator/degrees/sociology
* RegEx: (https?|ftps?)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/calculator/degrees/([^\\"]+)
* Replacement: http://www.yourwebsite.org/degrees/$3/
* Result: http://www.yourwebsite.org/degrees/sociology/
In addition, this little chunk helped me find URLs without trailing slashes: 
* URL pattern: href="http://www.yourwebsite.org/calculator/degrees/financial"
* RegEx: href="(\S)+[^/]"
When I was done with the .sql file, I imported that back into Sequel Pro and everything worked like normal. In the end, I was about to fix 550+ 301's in a few minutes with way more control over what was happening.

You can find more of the RegEx snippets I've been using here: https://gist.github.com/ericrasch/6378893

- - - -

## Remove unwanted links from table; leave content in links intact

Evan, is there a way we can remove those links from the database, leaving only the image itself? The links aren't necessary.

Ssh'd into staging, and dumped affected rows:
```
mysqldump --skip-triggers --skip-extended-insert --no-create-info --user=root -B oedb_site --tables wp_posts --where='post_content LIKE "%oedb.org/blogs/ilibrarian/wp-content/uploads/%"' > /home/deploy/oedb_posts.sql
```

Scp'd that to my local, and ran some search/replaces on it in Sublime. One to turn INSERTs from the dump into UPDATEs:
Find:   `INSERT INTO 'wp_posts' VALUES \((\d+),\d+,’[^’]+?’,'[^']+?','(.+?)(?`
Replace:   `UPDATE 'wp_posts' SET post_content='$2' WHERE ID=$1;`

And another to find and remove the offending links (while leaving the images wrapped in said links):

Find:   `oedb.org/blogs/ilibrarian/wp-content/uploads/[^"]+?">(]+?>)`
Replace:   `$1`

(`$1` knows to look for the () tag in parentheses)

Uploaded SQL file should do the trick, but please run it against staging first and spot check the affected articles
