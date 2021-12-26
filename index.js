//Imports
const fastify = require('fastify')({logger: true});
const path = require("path");


//Decorations
fastify.decorate("maindir", __dirname);


//Fastify Registers
fastify.register(require("./plugins/mongodb"));
fastify.register(require('./plugins/routes'));
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public')
});
fastify.register(require('fastify-env'), {
    dotenv:true,
    schema:{
        type: 'object',
        properties:{
            dbURI:{
                type:'string',
                default:''
            }
        },
        required:['dbURI']
    }
});
fastify.ready(err=> err ? console.log("An error occured while loading plugins:\n"+err) : "plugins loaded succesfully");

//Listening to Requests
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})