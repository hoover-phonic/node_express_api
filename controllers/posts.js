import { v4 as uuidv4 } from 'uuid'

//Sample Database
let posts = []

//Function to extract all blog posts
export const getPosts = (req, res) => {
  res.send(posts)
}

//Function to create a new blog post
export const createPost = (req, res) => {
  const post = req.body

  posts.push({ ...post, id: uuidv4() })

  res.send(`Blog post with the title ${post.title} added to the database!`)
}

//Function to get a particular post
export const getParticularPost = (req, res) => {
  const { id } = req.params

  const foundUser = posts.find((post) => post.id == id)
  res.send(foundUser)
}

//Function to delete a post
export const deletePost = (req, res) => {
  const { id } = req.params

  posts = posts.filter((post) => post.id !== id)

  res.send(`Blog post with the id ${id} deleted from the database`)
}

//Function to update a post
export const updatePost = (req, res) => {
  const { id } = req.params

  const { title, content } = req.body

  const post = posts.find((post) => post.id === id)

  if (title) post.title = title
  if (content) post.content = content

  res.send(`Blog post with the id ${id} has been updated`)
}
