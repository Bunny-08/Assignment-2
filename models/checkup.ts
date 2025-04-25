import mongoose from "mongoose"

const CheckupSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dentistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dentist",
    required: true,
  },
  requestDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // URL to the image
    },
  ],
  result: {
    diagnosis: String,
    recommendations: String,
    followUpDate: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Checkup || mongoose.model("Checkup", CheckupSchema)
