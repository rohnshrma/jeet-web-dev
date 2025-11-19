# CSS Positioning Basics

This guide explains every CSS `position` value with beginner-friendly language and tiny demo snippets. Each section provides the HTML to place on the page and a matching CSS snippet you can paste into a stylesheet or `<style>` tag.

---

## 1. `static` (default)
Static is the browser’s normal document flow. Elements appear one after another and ignore top/left offsets.

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
Relative keeps the element in the flow but lets you nudge it with `top`, `left`, `right`, or `bottom`. Space is still reserved in its original spot.

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
Absolute pulls the element out of the normal flow and positions it relative to the nearest ancestor that has a `position` other than `static`. If no such ancestor exists, it uses the page (the viewport) as a reference.

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
Fixed elements stay attached to the browser window. Scrolling the page does not move them.

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
Sticky starts like relative but sticks to a position once you scroll past a threshold. It needs a `top` (or bottom/left/right) value and enough space in the parent container.

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
- Copy each HTML snippet into the `<body>` of a test page and add the CSS to `style.css`.
- Tweak the colors, sizes, and offsets to see how layout shifts.
- Use browser dev tools (right-click → Inspect) to visualize the boxes and understand how positioning contexts work.

