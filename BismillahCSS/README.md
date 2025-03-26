[![BismillahCSS](https://raw.githubusercontent.com/BismillahCSS/bismillahcss-framework/statics/bismillah-css.jpg)](https://github.com/BismillahCSS/bismillahcss-framework)

[![GitHub](https://img.shields.io/badge/GitHub-BismillahCSS-blue?style=flat-square&logo=github)](https://github.com/your-username/bismillahcss-framework)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://github.com/your-username/bismillahcss-framework/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square)](https://github.com/your-username/bismillahcss-framework/releases)
[![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=flat-square)](https://github.com/your-username/bismillahcss-framework/issues)

BismillahCSS is a lightweight, customizable CSS framework designed to simplify the development of modern, responsive, and visually appealing web applications. It provides a rich set of utility classes, components, and design tokens to accelerate your development process.

---

## Features

- **Customizable Design Tokens**: Easily configure colors, typography, spacing, and more using CSS variables.
- **Responsive Utilities**: Built-in responsive classes for seamless mobile-first design.
- **Predefined Components**: Buttons, cards, alerts, grids, and more.
- **Dark Mode Support**: Built-in support for light and dark themes.
- **Animation Utilities**: Add transitions, hover effects, and animations effortlessly.
- **Modern CSS**: Uses CSS variables, flexbox, grid, and media queries for modern layouts.

---

## Installation

### Using NPM
```bash
npm install bismillahcss
```

### Using CDN
Add the following link to your HTML `<head>`:
```html
<link rel="stylesheet" href="https://cdn.example.com/bismillahcss.min.css">
```

---

## Quick Start

### Basic Usage
Add the `bismillah-container` class to your HTML elements:
```html
<div class="bismillah-container">
    <h1 class="bismillah-text-primary">Welcome to BismillahCSS</h1>
    <p class="bismillah-text-secondary">Build faster with pre-designed components.</p>
</div>
```

### Buttons
```html
<button class="bismillah-btn bismillah-btn-primary">Primary Button</button>
<button class="bismillah-btn bismillah-btn-secondary">Secondary Button</button>
```

### Cards
```html
<div class="bismillah-card">
    <h3 class="bismillah-card-header">Card Title</h3>
    <p class="bismillah-card-body">This is a simple card component.</p>
</div>
```

---

## Documentation

### Design Tokens
BismillahCSS uses CSS variables for easy customization. Add the following to your `:root` to override defaults:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --bg-color: #f8f9fa;
    --text-color: #333;
    --border-radius: 8px;
    --font-family: "Inter", sans-serif;
}
```

### Responsive Grid
```html
<div class="bismillah-grid bismillah-grid-cols-3">
    <div class="bismillah-card">Column 1</div>
    <div class="bismillah-card">Column 2</div>
    <div class="bismillah-card">Column 3</div>
</div>
```

### Dark Mode
Enable dark mode by adding the `dark-mode` class to the `<body>`:
```html
<body class="dark-mode">
    <h1 class="bismillah-text-light">Dark Mode Enabled</h1>
</body>
```

---

## Animations
### Hover Effects
```html
<button class="bismillah-btn bismillah-hover-scale">Hover Me</button>
```

### Keyframe Animations
```html
<div class="bismillah-bounce">Bouncing Element</div>
```

---

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a pull request.

---

## License

BismillahCSS is licensed under the [MIT License](LICENSE).

---

## Support

For questions or support, feel free to open an issue or contact us at [BismillahCSS](mailto:codewithbismillah@gmail.com).

---

Happy coding with **BismillahCSS**! 🎉  