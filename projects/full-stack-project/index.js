import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './utils/db.js'
//import all routes
import userRoutes from './routes/user.routes.js'


dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about us page')
})

app.get('/contact', (req, res) => {
    res.send('contact us page')
})

//Connect to db
db();

app.use("/api/vi/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
