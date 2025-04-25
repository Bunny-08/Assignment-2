import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import Checkup from "@/models/checkup"

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()

    const data = await request.json()

    // Validate request data
    if (!data.patientId || !data.dentistId || !data.requestDate || !data.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new checkup request
    const checkup = new Checkup({
      patientId: data.patientId,
      dentistId: data.dentistId,
      requestDate: new Date(data.requestDate),
      description: data.description,
      images: data.images || [],
      status: "pending",
    })

    await checkup.save()

    return NextResponse.json({ message: "Checkup request created successfully", checkup }, { status: 201 })
  } catch (error) {
    console.error("Error creating checkup request:", error)
    return NextResponse.json({ error: "Failed to create checkup request" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const patientId = searchParams.get("patientId")
    const dentistId = searchParams.get("dentistId")
    const status = searchParams.get("status")

    const query: any = {}

    if (patientId) query.patientId = patientId
    if (dentistId) query.dentistId = dentistId
    if (status) query.status = status

    const checkups = await Checkup.find(query)
      .sort({ createdAt: -1 })
      .populate("dentistId", "userId")
      .populate("patientId", "name email")

    return NextResponse.json({ checkups })
  } catch (error) {
    console.error("Error fetching checkups:", error)
    return NextResponse.json({ error: "Failed to fetch checkups" }, { status: 500 })
  }
}
