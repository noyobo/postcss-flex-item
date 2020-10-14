# PostCSS Flex Item

[PostCSS] plugin separate the flex child element style into a selector.

将 flex 子元素样式分为选择器。

[postcss]: https://github.com/postcss/postcss

```css
.foo {
  color: red;
  felx: 1;
}
```

```css
.foo {
  color: red;
}
.flex_foo {
  felx: 1;
}
```

## Required

- `postcss@^7.0.0`
- `postcss-loader@^3.0.0`

## Options

```js
{
  prefix: 'flex_'; // 子元素样式前缀
  validSelector: function (rule.selector) { // 有效的选择器
    return true; // 返回 false 则不处理
  }
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
+   require('postcss-flex-item', { prefix: 'flex_' }),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
