// import json server 
const jsonServer = require('json-server')

// create a json server app
const server = jsonServer.create()

// setup path for db.json
const router = jsonServer.router("db.json")

// Returns middle ware used by json server
const middleware = jsonServer.defaults()

// setup port
const port = process.env.PORT || 4000

// Use router, middleware in server
server.use(middleware)
server.use(router)

// app listen
server.listen(port,()=>{
    console.log(`Json Server Started at port ${port}`);
})