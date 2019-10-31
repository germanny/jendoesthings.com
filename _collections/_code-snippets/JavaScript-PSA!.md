# JavaScript PSA!
#coding/javascript
#coding/psa

From [How to convert a string to hyphen-conjoined words in JavaScript (& regex?)? - Stack Overflow](https://stackoverflow.com/a/4310084)

Let’s say I have a string of text:

```
The quick brown fox jumped over 8 or 9 lazy dogs
```

How would you convert this to lower case hyphen-conjoined words like this?

```
the-quick-brown-fox-jumped-over-8-or-9-lazy-dogs
```

I assume it requires some kind of regex to convert it correctly?

```
str.replace(/ +/g, '-').toLowerCase();
```

- - - -
