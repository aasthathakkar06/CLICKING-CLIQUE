import mongoose from "mongoose";

const SocietySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  description: String,
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
}, { timestamps: true });

const Society = mongoose.models.Society || mongoose.model("Society", SocietySchema);

export default Society; // ✅ this line is IMPORTANT
