# LiquidPSA!
#coding/liquid
#coding/jekyll

Order of operations in Liquid (Jekyll’s programing language) - In tags with more than one and or or operator, operators are checked in order from right to left. You cannot change the order of operations using parentheses — parentheses are invalid characters in Liquid and will prevent your tags from working.

```
{% if true or false and false %}
  This evaluates to true, since the 'and' condition is checked first.
{% endif %}
```

```
{% if true and false and false or true %}
  This evaluates to false, since the tags are checked like this:

  true and (false and (false or true))
  true and (false and true)
  true and false
  false
{% endif %}
```
