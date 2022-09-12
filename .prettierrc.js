module.exports = {
    semi: true,
    trailingComma: "es5",
    singleQuote: false,
    printWidth: 150,
    tabWidth: 2,
    bracketSpacing: true,
    overrides: [
        {
            files: "*.test.ts",
            options: {
                printWidth: 200,
            },
        },
    ],
};