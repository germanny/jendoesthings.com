# Keep git repos in a folder up-to-date
#coding/git-github
#terminal

A single line you can run in your main repo folder that will re-download (git pull) every cloned repo. Easy to keep your stuff up-to-date that way.

```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
```