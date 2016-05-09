#React Study Group Boilerplate

This is boilerplate code for building an application using React. 

##Prerequisites
You should have node and npm installed.

##Install Dependencies
After cloning, run `npm install`.
This will install all the node modules listed in `package.json` as dependencies.

##Build
Run `gulp` to build, including the following tasks:
- compile scss to css
- compile JSX and es6 to es5 JavaScript, and bundle up the JavaScript files to be used in a module system (with Browserify)
- watch for changes to the relevant files, to rerun the above compile steps when files have been updated
- start a static server, serving up `index.html` at `localhost:3000`

The build process is defined in `gulpfile.js`.
