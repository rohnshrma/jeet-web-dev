# CSS Positioning Basics

Short notes for each CSS `position` type with tiny HTML + CSS blocks you can copy into any practice file.

---

## 1. `static` (default)
Static is the normal page flow. Items sit one after another and ignore top/left values.

**HTML**
```html
<section class="demo demo-static">
  <h2>Static Position</h2>
  <p>This paragraph stays in the normal flow.</p>
</section>
```

**CSS**
```css
.demo-static {
  position: static; /* this is actually the default */
  border: 2px solid #555;
  padding: 1rem;
  background-color: #f2f2f2;
}
```

---

## 2. `relative`
Relative keeps the element in flow but lets you nudge it using `top`, `left`, `right`, or `bottom`. The original space is still kept.

**HTML**
```html
<section class="demo demo-relative">
  <h2>Relative Position</h2>
  <p>This box is moved 20px down and 30px right.</p>
</section>
```

**CSS**
```css
.demo-relative {
  position: relative;
  top: 20px;
  left: 30px;
  border: 2px dashed #0077b6;
  padding: 1rem;
  background-color: #e0f7ff;
}
```

---

## 3. `absolute`
Absolute takes the element out of flow and positions it based on the first parent that is not static. If no such parent exists, it uses the whole page.

**HTML**
```html
<section class="demo demo-absolute-wrapper">
  <h2>Absolute Position</h2>
  <div class="demo-absolute">
    I sit 10px from the wrapper’s top-right corner.
  </div>
  <p>The wrapper still takes up space, but the absolute box does not.</p>
</section>
```

**CSS**
```css
.demo-absolute-wrapper {
  position: relative; /* makes this the positioning context */
  border: 2px solid #8a2be2;
  padding: 2rem;
  background-color: #f7e9ff;
}

.demo-absolute {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5rem 1rem;
  background-color: #c8a2ff;
  color: #1f1147;
  border-radius: 4px;
}
```

---

## 4. `fixed`
Fixed sticks to the browser window, so scrolling does not move it.

**HTML**
```html
<section class="demo demo-fixed">
  <h2>Fixed Position</h2>
  <p>Scroll to see the button stay put.</p>
</section>
<button class="back-to-top">Back to top</button>
```

**CSS**
```css
.demo-fixed {
  min-height: 200vh; /* makes the page tall so you can scroll */
  padding: 1rem;
  background: linear-gradient(#f8ffae, #43c6ac);
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 999px;
  background-color: #222;
  color: #fff;
  cursor: pointer;
}
```

---

## 5. `sticky`
Sticky behaves like relative till you scroll. After the scroll reaches the `top` (or other) value, it sticks there inside its parent box.

**HTML**
```html
<section class="demo demo-sticky-wrapper">
  <h2 class="demo-sticky-title">Sticky Header</h2>
  <p>Scroll inside this box. The heading will stick to the top.</p>
  <p>More filler content...</p>
  <p>Even more filler content...</p>
</section>
```

**CSS**
```css
.demo-sticky-wrapper {
  max-height: 200px;
  overflow-y: auto;
  border: 2px solid #ff6b6b;
  padding: 1rem;
  background-color: #ffecec;
}

.demo-sticky-title {
  position: sticky;
  top: 0;
  background-color: #ff6b6b;
  color: #fff;
  margin: 0;
  padding: 0.5rem;
}
```

---

## Practice Tips
- Copy each HTML snippet inside `<body>` and add the CSS into your stylesheet.
- Change colors, sizes, and offsets to see how the layout moves.
- Right-click → Inspect to see boxes and understand which parent controls the position.

