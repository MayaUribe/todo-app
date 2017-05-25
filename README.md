# Angular 2.0 Todo App

Angular 2.0 project for a simple todo app.

## Usage

Clone or copy this project, then use npm to fetch the dependencies:

```
npm install
```

If you haven't used gulp before, install it as a global:

```
npm install -g gulp
```

Now build the project:

```
gulp
```

You should see something like the following:

```
$ gulp
[08:13:14] Using gulpfile ~/Projects/angular2-seed/gulpfile.js
[08:13:14] Starting 'tslint'...
[08:13:14] Starting 'clean'...
[08:13:15] Finished 'tslint' after 303 ms
[08:13:15] Finished 'clean' after 295 ms
[08:13:15] Starting 'compile'...
[08:13:15] Starting 'copy:libs'...
[08:13:15] Starting 'copy:assets'...
[08:13:18] Finished 'copy:libs' after 2.86 s
[08:13:18] Finished 'copy:assets' after 2.86 s
[08:13:18] Finished 'compile' after 2.88 s
[08:13:18] Starting 'build'...
[08:13:18] Finished 'build' after 43 μs
[08:13:18] Starting 'default'...
[08:13:18] Finished 'default' after 16 μs
```

The built output is now in the `dist` folder - you can now start up a local development server to see the results:

---

## Hello World

Your Angular 2 seed is fully functioning!

---

For faster development cycles you can run the following:

```
gulp serve
```

This command runs the build and starts up a development server pointing at the output. The `src` folder is watched for changes with the development server reloading automatically when the changes have been built.

## Development tools

For Angular 2 / TypeScript development I am using the Atom editor with the **atom-typescript** plugin, which  together with **linter-ts**.
