//Imports
const fastify = require('fastify')({logger: true});
const path = require("path");
const dbURI ="mongodb+srv://hbuminy:zrN7l1IaEUHE7IPA@cluster0.f9bdy.mongodb.net/Cluster0?retryWrites=true&w=majority";
const mongoose = require("mongoose");

//Decorations
fastify.decorate("maindir", __dirname);
fastify.decorate("db", mongoose.connection);

//Fastify Registers
fastify.register(require('fastify-formbody'));
fastify.register(require('./plugins/routes'));
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public')
});
fastify.ready(err=> err ? console.log("An error occured while loading plugins:\n"+err) : "plugins loaded succesfully");

//Listening to Requests
mongoose.connect(dbURI, ()=>{
    fastify.listen(3000, function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    });
}, e=>{if(e){throw e}});