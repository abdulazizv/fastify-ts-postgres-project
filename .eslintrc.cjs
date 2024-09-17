module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    root: true,
    ignorePatterns: ["/dist/**", "/build/*", "/node_modules/*", "/docs*", "/src/lib/onvif/*"],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "single"],
        indent: ["error", "tab"],
        "@typescript-eslint/no-inferrable-types": "off",
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        sourceType: "module",
        ecmaVersion: 2022
    }
};