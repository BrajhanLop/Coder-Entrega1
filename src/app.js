import express from 'express'
import { cartsRouter } from '../routes/carts.routes.js'
import { productRouter } from '../routes/products.routes.js'
const app = express()
const PORT = 8080
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/carts', cartsRouter)

app.listen(PORT, () => {
  console.log(`server running port ${PORT} `)
})
