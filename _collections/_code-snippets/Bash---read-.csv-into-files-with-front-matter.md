# Bash - read .csv into files with front matter
#terminal
#coding/bash

```
while IFS=, read -r col1 col2 col3 col4; do
echo "---
title: $col2
date: `date '+%Y-%m-%d %H:%M:%S'`
seo_title: $col3
description: $col4
categories: [ "online-degrees", "state", "$col2" ]
---
{% algolia_ipeds state:"$col1" %}

" > "$col1.html"
done < ~/Downloads/ChristianCollegesStatePages.csv

```

.csv like:

```
associate,Online Associate Degree in Education,Online Associate in Education | Earn Your Degree,"Are you considering becoming a teacher or advancing your teaching career? Learn the most important qualities of searching for a top online associate in education program, as well as how to pay for your degree and career and salary outcomes. Find programs for special education, elementary education, and educational administration."
associate-early-childhood-education,Online Associate Degree in Early Childhood Education,Online Associate in Early Childhood Education| Earn Your Degree,"Are you considering becoming a teacher or paraeducator? Learn about the benefits of earning an associate degree in early childhood education, including searching for a top online degree program, as well as paying for your degree, career and salary outcomes, and pathways to continued education."
```

Front matter like:

```
title: Online Associate Degree in Education
date: 2018-07-02 08:50:20
seo_title: Average Online Associate Degree in Education | TeachingDegree.org
online_degree_cat: [ "associate" ]
permalink: /online-degrees/associate/
```