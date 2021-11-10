# [**TailwindCSS**](tailwindcss.com/docs/installation)
This is a repository created in order to learn how to use [Tailwind Css](https://tailwindcss.com) in deep, all the key information will be added to this README file.

## Table of contents
- [**CDN**](#cdn)
- [**Tailwind-cli**](#tailwind-cli)
- [**Vite**](#vite)
- [**Resources**](#resources)

![](https://raw.githubusercontent.com/bradlc/vscode-tailwindcss/master/packages/vscode-tailwindcss/.github/banner-dark.png)

## [**CDN**](https://tailwindcss.com/docs/installation#using-tailwind-via-cdn) 
Tailwind can be used without configuring anything just by adding the file via CDN. This isn't recommended due to you're loading all the file without considering how much of it will be used in the project, this may be useful only when making MVPs of ideas (to make it faster).

```
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"> 
```

## [**Tailwind-cli**](https://tailwindcss.com/docs/installation#using-tailwind-cli)
Tailwind can also be added by the console by using [Node.js](https://nodejs.org/en/). The requirements aren't that difficult, you only have to install **tailwind-cli** with the **npx** command (this command is installed alongside [Npm](https://npmjs.com) so you don't have to worry).

```
    npx tailwind-cli
```

> **Note:** using the console allows you to have more opportunities of personalization with respect to the output, the options will be listed if the **npx tailwindcss --help** is typed.

Here, the input file should include the **@tailwind** directive to specify to the console or tasks runner which Tailwind Css layers we'd like to download. As options we have the **base** layer which is meant to be the normalize with some little tweaks, the **components** layer which is meant to be a helper for making layouts easier, and the **utilities** layer which is basically Tailwind itself.

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

## [**Vite**](https://vitejs.dev/guide/)
As the third option you can the possibility of use Tailwind alongside a tasks runner such as [Webpack](https://webpack.js.org), [Gulp](https://gulpjs.com), or, as in this case, [Vite](https://vitejs.dev).

* First, you have to initialize the project with Npm by using the **npm init** command.

``` 
    npm init
```

> **Note:** here you'll have to fill the basic information about the project.

* Then, you'll need to install the **tailwindcss**, **postcss**, **autoprefixer** and **vite** dependencies.

```
    npm install -D (--save-dev) tailwindcss postcss autoprefixer vite
```

* Just after it you'll have to build a TailwindCSS config file for postcss (which you can do by using Tailwind-cli) by using the **npx tailwindcss init -p** (the -p stands for --postcss).

```
    npx tailwindcss init -p
```

This command will create two config files, one called **postcss.config.js** and other **tailwind.config.js**, the former will be the place where you'll be able to costumize Post Css,the latter will be the place where you'll have to come for costumize Tailwind.

* Continuing, the next step is to run a server with vite which you'll be able to do by running the **npm run dev** command. Here's important to add *"dev": "vite"* to the **scripts** section on the package.json file first.

```
    npm run dev
```

### [**Postcss-cli**]()
Now, after the creation of both config files, **tailwind.config.js** and **postcss.config.js** what's next is the installation of **postcss-cli** with node by running the **npm install -g postcss-cli** command.

```
    npm install -g postcss-cli
```

Just then what'll be next is to run the compilation based on the **postcss.config.js** file, you get that by doing this:

```
    postcss postcss.config.js input.css -o output.css 
```

Something important that I added to the project was the PostCSS plugin **import** in order to use the **@import** at-rule to load the Tailwind layers instead of the **@tailwind** directive.

> **Note:** when you are ready for production you should compile only those classes that were used in order to optimize the final version of the stylesheet, you get this by using the **purge** object/array within the **tailwind.config.js** file.

## Resources 📚
- [Installation](https://tailwindcss.com/docs/installation)
- [Optimizing for production](https://tailwindcss.com/docs/optimizing-for-production)
- [Using with preprocessors](https://tailwindcss.com/docs/using-with-preprocessors)
- [Configuration](https://tailwindcss.com/docs/configuration)