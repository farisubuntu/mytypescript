# Quick modification:


1. checkout to `gh-pages` branch
2. fix / add / modify `typescript.md`
3. when ready, do:

```bash
$ pandoc typescript.md -s -o index.html --template templates/default.html5 --metadata title='Typescript'

```

> add your custom styles in `custom.css` 

**related to pandoc:**


- custom styles by generate a `json` file my.theme: [https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html](https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html)
