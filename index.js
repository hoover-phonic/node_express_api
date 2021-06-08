import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import postsRoutes from './routes/posts.js'

// mongoose.connect(process.env.DATABSE_URL, { userNewUrlParser: true , useUnifiedTopology:true})
// .then(()=>app.listen(PORT, () =>
// console.log(`Server running on port: http://localhost:${PORT}`))

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/posts', postsRoutes)

app.get('/', (req, res) => res.send('Hello from Homepage'))

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
)
