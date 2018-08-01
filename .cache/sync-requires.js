// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/templates/blog-post.js")),
  "component---src-templates-product-page-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/templates/product-page.js")),
  "component---src-templates-team-page-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/templates/team-page.js")),
  "component---src-templates-about-page-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/templates/about-page.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/templates/tags.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/pages/index.js")),
  "component---src-pages-tags-index-js": preferDefault(require("/Users/yoanngloaguen/Documents/ghc_website/src/pages/tags/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/layout-index.json"),
  "blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.json"),
  "blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex.json"),
  "blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.json"),
  "products.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/products.json"),
  "team.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/team.json"),
  "about.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/about.json"),
  "tags-flavor.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/tags-flavor.json"),
  "tags-tasting.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/tags-tasting.json"),
  "tags-brewing.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/tags-brewing.json"),
  "tags-chemex.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/tags-chemex.json"),
  "tags-jamaica.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/tags-jamaica.json"),
  "tags-green-beans.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/tags-green-beans.json"),
  "dev-404-page.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/404.json"),
  "index.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/index.json"),
  "tags.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/tags.json"),
  "404-html.json": require("/Users/yoanngloaguen/Documents/ghc_website/.cache/json/404-html.json")
}