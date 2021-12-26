//IMPORTS
const fs = require("fs");

//FUNCTIONS
function sendFile(fastifyObj, replyObj, fileDir){
    replyObj.type('text/html');
    const stream = fs.createReadStream(fastifyObj.maindir+"/"+fileDir, 'utf8');
    replyObj.send(stream);
};

//ROUTES
async function routes(fastify, options) {
    const collection = fastify.mongo.db.collection("users");

    fastify.get('/', async (request, reply) => {
        const result = await collection.find().toArray();
        return result;
    });

    fastify.get('/giris', async (request, reply) => {
        try{
            sendFile(fastify, reply, "/views/login.html");
        }catch(e){console.log(e)}
    });

    fastify.get('/kayit', async (request, reply) => {
        try{
            sendFile(fastify, reply, "/views/register.html");
        }catch(e){console.log(e)}
    });
}

module.exports = routes