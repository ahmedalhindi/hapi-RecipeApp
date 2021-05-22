"use strict"

const hapi = require("@hapi/hapi")
const db = require("./db")
const routes = require('./routes')

const init = async () => {
  // Initializing the server
  const server = hapi.server({
    port: 3000,
    host: "localhost",
  })

  const dbc = await db()
  console.log(`📚  db ready at ${dbc.connection.host}/${dbc.connection.port}`)

  await server.start()
  console.log(`🚀  Server ready at ${server.info.uri}`)

  process.on("unhandledRejection", (err) => {
    console.log(err)
    process.exit(1)
  })

  // Setting up routes
  server.route(routes)
}

init()
