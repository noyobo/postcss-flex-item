# PostCSS Flex Item

<p class="badges">
	<a href="https://github.com/noyobo/postcss-flex-item/actions?workflow=Node.js+CI">
		<img src="https://github.com/noyobo/postcss-flex-item/workflows/Node.js%20CI/badge.svg" alt="CI build status" />
	</a>
	<a href="https://codecov.io/gh/noyobo/postcss-flex-item">
		<img src="https://img.shields.io/codecov/c/github/noyobo/postcss-flex-item/1.x.svg" alt="Codecov" />
	</a>
	<a href="https://www.npmjs.com/package/postcss-flex-item">
		<img alt="npm" src="https://img.shields.io/npm/v/postcss-flex-item" />
	</a>
</p>

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
.flex_foo {
  flex: 1;
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
