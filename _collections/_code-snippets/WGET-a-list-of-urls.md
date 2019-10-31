# WGET a list of urls
#coding/wget

How to import urls to files locally using WGET. [https://www.gnu.org/software/wget/](https://www.gnu.org/software/wget/manual/html_node/Logging-and-Input-File-Options.html#Logging-and-Input-File-Options)

## Steps

1. Create Directory.
2. Create file called **links.txt** inside of the new directory.
3. Add a list of urls you'd like to import locally, these urls will have to be new-line separated.
4. From current directory in Terminal or Iterm, run `wget -i links.txt;`

## Cheatsheet

```
mkdir import && cd import;
touch links.txt;
[Add urls to links.txt]
wget -i links.txt;
```

**WGET -i Command Notes:**

Read URLs from a local or external *file*. If ‘-’ is specified as *file*, URLs are read from the standard input. (Use ‘./-’ to read from a file literally named ‘-’.)

If this function is used, no URLs need be present on the command line. If there are URLs both on the command line and in an input file, those on the command lines will be the first ones to be retrieved. If ‘--force-html’ is not specified, then *file* should consist of a series of URLs, one per line.

However, if you specify ‘--force-html’, the document will be regarded as ‘html’. In that case you may have problems with relative links, which you can solve either by adding `<base href="*url*">` to the documents or by specifying ‘--base=*url*’ on the command line.

If the *file* is an external one, the document will be automatically treated as ‘html’ if the Content-Type matches ‘text/html’. Furthermore, the *file*’s location will be implicitly used as base href if none was specified.