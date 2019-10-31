# Load something if it’s not a specific page URL
#coding/liquid

For example, hide the _layout_  `h1` when you’re on the about page

```
{% unless page.url == '/about/' %}
  <h1 class="entry-title">{{ page.title }}</h1>
{% endunless %}
```