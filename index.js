import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import postsRoutes from './routes/posts.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())

dotenv.config()

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(error.message))

mongoose.set('useFindAndModify', false)

app.use('/posts', postsRoutes)

app.get('/', (req, res) => res.send('Hello from Homepage'))
