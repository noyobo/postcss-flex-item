# PostCSS Flex Item

[PostCSS] plugin separate the flex child element style into a selector.

将 flex 子元素样式分为选择器。

[postcss]: https://github.com/postcss/postcss

```css
.foo {
  color: red;
  flex: 1;
}
```

```css
.foo {
  color: red;
}
.fooFlex {
  flex: 1;
}
```

## Options

```js
{
  suffix: 'Flex'; // 子元素样式后缀
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-flex-item
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-flex-item', { suffix: 'Flex' }),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
