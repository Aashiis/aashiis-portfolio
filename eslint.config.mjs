import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      quotes: "off", // If you use a single quote in JSX, escape it as &apos; or &#39;
      "react/no-unescaped-entities": "off", // Disable warning for unescaped entities like '
    },
  },
];

export default eslintConfig;