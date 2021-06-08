import { v4 as uuidv4 } from 'uuid'
import PostBlog from '../models/postBlog.js'
//Sample Database
let posts = []

//Function to extract all blog posts
export const getPosts = async (req, res) => {
  try {
    const postBlogs = await PostBlog.find()
    res.status(200).json(postBlogs)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

//Function to create a new blog post
export const createPost = async (req, res) => {
  const post = req.body
  const newBlog = new PostBlog(post)

  try {
    await newBlog.save()

    res.status(201).json(newBlog)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const getParticularPost = async (req, res, next) => {
  let post
  try {
    post = await PostBlog.findById(req.params.id)
    if (post == null) {
      return res.status(404).json({ message: 'Cannot find blog post' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.post = post
  next()
}
