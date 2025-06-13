# ✨ curzr

A lightweight, customizable React cursor component with beautiful animated **cursor trails** (dots or liquid style), theme support, and context-aware hover detection.

Perfect for creative websites, portfolios, or any React app that needs a modern UX touch.

---

## 🚀 Features

- 🔵 **Custom Trail Effects** – Dots or liquid-like cursor trails
- 🎨 **Theme Support** – Easily configurable with your own styles
- 🧠 **Hover Context** – Detects hover state for interactive UI feedback
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
  <CursorProvider>
    <App />
  </CursorProvider>
);
```

### 2. Add the `Cursor` component

```jsx
import { Cursor } from 'curzr';

function App() {
  return (
    <>
      <Cursor />
      <h1>Hello World ✨</h1>
    </>
  );
}
```

### 3. Use `useCursorHover` for custom hover behavior

```jsx
import useCursorHover from 'curzr';

function Button() {
  const { onMouseEnter, onMouseLeave } = useCursorHover();

  return (
    <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      Hover Me
    </button>
  );
}
```

---

## 🛠️ Configuration (Optional)

You can customize your trail via the `theme` prop passed to the `CursorProvider`.

```jsx
<CursorProvider
  theme={{
    enableTrail: true,
    trailType: 'dots', 
    trailLength: 20,
    trailColor: 'rgba(0, 255, 255, 0.8)',
    trailSize: 12,
    trailSmoothing: 0.4,
    trailFade: true,
    baseSize: 12,
    hoverScale: 2.5,
    type: 'ring', // dot | ring | blob | square | custom
    color: '#00faff',
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
Renders the main cursor and trail.

### `useCursorHover()`
Returns `onMouseEnter`, `onMouseLeave` props for hover interactivity.

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