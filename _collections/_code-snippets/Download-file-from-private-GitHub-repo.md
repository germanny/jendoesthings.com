# Download file from private GitHub repo 
#coding/curl
#coding/git-github

Download a single file from a private GitHub repo.

**REF:** [Download a single file from a private GitHub repo. You’ll need an access token as described in this GitHub Help article: https://help.github.com/articles/creating-an-access-token-for-command-line-use · GitHub](https://gist.github.com/Integralist/9482061)

## Need:
• GitHub username
• Access token: https://help.github.com/articles/creating-an-access-token-for-command-line-use
• Path to raw file in repo
• File name to save to

## Example:
```
curl -H ‘Authorization: token [YOUR_PERSONAL_ACCESS_TOKEN]’ -H ‘Accept: application/vnd.github.v3.raw’ -o savedFileName.ext -O -L <https://raw.githubusercontent.com/repo/path/to/raw/file>
```