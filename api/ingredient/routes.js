const ingredient = require("./services")

module.exports = [
  {
    method: "GET",
    path: "/ingredients",
    handler: () => ingredient.getAll(),
  },
  {
    method: "GET",
    path: "/ingredients/:id",
    handler: (req, h) => ingredient.getId(req.payload),
  },
  {
    method: "POST",
    path: "/ingredients",
    handler: (req, h) => ingredient.new(req.payload),
  },
]
