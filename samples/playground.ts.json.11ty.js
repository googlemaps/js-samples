module.exports = {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: (data) =>
        `/samples/${data.sample.fileSlug}/playground/playground.ts.json`,
      pagination: {
        data: "collections.samples_ts",
        alias: "sample",
        size: 1,
      },
    };
  },

  render({ devDependencies }) {
    const files = {
      "index.ts": {
        label: "TypeScript",
      },
      "style.css": {
        label: "CSS",
      },
      "index.html": {
        label: "HTML",
      },
    };

    return JSON.stringify(
      {
        files,
      },
      null,
      2
    );
  },
};
