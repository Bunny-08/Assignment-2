import mongoose from "mongoose"

const DentistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  availability: [
    {
      day: String,
      startTime: String,
      endTime: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Dentist || mongoose.model("Dentist", DentistSchema)
