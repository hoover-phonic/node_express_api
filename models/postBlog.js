import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

const PostBlog = mongoose.model('PostBlog', postSchema)

export default PostBlog
