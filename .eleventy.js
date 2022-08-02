const u = require("./utils");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets", "assets");

    eleventyConfig.addFilter("getRelated", (collection, page, tags )=> {
      return collection
        .filter(u.removeCurrent(page))
        .map(u.removeTag('post'))
        .map(u.setWeight(tags))
        .filter(item => item.data.weight > 0)
        .sort((a, b) => b.data.weight - a.data.weight);
    });

    return {
      dir: {
        input: "src",
        output: "dist"
      },
      
    }
  };