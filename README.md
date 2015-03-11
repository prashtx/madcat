# madcat
Like cat, but with markdown->terminal conversion.

Hate typing `cat README.md` and seeing gross formatting instead of nice(ish) text? No? Well, ok.

## Installation
```
npm install madcat -g
```

## Usage
```
madcat README.md
```

or

```
cat README.md | madcat
```

or

```
cat README.md | madcat -
```


## Tables

| woohoo | madcat | handles |
| ------ | :----: | ------: |
| most | of | your |
| table | needs | except |
| alignment| oh | well |

## Syntax Highlighting

```javascript
function foo(bar) {
  return {
    a: ('a' + bar + 'b').length,
    b: 'baz'
  };
}
```

## Lists

+ Some
+ List
+ Items


1. Things
2. To
3. Do


## Blockquotes

> Sometimes people use blockquotes
> and it might contain **markdown**

## Links

You can find [madcat](https://www.npmjs.com/package/madcat) on [npm](npmjs.com).

