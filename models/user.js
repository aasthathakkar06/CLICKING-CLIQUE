import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,      // Ensure the username is required
    unique: true,        // Ensure the username is unique
  },
  name: {
    type: String,
    required: true,      // Ensure the name is required
  },
  email: {
    type: String,
    required: true,      // Ensure the email is required
    unique: true,        // Ensure the email is unique
  },
  interests: {
    type: [String],
    default: [],         // Default is an empty array if no interests are provided
  },
  profile_image: {
    type: String,
    default: 'path/to/default-profile.jpg', // Default profile image if none is provided
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
