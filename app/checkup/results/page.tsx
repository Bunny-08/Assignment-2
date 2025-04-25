"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Download } from "lucide-react"
import { jsPDF } from "jspdf"

// Mock data - in a real app, this would come from an API
const checkupResults = [
  {
    id: "1",
    dentist: "Dr. Ramesh Rastogi",
    date: "2023-04-15",
    status: "completed",
    description: "Regular checkup and cleaning",
    result: {
      diagnosis: "Healthy teeth and gums. Minor plaque buildup on lower molars.",
      recommendations:
        "Continue regular brushing and flossing. Consider using an electric toothbrush for better plaque removal.",
      followUpDate: "2023-10-15",
    },
    images: ["/placeholder.svg?height=300&width=400"],
  },
  {
    id: "2",
    dentist: "Dr. Joe Nikhil Frank",
    date: "2023-06-22",
    status: "completed",
    description: "Pain in upper right molar",
    result: {
      diagnosis: "Early stage cavity in upper right molar (tooth #3).",
      recommendations: "Filling recommended. Reduce sugar intake and improve brushing technique.",
      followUpDate: "2023-07-15",
    },
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  },
  {
    id: "3",
    dentist: "Dr. Jhashmitha",
    date: "2023-08-10",
    status: "pending",
    description: "Sensitivity to cold foods",
    result: null,
    images: ["/placeholder.svg?height=300&width=400"],
  },
]

export default function CheckupResultsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredResults =
    activeTab === "all" ? checkupResults : checkupResults.filter((result) => result.status === activeTab)

  const generatePDF = (checkup: (typeof checkupResults)[0]) => {
    const doc = new jsPDF()

    // Add title
    doc.setFontSize(20)
    doc.text("Dental Checkup Report", 105, 20, { align: "center" })

    // Add checkup details
    doc.setFontSize(12)
    doc.text(`Patient: John Doe`, 20, 40)
    doc.text(`Dentist: ${checkup.dentist}`, 20, 50)
    doc.text(`Date: ${new Date(checkup.date).toLocaleDateString()}`, 20, 60)
    doc.text(`Description: ${checkup.description}`, 20, 70)

    // Add result if available
    if (checkup.result) {
      doc.setFontSize(14)
      doc.text("Diagnosis:", 20, 90)
      doc.setFontSize(12)
      doc.text(checkup.result.diagnosis, 20, 100)

      doc.setFontSize(14)
      doc.text("Recommendations:", 20, 120)
      doc.setFontSize(12)
      doc.text(checkup.result.recommendations, 20, 130)

      doc.setFontSize(12)
      doc.text(`Follow-up Date: ${new Date(checkup.result.followUpDate).toLocaleDateString()}`, 20, 150)
    }

    // Save the PDF
    doc.save(`dental-checkup-${checkup.id}.pdf`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Checkup Results</h1>
        <p className="text-muted-foreground mt-2">View and download your dental checkup reports</p>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredResults.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No checkup results found</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredResults.map((checkup) => (
                <Card key={checkup.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{checkup.description}</CardTitle>
                        <CardDescription>
                          {checkup.dentist} • {new Date(checkup.date).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge variant={checkup.status === "completed" ? "default" : "outline"}>
                        {checkup.status === "completed" ? "Completed" : "Pending"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {checkup.status === "completed" && checkup.result ? (
                      <>
                        <div>
                          <h3 className="font-medium mb-1">Diagnosis</h3>
                          <p className="text-sm text-muted-foreground">{checkup.result.diagnosis}</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Recommendations</h3>
                          <p className="text-sm text-muted-foreground">{checkup.result.recommendations}</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Follow-up Date</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(checkup.result.followUpDate).toLocaleDateString()}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Results pending. The dentist will update this after your checkup.
                      </p>
                    )}

                    {checkup.images.length > 0 && (
                      <div>
                        <h3 className="font-medium mb-2">Images</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {checkup.images.map((image, index) => (
                            <img
                              key={index}
                              src={image || "/placeholder.svg"}
                              alt={`Dental checkup image ${index + 1}`}
                              className="rounded-md border"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  {checkup.status === "completed" && (
                    <CardFooter>
                      <Button variant="outline" className="w-full" onClick={() => generatePDF(checkup)}>
                        <FileText className="mr-2 h-4 w-4" />
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF Report
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
