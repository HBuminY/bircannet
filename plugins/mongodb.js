const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
    fastify.register(require('fastify-mongodb'),{
        url : "mongodb+srv://hbuminy:zrN7l1IaEUHE7IPA@cluster0.f9bdy.mongodb.net/Cluster0?retryWrites=true&w=majority"
    });
};

module.exports = fastifyPlugin(dbConnector);