import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import Checkup from "@/models/checkup"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const checkup = await Checkup.findById(params.id)
      .populate("dentistId", "userId")
      .populate("patientId", "name email")

    if (!checkup) {
      return NextResponse.json({ error: "Checkup not found" }, { status: 404 })
    }

    return NextResponse.json({ checkup })
  } catch (error) {
    console.error("Error fetching checkup:", error)
    return NextResponse.json({ error: "Failed to fetch checkup" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const data = await request.json()

    const checkup = await Checkup.findById(params.id)

    if (!checkup) {
      return NextResponse.json({ error: "Checkup not found" }, { status: 404 })
    }

    // Update checkup fields
    if (data.status) checkup.status = data.status
    if (data.description) checkup.description = data.description
    if (data.images) checkup.images = data.images

    // Update result if provided
    if (data.result) {
      checkup.result = {
        diagnosis: data.result.diagnosis,
        recommendations: data.result.recommendations,
        followUpDate: data.result.followUpDate ? new Date(data.result.followUpDate) : undefined,
      }
    }

    await checkup.save()

    return NextResponse.json({ message: "Checkup updated successfully", checkup })
  } catch (error) {
    console.error("Error updating checkup:", error)
    return NextResponse.json({ error: "Failed to update checkup" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const checkup = await Checkup.findByIdAndDelete(params.id)

    if (!checkup) {
      return NextResponse.json({ error: "Checkup not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Checkup deleted successfully" })
  } catch (error) {
    console.error("Error deleting checkup:", error)
    return NextResponse.json({ error: "Failed to delete checkup" }, { status: 500 })
  }
}
