# PERL Commands for Text Swap
#coding/perl
#coding/regex

## 1. Remove script from all files
```
perl -pi -w -e 's/<script src="http:\/\/sub.domain.com\/assets\/js\/folder\/script.jquery.js" type="text\/javascript" charset="utf-8"><\/script>//gi;' **/*.html;
```

## 2. Remove a multi-line function from all files
```
perl -i -pe 'BEGIN{undef $/;} s/<!-- COMMENT -->(.*)(\n.*)<\?php MULTI-LINE TEXT HERE \?>/replace/smg;' **/*.html;
```

## 3. Replace multi-line form with a script in all files
```
perl -i -pe 'BEGIN{undef $/;} s/<form id=\"find-school-main\"(.*)(\n.*)<small class=\"sponsored\">Sponsored Schools<\/small>/<script async defer src="https:\/\/sub.domain.com\/widgets.js\?param1=value1"><\/script>/smg;' **/*.html;
```

