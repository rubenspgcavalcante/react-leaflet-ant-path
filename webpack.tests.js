// require all modules ending in "_test" from the
// current directory and all subdirectories
[
    require.context("./src/", true, /\.jsx$/)

].forEach(context => context.keys().forEach(context));

//# sourceMappingURL=webpack.tests.js.map