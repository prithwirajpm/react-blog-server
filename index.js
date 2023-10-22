// import json-server in index.js file
const jsonServer =require('json-server')


// create a server for media player app
const blogServer = jsonServer.create()

// set up path/route form json file
const router = jsonServer.router("db.json")

// Returns middlewares used by JSON Server
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.PORT

// use middlewares and router in server
blogServer.use(middlewares)
blogServer.use(router)

// to listen server fro resolving request from client
blogServer.listen(port,()=>{
    console.log(`blog server started at ${port} and waiting for client request`);
})