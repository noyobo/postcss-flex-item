module.exports = (opts) => {
  const optoins = Object.assign({ prefix: 'flex_' }, opts || {});
  return {
    postcssPlugin: 'postcss-flex-item',
    prepare() {
      const flexSelectors = new Map();
      function processFlexChild(decl, { Rule }) {
        const { selector } = decl.parent;
        let rule;
        if (flexSelectors.has(selector)) {
          rule = flexSelectors.get(selector);
        } else {
          rule = new Rule({
            selector: selector.replace(/([^.]+)$/, function (str, ident) {
              return optoins.prefix + ident;
            }),
          });

          flexSelectors.set(selector, rule);
        }

        rule.append({
          prop: decl.prop,
          value: decl.value,
          source: decl.source,
        });

        decl.remove();
      }

      return {
        OnceExit(root) {
          flexSelectors.forEach((rule) => {
            root.append(rule);
          });
        },
        Declaration: {
          flex: processFlexChild,
          order: processFlexChild,
          'flex-basis': processFlexChild,
          'flex-grow': processFlexChild,
          'flex-shrink': processFlexChild,
        },
      };
    },
  };
};
module.exports.postcss = true;
