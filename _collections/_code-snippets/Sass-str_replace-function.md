# Sass str_replace function
#coding/sass

```
$rankings_cats: (
  academic-programs:  $color-featured-blue,
  student-body:       $color-featured-orange,
  school-amenities:   $color-featured-red,
  tuition-finances:   $color-featured-green,
  city-state:         $color-featured-purple
);

@function str-replace($string, $search, $replace: '') {
  $index: str-index($string, $search);
  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
  }
  @return $string;
}

@each $rankings_cats, $color in $rankings_cats {
  $curr-color: str-replace(#{$color}, '$color-featured-');
  .box-#{$rankings_cats} i {
    background-image: url(images/icons-#{$curr-color}.png);
  }
}
```