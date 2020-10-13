const postcss = require('postcss');

module.exports = postcss.plugin('postcss-flex-item', function (opts) {
  const optoins = Object.assign({ prefix: 'flex_' }, opts);

  function processFlexChild(decl, flexRule) {
    flexRule.append({
      prop: decl.prop,
      value: decl.value,
      source: decl.source,
    });

    decl.remove();
  }

  return function (root) {
    root.walkRules((rule) => {
      let hasFlex = false;
      let flexRule = new postcss.rule({
        selector: rule.selector.replace(/([^.]+)$/, function (str, ident) {
          return optoins.prefix + ident;
        }),
      });
      rule.walkDecls((decl) => {
        if (['flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink'].includes(decl.prop)) {
          hasFlex = true;
          processFlexChild(decl, flexRule);
        }
      });
      if (hasFlex) {
        rule.before(flexRule);
      }
    });
  };
});
