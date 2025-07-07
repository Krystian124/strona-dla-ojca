# My Project

A web application built with TypeScript, HTML, and SCSS.

## Features

- Modular component architecture
- TypeScript for type safety
- SCSS for styling
- Live development server

## Project Structure

```
my-project/
├── src/
│   ├── components/
│   │   ├── Component1/
│   │   ├── Component2/
│   │   ├── Component3/
│   │   └── Component4/
│   ├── styles/
│   └── index.ts
├── dist/          # Compiled output
├── index.html     # Main HTML file
├── package.json
└── tsconfig.json
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run build` - Build TypeScript and compile SCSS
- `npm run build:ts` - Build TypeScript only
- `npm run build:scss` - Compile SCSS only
- `npm run watch` - Watch for changes and rebuild automatically
- `npm run dev` - Build and start development server
- `npm start` - Build and start server without opening browser

## Development

The development server will automatically open your browser to `http://localhost:3000`. Any changes to TypeScript or SCSS files will trigger automatic rebuilding.

## Building for Production

1. Run the build command:
   ```bash
   npm run build
   ```

2. The compiled files will be in the `dist/` directory
3. Serve the `index.html` file and the `dist/` directory from your web server

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Clear the dist folder and rebuild: `rm -rf dist && npm run build`
3. Check that your browser supports ES modules
4. Ensure the development server is running on the correct port