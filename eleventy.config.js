import eleventySass from "@11tyrocks/eleventy-plugin-sass-lightningcss";

export default function (eleventyConfig) {
  //
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addWatchTarget("./_assets/css/scss/base/");
  eleventyConfig.addWatchTarget("./_assets/css/scss/homepage/");
};
