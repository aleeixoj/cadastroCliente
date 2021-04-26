import express from 'express'
import cors from 'cors'

const port = process.env.port || 3333

const app = express()

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
