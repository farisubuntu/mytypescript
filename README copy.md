# Quick modification:


1. checkout to `gh-pages` branch
2. fix / add / modify `beginner_cheatsheet.md`  or other `md` source file.
3. when ready, do:

```bash
$ pandoc sourcefile.md  -s -o sourcefile.html --template templates/default.html5 --metadata title='TYPESCRIPT CHEATSHEETS'

```

> add your custom styles in `custom.css` 

**related to pandoc:**


- custom styles by generate a `json` file my.theme: [https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html](https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html)
