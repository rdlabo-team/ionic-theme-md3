# Breaking Changes
This is a comprehensive list of the breaking changes introduced in the major version releases of `@rdlabo/ionic-theme-ios26`

## Version 1.0.0

### change the import path of the SCSS files

Reorganized the folder structure after adding JavaScript files.

```diff
- @import '@rdlabo/ionic-theme-ios26/src/default-variables.scss';
+ @import '@rdlabo/ionic-theme-ios26/src/styles/default-variables.scss';
```

Note: The output path for the generated dist files remains unchanged.

### `--ios26-color-background-rgb` is renamed.
Changed the variable names for clarity.

```diff
  :root {
-   --ios26-color-background-rgb: 255, 255, 255;
+   --ios26-content-box-shadow-rgb: 255, 255, 255;
  }
```

### `--ion-color-**-brightness-rgb` is changed to `--ion-color-**-brightness`
Refactoring the styling removed the need to manipulate transparency.
```diff
  :root {
-   --ion-color-**-brightness-rgb: 130, 255, 255;
+   --ion-color-**-brightness: #96FEFF;
  }
```
