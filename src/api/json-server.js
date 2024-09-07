const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(
  path.join(__dirname, "..", "public", "data.json")
);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// server.use((req, res, next) => {
//   if (req.method === "POST") {
//   }
//   next();
// });

server.use(router);

module.exports = server;
