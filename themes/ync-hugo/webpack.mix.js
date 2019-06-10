const mix = require("laravel-mix")
const path = require("path")
const tailwindCss = require("tailwindcss")

mix.setPublicPath(path.normalize("assets"))
mix.setResourceRoot(path.normalize("src"))
mix.setResourceRoot("./../")

if (mix.inProduction()) {
  mix.options({
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  })
} else {
  mix.webpackConfig({ devtool: "inline-source-map" }).sourceMaps()
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

mix.webpackConfig({
  resolve: {
    alias: {
      "@": resolve("src/js"),
    },
  },
  
  output: {
    publicPath: path.normalize("/"),
    chunkFilename: "[name].js",
  },
  
  watchOptions: {
    ignored: /node_modules/,
  },
})

mix.js("src/js/app.js", "js/app.js").version()

// mix.extract([])

// mix.autoload({
//     jquery: ["$", "window.jQuery"],
// })

mix.postCss("src/sass/tailwind.css", "css/tailwind.css", [
  tailwindCss("src/js/tailwind.config.js"),
]).sass("src/sass/app.scss", "css/app.css").version()
