const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults()
const fs = require('fs')
const axios = require('axios')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.post('/categories/:catId', async (req, res) => {
    const jsonString = await fs.readFileSync("./data/db.json");
    const customer = JSON.parse(jsonString);
    await customer.categories.map((cat) => {
        if(cat.id === Number(req.params.catId)){
            cat.movies.push(req.body)
        }
    })
    const jsonStringfy= JSON.stringify(customer)
    await fs.writeFileSync('./data/db.json',jsonStringfy)
    return res.jsonp(customer)
  })




// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})