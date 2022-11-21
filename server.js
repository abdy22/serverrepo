const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleWares = jsonServer.defaults({
    static: "./build"
})

const port = process.env.port || 3000;

server.use(middleWares);
server.use(jsonServer.rewriter({
    "/api/*":"/$1",
}));

server.use(router);
server.listen(port, ()=>{
    console.log("Server is running on ",port);
})