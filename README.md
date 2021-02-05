# eslint-config-sanity

Shared eslint rules for official Sanity.io projects

## Installing

```bash
npm install --save-dev eslint-config-sanity
```

## Usage

Create an `.eslintrc` in the root of your project (or an `eslintConfig` entry in `package.json`) and extend the `sanity` config:

```json
{
  "env": {"node": true, "browser": true},
  "extends": ["sanity"]
}
```

Adjust `env` according to your use case, obviously.

## Usage: React

ESLint requires plugins to be peer dependencies (they resolve relative to the end-user project), as such you need to install an additional dependency if you're using React:

```bash
npm install --save-dev eslint-plugin-react
```

Then, make sure to extend `sanity/react` in your `.eslintrc`:

```json
{
  "extends": ["sanity/react"]
}
```

**Note**: It's not necessary to extend both `sanity` _and_ `sanity/react` - extending `sanity/react` will implicitly extend `sanity` first.

**Note:** If you're using TypeScript _and_ React, make sure you extend `sanity/react` _before_ `sanity/typescript`:

```json
{
  "extends": ["sanity/react", "sanity/typescript"]
}
```

## Usage: Typescript

ESLint requires plugins to be peer dependencies (they resolve relative to the end-user project), as such you need to install a few more dependencies if you're using typescript:

```bash
npm install --save-dev \
  typescript \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin
```

Then, make sure to extend `sanity/typescript` in your `.eslintrc`:

```json
{
  "extends": ["sanity/typescript"]
}
```

**Note**: It's not necessary to extend both `sanity` _and_ `sanity/typescript` - extending `sanity/typescript` will implicitly extend `sanity` first.

**Note:** If you're using TypeScript _and_ React, make sure you extend `sanity/react` _before_ `sanity/typescript`:

```json
{
  "extends": ["sanity/react", "sanity/typescript"]
}
```

## License

MIT © [Sanity.io](https://www.sanity.io/)
