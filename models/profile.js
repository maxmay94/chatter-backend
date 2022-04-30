import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  avatar: {
    type: String,
    required: false,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}