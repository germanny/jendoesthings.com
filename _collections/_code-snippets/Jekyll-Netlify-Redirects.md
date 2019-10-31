# Jekyll / Netlify Redirects
#coding/jekyll

How to handle redirects with query params in them. It’s slightly different than what you’d think.
• yes (covers both the no’s below): `/page/*/ s=:term  /search/?q=:term  301`
• no: `/page/*/?s=bachelor  /search/?q=bachelor  301`
• no: `/page/*/?s=affordable  /search/?q=affordable  301`

https://github.com/HigherEducation/TheBestSchools.org/pull/37/commits/0e7e880198b5ba4ad35f9bc6367cb60f336ca94b

demo:
* https://deploy-preview-37--thebestschoolsorg.netlify.com/page/14/?s=bachelor
* https://deploy-preview-37--thebestschoolsorg.netlify.com/page/15/?s=affordable
* https://deploy-preview-37--thebestschoolsorg.netlify.com/page/15/?s=bachelor
* https://deploy-preview-37--thebestschoolsorg.netlify.com/page/16/?s=affordable
(but that 404s because search isn’t on this PR branch)
Run those URLs through Frogger and they 301 properly.