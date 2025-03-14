## 1.Setup Development Environment

Install Node.js and npm on your machine - Done
Use Create Next App to initialize a new Next.js project. - Done

## 2.Project Structure Exploration

- package.json:
  Contains project metadata, scripts, dependencies, and configuration.

- package-lock.json:
  Auto-generated file that locks exact versions of installed dependencies for consistency.

## 3.JSX Implementation (Optional)

```jsx
export default function Assessment() {
  return (
    <div>
      <div>Assessment</div>
      <h2>Welcome to My Next.js App!</h2>
      <p>This is a reusable JSX component.</p>
    </div>
  );
}
```

## 4.Node.js and npm Usage

- Explain the role of Node.js in your project.

  - Node.js provides the environment that allows Next.js to run server-side logic, manage dependencies, and serve your application in development and production.

- List and describe at least three npm commands you used during the setup and development process.
  - npm init: Initializes a new project and creates package.json.
  - npm install: Installs all project dependencies from package.json.
  - npm run dev: Starts the Next.js development server for live development.

## 5.Dependencies Management

- Identify the dependencies and devDependencies in your package.json.

Dependencies:
These are packages required to run the project in production. They are essential for the application to function correctly and are needed for both building and running the project in a live environment.

Ex:
"dependencies": {
"next": "15.2.2",
"react": "^19.0.0",
"react-dom": "^19.0.0"
},

devDependencies
These are packages required only during development. They are needed to run tests, linting, formatting, build processes, or debugging, but are not needed in production environments.

Ex:
"devDependencies": {
"@eslint/eslintrc": "^3",
"@tailwindcss/postcss": "^4",
"eslint": "^9",
"eslint-config-next": "15.2.2",
"tailwindcss": "^4"
}

- Explain the difference between dependencies and devDependencies.

Dependencies
Purpose - Packages required for the app to run in production
Installed in - Both production and development environments
Examples - react, next
Command to Install - npm install <package-name>
Usage - Essential for the app's functionality

devDependencies
Purpose - Packages needed only during development (e.g., testing, bundling)
Installed in - Only in development environment
Examples - eslint, prettier, webpack, babel
Command to Install - npm install <package-name> --save-dev
Usage - Used for development tasks like building and testing

- Research and provide a brief history of React.js and Next.js, including key contributors and milestones.

React.js History:

Created by: Jordan Walke at Facebook.
Initial Release: 2013.

Key Milestones:

- 2013: React.js was first released as an open-source JavaScript library to build user interfaces.
- 2015: React was adopted by React Native, enabling mobile development using the same React concepts.
- 2017: React introduced the Hooks API, allowing developers to manage state and side effects without class components.
- 2020: React Server Components were introduced in experimental builds to enable server-side rendering with components.

Contributors:

Jordan Walke - (initial author).
Facebook - (major contributor and maintainer).
The React community - continually improves and adds features like Suspense and Concurrent Mode.

Next.js History:

Created by: Vercel (formerly Zeit), with contributions from Guillermo Rauch and the Vercel team.
Initial Release: 2016.

Key Milestones:

- 2016: Next.js was first released as a framework that simplifies server-side rendering (SSR) for React apps.
- 2017: Introduction of static site generation (SSG) and optimized routing features.
- 2020: Next.js 10 introduced Image Optimization, Automatic Static Optimization, and Internationalized Routing.
- 2021: Next.js 12 introduced Middleware, React 18 support, and Rust compiler, enhancing performance.
- 2023: Next.js continues to evolve with improved SSR, better integrations, and support for both static and dynamic applications.

Contributors:

Guillermo Rauch (CEO of Vercel).
The Vercel team and the open-source community.

- Install a third-party library that will be useful. (Ex: ky, clsx, framer-motion)

Install ky via npm:

```jsx
npm install ky
```

## Running the Project

```jsx
npm run dev

Ready on http://localhost:3000
```
