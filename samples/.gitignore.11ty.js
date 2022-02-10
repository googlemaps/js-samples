module.exports = {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: (data) => `/samples/${data.sample.fileSlug}/app/.gitignore`,
      pagination: {
        data: "collections.samples_ts",
        alias: "sample",
        size: 1,
      },
    };
  },
  render() {
    return `.env
.parcel-cache
node_modules
`;
  },
};
