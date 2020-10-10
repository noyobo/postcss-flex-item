const postcss = require('postcss');
const path = require('path');

const plugin = require('..');
const { readFileSync, readJSONSync, existsSync, readdirSync, statSync } = require('fs-extra');

async function run(dir) {
  let opts = {};
  const input = readFileSync(path.join(dir, 'input.css')).toString();
  const output = readFileSync(path.join(dir, 'output.css')).toString();
  if (existsSync(path.join(dir, 'config.json'))) {
    opts = readJSONSync(path.join(dir, 'config.json'));
  }

  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });

  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

const features = readdirSync(__dirname).filter((d) => {
  return statSync(path.join(__dirname, d)).isDirectory();
});

features.forEach((dir) => {
  it(`Test case: ${dir}`, async () => {
    await run(path.join(__dirname, dir));
  });
});
