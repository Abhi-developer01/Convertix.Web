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
    // Add overrides or custom rules
    rules: {
      "react/no-unescaped-entities": "off", // ✅ disables the rule globally
      "@typescript-eslint/no-explicit-any": "off", // ✅ disables the rule globally
    },
  },
];

export default eslintConfig;
