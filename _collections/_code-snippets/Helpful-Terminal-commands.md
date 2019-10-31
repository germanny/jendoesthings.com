# Helpful Terminal commands
http://askubuntu.com/a/468902

#terminal/command


List hidden files:

```
ls -ld .?* 
```

Explain :
 `-l`     use a long listing format

 `-d, --directory`
              list  directory entries instead of contents, and do not dereference symbolic links

`.?*` will only state hidden files 

- - - -

## Run Sass functions in Terminal
Sass ProTip™ - if you just want to run some #coding/sass functions (like darkening a hex color or something), run in Terminal for an interactive compiler:

`sass -i`

- - - -

## Commands for removing files from an Ubuntu server
https://help.ubuntu.com/community/DeletingFiles

The #terminal/command for deleting file(s) is `rm`. The general format of this command is  `rm [-f|i|I|q|R|r|v] file ...`.

`rm` removes a file if you specify a correct path for it and if you don't, then it displays an error message and move on to the next file. Sometimes you may not have the write permissions for a file, in that case it asks you for confirmation. Type `yes` if you `want` to delete it.

### Options

1. `-f` - deletes read-only files immediately without any confirmation.If both -f and -i are used then the one which appears last in the terminal is used by rm. 
2. `-i` - prompts for confirmation before deleting every file beforing entering a sub-directory if used with -R or -r. If both -f and -i are used then the one which appears last in the terminal is used by rm. 
3. `-q` - suppresses all the warning messages however error messages are still displayed. However the exit status is modified in case of any errors. 
4. `-R` - means delete recursively and is used to delete the directory tree starting at the directory specified i.e. it deletes the specified directory along with its sub-directory and files. 
5. `-r` - same as -R. 
6. `-v` - displays the file names on the output as they are being processed. 
7. `-I` - prompts every time when an attempt is made to delete for than 3 files at a time or while removing recursively.

### Precautions

1. Never type `sudo rm -R /` or `sudo rm -r /` as it deletes all the data in the root directory and will delete the data of all the mounted volumes until you want to wipe of everything from your system. 
2. `sudo rm -f /*` also does blunders with your system.