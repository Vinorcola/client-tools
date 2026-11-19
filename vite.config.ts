import { defineConfig } from "vite-plus"

export default defineConfig({
    fmt: {
        printWidth: 120,
        tabWidth: 4,
        semi: false,
        singleQuote: false,
        trailingComma: "all",
        endOfLine: "lf",
        sortPackageJson: false,
        ignorePatterns: ["**/*.md", "package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml"],
        sortImports: {
            customGroups: [
                {
                    groupName: "local",
                    elementNamePattern: ["@Client/**", "@Config/**", "@Server/**"],
                },
            ],
            groups: [["builtin", "external"], "local", "internal", ["parent", "sibling"], "index", "unknown"],
        },
    },
    lint: {
        plugins: ["oxc", "typescript", "unicorn"],
        categories: {
            correctness: "warn",
        },
        env: {
            builtin: true,
        },
        ignorePatterns: ["build"],
        overrides: [
            {
                files: [
                    "client/**/*.{ts,tsx}",
                    "config/**/*.{ts,tsx}",
                    "migrations/**/*.js",
                    "server/**/*.ts",
                    "tsgen/**/*.ts",
                    "vite.config.ts",
                ],
                rules: {
                    "import/no-duplicates": [
                        "warn",
                        {
                            preferInline: true,
                        },
                    ],
                    "no-empty": [
                        "warn",
                        {
                            allowEmptyCatch: true,
                        },
                    ],
                    "no-unused-vars": [
                        "warn",
                        {
                            caughtErrors: "none",
                        },
                    ],
                    "perfectionist/sort-named-imports": [
                        "warn",
                        {
                            type: "alphabetical",
                            order: "asc",
                            ignoreCase: false,
                            groups: ["value-import", "type-import"],
                        },
                    ],
                    "react/jsx-curly-brace-presence": [
                        "warn",
                        {
                            props: "never",
                            children: "never",
                            propElementValues: "always",
                        },
                    ],
                    "react/only-export-components": [
                        "warn",
                        {
                            allowConstantExport: true,
                        },
                    ],
                    "typescript/consistent-type-imports": [
                        "warn",
                        {
                            fixStyle: "inline-type-imports",
                        },
                    ],
                    "typescript/no-floating-promises": "off",
                },
                plugins: ["import", "react"],
                env: {
                    browser: true,
                    es2018: true,
                    es2020: true,
                    node: true,
                },
            },
        ],
        options: {
            typeAware: true,
            typeCheck: true,
        },
        jsPlugins: [
            "eslint-plugin-perfectionist",
            {
                name: "vite-plus",
                specifier: "vite-plus/oxlint-plugin",
            },
        ],
        rules: {
            "vite-plus/prefer-vite-plus-imports": "error",
        },
    },
})
