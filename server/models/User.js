import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  messages: [
    {
      prompt: String,
      reply: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});


const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
