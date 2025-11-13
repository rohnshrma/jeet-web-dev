_css : cascading style sheet_

- `inline` : applied on the html tag itself using the "style" attribute
- `internal` : applied by creating a "style" tag in head tag, selecting and styling futher
- `external` : applied by linking an external ".css" file using the link tag in head

## inline css

applied on the html tag itself using the "style" attribute

```html
<div id="main" style="background-color: thistle; color: red; padding: 2rem">
  <h1>Hello world</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dicta.</p>
  <a href="">READ MORE</a>
</div>
```

---

## internal css

applied by creating a "style" tag in head tag, selecting and styling futher

```html
<head>
  <style>
    #main {
      background-color: thistle;
      color: #fff;
      padding: 2rem;
    }
  </style>
</head>
```

---

## External css

applied by linking an external ".css" file using the link tag in head

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

---

- `rel` : tells html what kind of relationship the file shares with the html file
- `href` : http references (link or path to css file)

---

```css
#main {
  background-color: thistle;
  color: #fff;
  padding: 2rem;
}
```
