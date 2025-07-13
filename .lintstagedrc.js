import path from "path";

const buildEslintCommand = (filenames) =>
  `eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")} --fix`;

const buildNextEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "*.{ts,tsx}": [
    buildPrettierCommand,
    buildEslintCommand,
    buildNextEslintCommand,
  ],
  "*.{js,jsx,json,md,css,html}": [buildPrettierCommand],
};
