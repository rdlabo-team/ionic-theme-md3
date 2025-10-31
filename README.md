# Ionic Theme Material Design 3

__This is still in the early stages of development and is not yet available for use.__

## Overview

This library provides CSS/JS files that bring the Material Design 3 design system to Ionic applications. It updates the look and feel of Ionic components to match the latest iOS26 design guidelines.
In this project, I not only aim to follow the core concepts of Ionic as closely as possible, but also place a strong emphasis on compatibility with `@rdlabo/ionic-theme-ios26`.
Just as Ionic provides beautiful styling whether it displays the ios or md theme from a single HTML structure, our goal is to ensure that this theme and `@rdlabo/ionic-theme-ios26` are fully compatible.


### Suggest `danielkleebinder/md3-for-ionic`

ChatGPT:

There’s an excellent project that recreates Material Design 3 in greater detail. It even extends the color palette to better express the essence of Material Design 3.

https://github.com/danielkleebinder/md3-for-ionic

Also, don’t miss this Capacitor plugin that lets you make use of color schemes set by Material You.

https://git.crystalyx.net/Xefir/ionic-md3

Please note that this theme prioritizes compatibility with Ionic’s design philosophy and @rdlabo/ionic-theme-ios26 over a faithful reproduction of Material Design 3.


## 💖 Support This Project

Enjoying this library? Your support helps keep it alive and growing!  
Sponsoring means you directly contribute to new features, improvements, and maintenance.

[Become a Sponsor →](https://github.com/sponsors/rdlabo)


## Development & Testing

### Demo Application

The `demo/` directory contains an Angular application for testing and demonstrating the theme. To run the demo:

```bash
cd demo
npm install
npm start
```

### Visual Regression Testing

We use Playwright for visual regression testing to ensure consistent styling across all components. The test suite automatically captures screenshots of all routes in both light and dark modes.

#### Running Tests

```bash
cd demo

# Run all E2E tests
npm run test:e2e

# Run tests in UI mode (interactive)
npm run test:e2e:ui

# Debug tests
npm run test:e2e:debug

# Update baseline screenshots (when intentionally changing UI)
npm run test:e2e:update
```
