# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

---

## 🛠 Installation

You can use either **Yarn** or **npm** to install dependencies.

### Using Yarn (recommended)
```bash
yarn
```
### Or using npm
```bash
npm install
```
### 🚀 Local Development

### Using Yarn
```bash
yarn start
```
### Or using npm
```bash
npm run start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 📦 Build

### Using Yarn
```bash
yarn build
```
### Or using npm
```bash
npm run build
```
This command generates static content into the build directory and can be served using any static content hosting service.

### 🚀 Deployment

If you’re using GitHub Pages for hosting, these commands help you build and deploy the site.

### Using Yarn

### With SSH:
```bash
USE_SSH=true yarn deploy
```
### Without SSH:
```bash
GIT_USER=<Your GitHub username> yarn deploy
```
### Or using npm (if deploy script is defined)
```bash 
USE_SSH=true npm run deploy
# or
GIT_USER=<Your GitHub username> npm run deploy
```
💡 Make sure the deploy script is defined in your package.json. If not, prefer using Yarn for deployment.