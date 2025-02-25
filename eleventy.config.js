import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import eleventySass from "@11tyrocks/eleventy-plugin-sass-lightningcss";

export default function (eleventyConfig) {
  // Add Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventySass);

  // Watch Targets
  eleventyConfig.addWatchTarget("./_assets/css/scss/base/");
  eleventyConfig.addWatchTarget("./_assets/css/scss/homepage/");
};

export const config = {
  pathPrefix: "/kees-kennel/"
}
