# tmox-react

A tiny utility function that combines the power of [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) for smarter Tailwind CSS class merging.

Github repository link: [tmox-react](https://github.com/GolamRafi27oo/tmox-react)

Package link: [npm tmox-react](https://www.npmjs.com/package/tmox-react?activeTab=readme)

---

## 🚀 Features

- Combines conditional class names using `clsx`
- Automatically merges conflicting Tailwind CSS classes using `tailwind-merge`
- Lightweight and tree-shakable
- TypeScript ready

---

## 📦 Installation

Install with **npm**, **yarn**, or **pnpm**:

```bash
# npm
npm install tmox-react

# yarn
yarn add tmox-react

# pnpm
pnpm add tmox-react

```

```bash
# import
import { tmox-react } from tmox-react
```

```javaScript
#example

import { tmox } from 'tmox-react';

const isEnabled = true;
const isSmall = false;

const exampleWithObject = tmox(
  "text-lg font-semibold",
  {
    "opacity-100": isEnabled,
    "opacity-50": !isEnabled,
    "p-2": isSmall,
    "p-4": !isSmall, // This will be included
    "text-center": true // Always included
  }
);

// Result: "text-lg font-semibold opacity-100 p-4 text-center"
console.log(exampleWithObject);

```
