export default {
  ckeditor: true,
  seo: {
    enabled: true,
  },
  "import-export-entries": {
    enabled: true,
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
