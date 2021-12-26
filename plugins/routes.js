//IMPORTS
const fs = require("fs");

//FUNCTIONS
function sendFile(fastifyObj, resObj, fileDir){
    resObj.type('text/html');
    const stream = fs.createReadStream(fastifyObj.maindir+"/"+fileDir, 'utf8');
    resObj.send(stream);
};

function isRegisterValid(){

}

//VARIABLES
const registerSchema = {
    body:{
        'email':{type:'string'},
        'name':{type:'string'},
        'password':{type:'string'},
        'password2':{type:'string'}
    }
}

const loginSchema = {
    body:{
        'email':{type:'string'},
        'password':{type:'string'}
    }
}

//ROUTES
async function routes(fastify, options) {
    //MONGOOSE
    const userModel = require(fastify.maindir+"/schemas/user.js");

    //GET
    fastify.get('/', async (req, res) => {
        try{
            sendFile(fastify, res, "/views/home.html");
        }catch(e){console.log(e)}
    });

    fastify.get('/giris', async (req, res) => {
        try{
            sendFile(fastify, res, "/views/login.html");
        }catch(e){console.log(e)}
    });

    fastify.get('/kayit', async (req, res) => {
        try{
            sendFile(fastify, res, "/views/register.html");
        }catch(e){console.log(e)}
    });

    fastify.get('/test', async (req, res) => {
        try{
            res.send(
                await userModel.countDocuments({username:"deliceoyna"})
            );
        }catch(e){res.send(e.message)};
    });

    //POST
    fastify.post('/kayit', {schema:registerSchema}, async (req, res) => {
        try{
            let user = new userModel(req.body);
            user.save(function (err) {
                if (err) return handleError(err)
                else {res.send("account created"); console.log("an account was created in mongodb atlas");};
            });
        }catch(e){console.log(e)}
    });

    fastify.post('/giris', {schema:loginSchema}, async (req, res) => {
        try{
            res.send(req.body);
        }catch(e){console.log(e)}
    });
}

module.exports = routes;