const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/fengxiong/Desktop/my-site-ts/.cache/dev-404-page.js"))),
  "component---src-pages-home-tsx": hot(preferDefault(require("/Users/fengxiong/Desktop/my-site-ts/src/pages/home.tsx")))
}

