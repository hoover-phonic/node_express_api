import express from 'express'
import {
  createPost,
  getPosts,
  getParticularPost,
} from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)

router.post('/', createPost)

router.get('/:id', getParticularPost, (req, res) => {
  res.send(res.post)
})

router.delete('/:id', getParticularPost, async (req, res) => {
  try {
    await res.post.remove()
    res.json({ message: 'Deleted the Blog Post' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.patch('/:id', getParticularPost, async (req, res) => {
  if (req.body.title != null) {
    res.post.title = req.body.title
  }
  if (req.body.content != null) {
    res.post.content = req.body.content
  }

  try {
    const updatedblogpost = await res.post.save()
    res.json(updatedblogpost)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
