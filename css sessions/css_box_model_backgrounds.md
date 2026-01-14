# CSS Box Model & Backgrounds

Simple Indian-English notes plus copy/paste snippets for the box model and the most-used background properties.

---

## 1. Box Model Basics
Think of every element as a dabba (box) made of four layers: `content`, `padding`, `border`, and `margin`.

**HTML**
```html
<section class="box-demo">
  <h2>Box Model</h2>
  <p>Padding adds space inside the border, margin adds space outside.</p>
</section>
```

**CSS**
```css
.box-demo {
  width: 250px;
  border: 4px solid #f94144;
  padding: 20px;
  margin: 30px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
}
```

- `width/height`: size of the content area only.
- `padding`: inside spacing that pushes text away from the border.
- `border`: outline around the padding.
- `margin`: outside spacing that keeps distance from other elements.

### Padding, Border, Margin Examples
Below example shows the difference plus both long-hand and shorthand syntax.

**HTML**
```html
<div class="spacing-demo">
  <p>Look at the gap inside (padding) and outside (margin).</p>
</div>
```

**CSS**
```css
/* Long-hand values for each side */
.spacing-demo {
  padding-top: 20px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;

  margin-top: 15px;
  margin-right: 40px;
  margin-bottom: 15px;
  margin-left: 40px;

  border-top: 3px solid #f3722c;
  border-right: 3px dashed #f3722c;
  border-bottom: 3px solid #f3722c;
  border-left: 3px dashed #f3722c;
}

/* Same thing using shorthand */
.spacing-demo {
  padding: 20px 30px 10px 30px; /* top right bottom left */
  margin: 15px 40px;            /* top/bottom, left/right */
  border: 3px solid #f3722c;    /* width style color */
  border-style: solid dashed;   /* top/bottom solid, left/right dashed */
}
```

- Shorthand order always goes `top right bottom left`.
- Two-value shorthand means `top/bottom`, `left/right` (e.g., `margin: 15px 40px`).
- `border` shorthand packs `border-width border-style border-color`. Change any part later (`border-style`) to override specific sides.

---

## 2. `background-color`
Fills the content + padding area with a solid color.

**HTML**
```html
<div class="bg-color-demo">Colorful box</div>
```

**CSS**
```css
.bg-color-demo {
  padding: 1rem;
  background-color: #90be6d;
  color: #10310e;
}
```

---

## 3. `background-image` + `background-repeat`
`background-image` loads the picture. `background-repeat` says if the picture should tile (`repeat`, `repeat-x`, `repeat-y`, or `no-repeat`).

**HTML**
```html
<div class="bg-repeat-demo">Pattern background</div>
```

**CSS**
```css
.bg-repeat-demo {
  padding: 2rem;
  color: #fff;
  background-image: url("https://picsum.photos/100");
  background-repeat: repeat;
}
```

---

## 4. `background-position`
Moves the picture inside the box. Use keywords like `top`, `center`, `bottom`, `left`, `right` or give exact pixel values.

**HTML**
```html
<div class="bg-position-demo">Background positioned bottom right</div>
```

**CSS**
```css
.bg-position-demo {
  height: 150px;
  padding: 1rem;
  border: 2px dashed #577590;
  background-image: url("https://picsum.photos/200");
  background-repeat: no-repeat;
  background-position: right bottom;
}
```

---

## 5. `background-size`
Controls how large the picture should be drawn:
- `cover`: fill the whole box (extra parts get cropped).
- `contain`: show the full picture (empty gaps may appear).
- Exact sizes: `200px`, `50% 100%`, etc.

**HTML**
```html
<div class="bg-size-demo">Background cover</div>
```

**CSS**
```css
.bg-size-demo {
  height: 180px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://picsum.photos/600/400");
  background-size: cover;
  background-position: center;
}
```

---

## 6. Linear Gradients
`linear-gradient()` behaves like an image created from colors. You can set the angle and list of colors.

**HTML**
```html
<div class="gradient-demo">Linear Gradient</div>
```

**CSS**
```css
.gradient-demo {
  padding: 2rem;
  color: #fff;
  text-align: center;
  background-image: linear-gradient(135deg, #ff9a8b, #ff6a88, #ff99ac);
}
```

---

## 7. Background URL with fallback color

**HTML**
```html
<div class="bg-url-demo">Background from URL</div>
```

**CSS**
```css
.bg-url-demo {
  padding: 2rem;
  background-color: #f1f1f1; /* fallback color */
  background-image: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  background-position: center;
  color: #fff;
  border-radius: 8px;
}
```

---

## Practice Tips
- Use browser dev tools to toggle padding/border/margin and watch the box change live.
- Combine properties: solid color + image + gradient can all stack together.
- Play with different sizes/positions to see how `cover`, `contain`, `repeat`, and `no-repeat` react.

