module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: `mongodb+srv://${env("MONGODBUSER")}:${env("MONGODBPASS")}@cluster0.28jr0.mongodb.net/ecommerce-shop?retryWrites=true&w=majority`,
      },
      options: {
        ssl: true,
      },
    },
  },
});
