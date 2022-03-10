# Learn Tailwind 🎨
Get started with some [Tailwind CSS](https://tailwindui.com/#components)
## Lastest version info (3.0.23)
According to the latest installation procedure [here](https://tailwindcss.com/docs/installation) we need to:
```
npm init -y
```
in order to create a our package.json
- then jump to install Tailwind on our project folder
```
npm install -D tailwindcss
```
- after that we need to create the "src" folder and the "public" folder
- create a file "tailwind.config.js" in the root directory i.e. same directory as package.json
```
npx tailwindcss init
```
- in case you want to extend the tailwindcss value of some methods or properties you need to work on the full "tailwind.config.js" which can be obtained from this command:
```
npx tailwindcss init --full
```
- Update the "tailwind.config.js" as follows:
```
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- then we need to create "styles.css" file in the "src" directory with the following line in it:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- then go into the "package.json" and delete any customize your script in order to have a dev and a build version:
```
"dev": "npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch --verbose",
"prod": "npx tailwindcss -i ./src/styles.css -o ./public/styles.css --minify"
```
this two script allow you to make your own compiled and ready to fire styles.css file, the first command tho, will remain listening while you develope the project in order to make any changes in real time.
The "prod" version will froze your style and compile the output.
- when everything is ready just go for it:
```
npm run dev
```
- et voilà we got our tailwind compiled css!!

## Icons used for this tutorial 🗜️
[heroicons](https://heroicons.dev/)