import express from 'express'
import './database'
import { routes } from './routes'
import cors from 'cors'
const port = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => console.log(`Server is running on port ${port}`))
