const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addCollection("assignments", (collection) =>
    collection
      .getAll()
      .filter((x) => x.filePathStem.includes("assignment"))
      .sort((a, b) => a.fileSlug.localeCompare(b.fileSlug))
  );

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
