# ✨ curzr

A lightweight, customizable React cursor component with beautiful animated **cursor trails** (dots or liquid style), theme support, and context-aware hover detection.

Perfect for creative websites, portfolios, or any React app that needs a modern UX touch.

---

## 🚀 Features

- 🔵 **Custom Trail Effects** – Dots or liquid-like cursor trails
- 🎨 **Theme Support** – Easily configurable with your own styles
- 🧠 **Hover Context** – Detects hover state for interactive UI feedback (normal cursor only)
- 📦 **Tree-shakable** – Export only what you need
- ⚡ Built with **React 18+** and **Vite** optimized

---

## 📦 Installation

```bash
npm install curzr
# or
yarn add curzr
```

---

## 🧩 Usage

### 1. Wrap your app with `CursorProvider`

```jsx
// main.jsx or App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CursorProvider } from 'curzr';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CursorProvider theme={/* see below for examples */}>
    <App />
  </CursorProvider>
);
```

---

## ✨ Examples

### Example 1: **Normal Cursor** (dot, ring, blob, square, custom)

```jsx
// App.jsx
import { Cursor, CursorProvider, useCursorHover } from 'curzr';
import './../node_modules/curzr/dist/styles/cursor.css'; 

function App() {
  return (
    <>
      <Cursor />
      <button className="hover-target">Hover Me</button>
      <h1>Hello World ✨</h1>
    </>
  );
}

// In your CursorProvider:
<CursorProvider
  theme={{
    type: 'blob', // dot | ring | blob | square | custom
    baseSize: 32,
    hoverScale: 2,
    color: '#00faff',
    hoverColor: '#ff0000',           // Changes color on hover
    hoverBorder: '2px solid red',    // Changes border on hover
    hoverShadow: '0 0 10px #f0f',    // Adds shadow/glow on hover
    hoverBlendMode: 'difference',    // Changes blend mode on hover
    hoverTransition: 'all 0.5s ease-in-out', // Custom transition for hover
    hoverType: 'ring',               // Morphs shape to 'ring' on hover
    transition: 'transform 0.2s, width 0.2s, height 0.2s',
    styles: {
      mixBlendMode: 'difference',
      border: '2px solid #00faff',
      boxShadow: '0 0 10px #00faff',
    },
    // Trail options are not needed for normal cursor
  }}
>
  <App />
</CursorProvider>
```

- **Hover effect:** Works for normal cursor types (dot, ring, blob, square, custom) when you use the `hover-target` class or `useCursorHover` hook.

---

### Example 2: **Trail Cursor** (dots)

```jsx
// App.jsx
import { Cursor, CursorProvider, useCursorHover } from 'curzr';
import './../node_modules/curzr/dist/styles/cursor.css'; 

function App() {
  return (
    <>
      <Cursor />
      <h1>Cursor Trail Example ✨</h1>
    </>
  );
}

// In your CursorProvider:
<CursorProvider
  theme={{
    enableTrail: true,
    trailType: 'dots',
    trailLength: 24,
    trailColor: 'rgba(0, 255, 255, 0.8)',
    trailSize: 18,
    trailSmoothing: 0.3,
    trailFade: true,
    styles: {
      mixBlendMode: 'difference',
      border: 'none',
      boxShadow: 'none',
    },
    // The main cursor is hidden when trail is enabled
  }}
>
  <App />
</CursorProvider>
```

- **Note:** When `enableTrail` is `true` and `trailType` is `"dots"`, only the trail is shown and the main cursor is hidden.  
- **Hover effect:** Not applicable for trail cursor.

---

## 🛠️ Configuration (Optional)

You can customize your cursor or trail via the `theme` prop passed to the `CursorProvider`.

```jsx
<CursorProvider
  theme={{
    // For normal cursor:
    type: 'ring', // dot | ring | blob | square | custom
    baseSize: 24,
    hoverScale: 1.5,
    color: '#00faff',
    // For trail cursor:
    enableTrail: true,
    trailType: 'dots',
    trailLength: 20,
    trailColor: 'rgba(0, 255, 255, 0.8)',
    trailSize: 12,
    trailSmoothing: 0.4,
    trailFade: true,
    // Common styles:
    styles: {
      mixBlendMode: 'difference',
      border: '2px solid #00faff',
      boxShadow: '0 0 10px #00faff',
    },
  }}
>
  <App />
</CursorProvider>
```

---

## 🧠 API Summary

### `CursorProvider`
Provides context to the Cursor and other components.

### `Cursor`
Renders the main cursor and/or trail.

### `useCursorHover()`
Returns `onMouseEnter`, `onMouseLeave` props for hover interactivity (normal cursor only).

---

## 🎨 Cursor Types

| Type   | Description           |
|--------|-----------------------|
| dot    | Small circle          |
| ring   | Hollow ring with border |
| blob   | Organic blob shape    |
| square | Rounded square        |
| custom | Use image URL for shape |

---

## 🧪 Example

Live demo (coming soon) or check the example in the `example/` folder if bundled.

---

## 📂 File Structure

```
src/
├── components/
│   └── Cursor.jsx
├── context/
│   └── CursorContext.jsx
├── hooks/
│   └── useCursorHover.js
├── styles/
│   └── cursor.css
└── index.js (library entry point)
```

---

## 📜 License

MIT © 2025 Rajat Hande

---

## 💬 Feedback & Contributions

Pull requests, issues, and feature suggestions are welcome!  
Feel free to open an issue or fork and improve the package.