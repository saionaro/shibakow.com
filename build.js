const fs = require("fs");
const critical = require("critical");
const { localized } = require("./dist/app.bundle.js");

const langs = localized.map(item => {
  fs.writeFileSync(`./dist/index.${item.code}.html`, item.content);
  return item.code;
});

const getSettings = lang => ({
  base: "dist/",
  src: `index.${lang}.html`,
  dest: `${lang === "ru" ? "" : `${lang}/`}index.html`,
  extract: true,
  inline: true,
  minify: true,
  css: [`dist/styles.css`]
});

const remove = path => fs.unlink(path, () => console.log(`Removed: ${path}`));

Promise.all(langs.map(lang => critical.generate(getSettings(lang)))).then(
  () => {
    const toRemove = [
      "./dist/app.bundle.js",
      "./dist/styles.css",
      ...langs.map(lang => `./dist/index.${lang}.html`)
    ];
    toRemove.forEach(remove);
  }
);
