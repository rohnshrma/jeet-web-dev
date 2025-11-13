_css : cascading style sheet_

- `inline` : applied on the html tag itself using the "style" attribute
- `internal` : applied by creating a "style" tag in head tag, selecting and styling further
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

`HTML CODE`

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

---

- `rel` : tells html what kind of relationship the file shares with the html file
- `href` : hypertext references (link or path to css file)

---

`CSS CODE`

```css
#main {
  background-color: thistle;
  color: #fff;
  padding: 2rem;
}
```

---

## Types of Selectors

- `*` `all selector`: Selects every element in HTML.
- `tag name`: Selects elements by their tag name, e.g., `h1`, `p`, `a`.
- `#id` `id selector`: Selects an element by its unique `id`, using `#`.
- `.class` `class selector`: Selects elements by their shareable `class`, using `.`.

`*` `All Selector`

```css
* {
  color: red;
}
```

`tag name`

```css
h1 {
  border: 1px solid salmon;
}
```

`.` `class selector`

```css
.para {
  border: 2px solid black;
}
```

`#` `id selector`

```css
#main {
  background-color: grey;
}
```

---

## ID vs Class

The `id` and `class` selectors are used to target specific elements in CSS, but they differ in their purpose and usage. The table below summarizes their key differences:

| Feature         | `id` Selector                                          | `class` Selector                                                 |
| --------------- | ------------------------------------------------------ | ---------------------------------------------------------------- |
| **Syntax**      | Uses `#` (e.g., `#main`)                               | Uses `.` (e.g., `.highlight`)                                    |
| **Uniqueness**  | Must be unique per HTML page                           | Can be reused on multiple elements                               |
| **Purpose**     | Targets a single, specific element                     | Targets multiple elements for shared styling                     |
| **Specificity** | Higher specificity in CSS                              | Lower specificity than `id`                                      |
| **Example**     | `<div id="main">` styled with `#main { color: blue; }` | `<p class="highlight">` styled with `.highlight { color: red; }` |

- **Note**: Use `id` for unique elements like a specific section or container. Use `class` for reusable styles across multiple elements, such as buttons or text highlights.

---

## CSS Properties for Text Styling

The following CSS code styles `h1` and `p` elements using various properties to control text appearance and layout. The tables below explain each property, its purpose, and its values.

### Styling for `h1` Elements

The `h1` selector applies styles to heading elements, focusing on text color, font, and shadow effects.

| Property         | Value Example                  | Description                                                                     |
| ---------------- | ------------------------------ | ------------------------------------------------------------------------------- |
| `color`          | `red`                          | Sets the text color. Accepts color names, hex codes, RGB, etc.                  |
| `font-family`    | `Arial, Helvetica, sans-serif` | Defines the font stack, with fallback fonts if the primary font is unavailable. |
| `font-weight`    | `500`                          | Sets text boldness (100–900; 400 is normal, 700 is bold).                       |
| `letter-spacing` | `10px`                         | Adjusts spacing between characters. Positive or negative values are allowed.    |
| `font-size`      | `60px`                         | Sets the text size, typically in pixels, rem, or em units.                      |
| `text-shadow`    | `-10px -10px 4px black`        | Adds a shadow to text (x-offset, y-offset, blur radius, color).                 |
| `font-style`     | `italic`                       | Sets the text style (`normal`, `italic`, or `oblique`).                         |

**Example**:

```css
h1 {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  letter-spacing: 10px;
  font-size: 60px;
  text-shadow: -10px -10px 4px black;
  font-style: italic;
}
```

---

## CSS Properties for Paragraph (`p`) Styling

The `p` selector styles paragraph elements to control text alignment and line spacing. The table below explains each property used in the CSS code.

| Property      | Value Example | Description                                                                                                   |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| `text-align`  | `justify`     | Aligns text within the paragraph: `left` (default), `center`, `right`, or `justify` (even spacing).           |
| `line-height` | `1.15`        | Sets the spacing between lines, using unitless values, pixels, or percentages. Default is approximately 1.15. |

**Example**:

```css
p {
  text-align: justify;
  line-height: 1.15;
}
```
