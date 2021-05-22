"use strict"

const hapi = require("@hapi/hapi")
const { ApolloServer} = require("apollo-server-hapi")

const db = require("./db")
const routes = require("./routes")

const init = async () => {

  // initialize apolloServer
  // TODO: find a way to modularize type defs and resolvers
  const apolloServer = new ApolloServer({
    typeDefs: require('./api/ingredient/schema'),
    resolvers: require('./api/ingredient/resolvers')
  })
  await apolloServer.start()

  // Initializing hapiServer
  const hapiServer = hapi.server({
    port: 3000,
    host: "localhost",
  })

  await apolloServer.applyMiddleware({
    app: hapiServer,
  })

  apolloServer.installSubscriptionHandlers(hapiServer.listener)

  const dbc = await db()
  console.log(`📚  db ready at ${dbc.connection.host}/${dbc.connection.port}`)

  await hapiServer.start()
  console.log(`🚀  Server ready at ${hapiServer.info.uri}`)

  process.on("unhandledRejection", (err) => {
    console.log(err)
    process.exit(1)
  })

  // Setting up routes
  // hapiServer.route(routes)
}

init()
