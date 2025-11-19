# CSS Box Model & Backgrounds

Quick beginner notes + copy/paste snippets for the box model and popular background tricks.

---

## 1. Box Model Basics
Every element is a rectangle with `content`, `padding`, `border`, and `margin`.

**HTML**
```html
<section class="box-demo">
  <h2>Box Model</h2>
  <p>Padding adds space *inside* the border, margin adds space *outside*.</p>
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

- `width/height`: size of the content box.
- `padding`: inside spacing.
- `border`: outline around padding.
- `margin`: outside spacing.

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

## 3. `background-image` / `background-repeat`
`background-image` loads the picture, `background-repeat` controls tiling (`repeat`, `repeat-x`, `repeat-y`, `no-repeat`).

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
Moves the image within the box. Use keywords (`top`, `center`, etc.) or pixel offsets.

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
Controls how large the background image is drawn:
- `cover`: fills the box (may crop).
- `contain`: shows entire image (may letterbox).
- Exact sizes like `200px` also work.

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
`linear-gradient()` draws a smooth color blend like an image.

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

## 7. Background Image from URL (with fallback color)

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
- Use dev tools to toggle padding/border/margin and watch the box change.
- Layer properties: color + image + gradients work together.
- Try different sizes/positions to see how `cover`, `contain`, and `no-repeat` behave.

