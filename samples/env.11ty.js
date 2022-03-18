module.exports = {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: (data) => `/samples/${data.sample.fileSlug}/app/.env`,
      pagination: {
        data: "collections.samples_ts",
        alias: "sample",
        size: 1,
      },
    };
  },

  render() {
    return `VITE_GOOGLE_MAPS_API_KEY="${process.env.GOOGLE_MAPS_SANDBOX_API_KEY}"`;
  },
};
