# wget site extraction
#coding/wget

[GNU Wget 1.18 Manual](https://www.gnu.org/software/wget/manual/wget.html)
[html - Scrape An Entire Website - Stack Overflow](https://stackoverflow.com/a/39753416)


```
wget -m -p --np -l 7 -t 6 -w 1 --restrict-file-names=windows -k -E -e robots=off --reject-regex "(.*)\?(.*)" --domains onlinemba.com http://local.onlinemba.com
```

[explainshell.com - wget -m -p —restrict-file-names=windows -k -E -e robots=off —reject-regex "(.*)\?(.*)" —domains onlinemba.com —np -l 7 -t 6 -w 1 http://local.onlinemba.com](https://explainshell.com/explain?cmd=wget+-m+-p+--restrict-file-names%3Dwindows+-k+-E+-e+robots%3Doff+--reject-regex+%22%28.*%29%5C%3F%28.*%29%22+--domains+onlinemba.com+--np+-l+7+-t+6+-w+1+http%3A%2F%2Flocal.onlinemba.com)

Then `cd` into that directory and

```
for dir in $(find * -maxdepth 2 -type d); do mv $dir/index.html $dir.html; done;
find . -type d -empty -delete
```

[explainshell.com - for dir in $(find * -maxdepth 2 -type d); do mv $dir/index.html $dir.html; done; find . -type d -empty -delete](https://explainshell.com/explain?cmd=for+dir+in+%24%28find+*+-maxdepth+2+-type+d%29%3B+do+mv+%24dir%2Findex.html+%24dir.html%3B+done%3B+find+.+-type+d+-empty+-delete)

Recursively rename all files with .yyy to .zzz

```
for f in **/*.yyy; do mv "$f" "${f%.yyy}.zzz"; done;
```

- - - -

`wget` scrapes the local site, then `bash` traverses the directories and renames each `index.html` file to the parent directory name and moves it up one level, and lastly, `bash` finds empty directories and deletes them.

`-m` **Mirror the site**
The manual says:
> turns on recursion and time-stamping, sets infinite recursion depth and keeps FTP directory listings.  

Spiders the site and recursively gets pages and assets. Also checks timestamp of file so running `wget -m` only updates pages and assets that are newer.

`-p` **Download related files**
The manual says:
> This option causes Wget to download all the files that are necessary to properly display a given HTML page. This includes such things as inlined images, sounds, and referenced stylesheets.  

> Ordinarily, when downloading a single HTML page, any requisite documents that may be needed to display it properly are not downloaded.   

> To download a single HTML page (or a handful of them, all specified on the command-line or in a ‘-i’ URL input file) and its (or their) requisites:  

```
wget -p http://site/1.html
```

> Note that Wget will behave as if ‘-r’ had been specified, but only that single page and its requisites will be downloaded. Links from that page to external documents will not be followed. Actually, to download a single page and all its requisites (even if they exist on separate websites), and make sure the lot displays properly locally, this author likes to use a few options in addition to ‘-p’:  

```
wget -E -H -k -K -p http://site/document
```

> To finish off this topic, it’s worth knowing that Wget’s idea of an external document link is any URL specified in an <A> tag, an <AREA> tag, or a <LINK> tag other than <LINK REL="stylesheet">.  

`--restrict-file-names=modes` **escapes necessary characters**
The manual says:

> Change which characters found in remote URLs must be escaped during generation of local filenames. Characters that are restricted by this option are escaped, i.e. replaced with ‘%HH’, where ‘HH’ is the hexadecimal number that corresponds to the restricted character. This option may also be used to force all alphabetical cases to be either lower- or uppercase.  

> The modes are a comma-separated set of text values. The acceptable values are ‘unix’, ‘windows’, ‘nocontrol’, ‘ascii’, ‘lowercase’, and ‘uppercase’. The values ‘unix’ and ‘windows’ are mutually exclusive (one will override the other), as are ‘lowercase’ and ‘uppercase’. Those last are special cases, as they do not change the set of characters that would be escaped, but rather force local file paths to be converted either to lower- or uppercase.  

> When “windows” is given, Wget escapes the characters ‘\’, ‘|’, ‘/’, ‘:’, ‘?’, ‘"’, ‘*’, ‘<’, ‘>’, and the control characters in the ranges 0–31 and 128–159. In addition to this, Wget in Windows mode uses ‘+’ instead of ‘:’ to separate host and port in local file names, and uses ‘@’ instead of ‘?’ to separate the query portion of the file name from the rest. Therefore, a URL that would be saved as ‘www.xemacs.org:4300/search.pl?input=blah’ in Unix mode would be saved as ‘www.xemacs.org+4300/search.pl@input=blah’ in Windows mode. This mode is the default on Windows.  

`-k` **Modify links in the html to point to local files**
The manual says:
> After the download is complete, convert the links in the document to make them suitable for local viewing. This affects not only the visible hyperlinks, but any part of the document that links to external content, such as embedded images, links to style sheets, hyperlinks to non-HTML content, etc.  

If site uses absolute links, should turn this on.

`-E` **Save HTML & CSS with proper extension.** 
[GNU Wget 1.18 Manual](https://www.gnu.org/software/wget/manual/wget.html#HTTP-Options-1)
The manual says:
> If a file of type ‘application/xhtml+xml’ or ‘text/html’ is downloaded and the URL does not end with the regexp ‘\.[Hh][Tt][Mm][Ll]?’, this option will cause the suffix ‘.html’ to be appended to the local filename.  

Only use if your site doesn’t already have files with extensions (I.e. `.html`). Otherwise you’ll end up with files like `.html.html`.

`-e` **Run the following command.** 
The manual says:
> Execute command as if it were a part of .wgetrc. A command thus invoked will be executed after the commands in `.wgetrc`, thus taking precedence over them. If you need to specify more than one wgetrc command, use multiple instances of `-e`.  

`-e robots=off` for spider our `local.` sites that are disallowed in robots.txt.

`—accept-regex urlregex`
`—reject-regex urlregex`
Accept or reject the following regex pattern
The manual says:
> a regular expression which is matched against the complete URL.   

Whereas `-R *.gz, *.tar` will skip files with that extension or `-A "*.html"`  will only get files with that extension.


`-D domain-list`
The manual says:
> Set domains to be followed. domain-list is a comma-separated list of domains. Note that it does not turn on `-H`.  

`-H` **span to any host**
See [GNU Wget 1.18 Manual](https://www.gnu.org/software/wget/manual/wget.html#Spanning-Hosts).

`—n` **—no-parent**
The manual says:
> Do not ever ascend to the parent directory when retrieving recursively. This is a useful option, since it guarantees that only the files below a certain hierarchy will be downloaded. See Directory-Based Limits, for more details  

[GNU Wget 1.18 Manual](https://www.gnu.org/software/wget/manual/wget.html#Recursive-Retrieval-Options-1)
`-l 7` **Specify recursion maximum depth level depth**
The manual says:
> Specify recursion maximum depth level depth  

Avoids getting `wget` into an infinite loop in which it downloads forever. (example: website.com/products/jellybeans/sort-by-/name/price/name/price/name/price).

`-t 6` Limits number of retries
The manual says:
> Set number of tries to number. Specify 0 or ‘inf’ for infinite retrying. The default is to retry 20 times, with the exception of fatal errors like “connection refused” or “not found” (404), which are not retried.  

If a page or file fails, this sets the number of retries before it gives up on that file and moves on.

`-w 5`  Wait n seconds between gets
The manual says:
> Wait the specified number of seconds between the retrievals. Use of this option is recommended, as it lightens the server load by making the requests less frequent. Instead of in seconds, the time can be specified in minutes using the m suffix, in hours using h suffix, or in days using d suffix.  

Since `wget` grabs pages as fast as possible, this can put huge load on the server (particularly if the site is written in PHP, makes MySQL accesses on each request, and doesn’t utilize a cache). This might tick your host off.

[GNU Wget 1.18 Manual](https://www.gnu.org/software/wget/manual/wget.html#Download-Options-1)
`-O`  Download file and rename it:
`wget -O your-site.html http://www.your-site.ext/`
Saves index file from your-site.ext to a local file called your-site.html

[GNU Wget 1.18 Manual: Spanning Hosts](https://www.gnu.org/software/wget/manual/html_node/Spanning-Hosts.html)
`-H` Span hosts
