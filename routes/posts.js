import express from 'express'
import {
  createPost,
  getPosts,
  getParticularPost,
  deletePost,
  updatePost,
} from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)

router.post('/', createPost)

router.get('/:id', getParticularPost)

router.delete('/:id', deletePost)

router.patch('/:id', updatePost)

export default router
