import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// In a real app, this would fetch from the database
const dentists = [
  {
    id: "1",
    name: "Dr. Ramesh Rastogi",
    specialization: "General Dentistry",
    experience: 8,
    address: "12th Street Andheri, Mumbai",
    bio: "Dr. Rastogi specializes in preventive care and restorative dentistry with a gentle approach.",
  },
  {
    id: "2",
    name: "Dr. Joe Nikhil Frank",
    specialization: "Orthodontics",
    experience: 12,
    address: "4th Street Colaba Causeway, Mumbai",
    bio: "Dr. Frank is an expert in braces and Invisalign treatments for patients of all ages.",
  },
  {
    id: "3",
    name: "Dr. Jhashmitha",
    specialization: "Pediatric Dentistry",
    experience: 10,
    address: "MG Road Delhi",
    bio: "Dr. Jhashmitha creates a fun and comfortable environment for children's dental care.",
  },
  {
    id: "4",
    name: "Dr. Amogh",
    specialization: "Cosmetic Dentistry",
    experience: 15,
    address: "Hill Road, Mumbai",
    bio: "Dr. Amogh specializes in veneers, whitening, and smile makeovers.",
  },
]

export default function DentistsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Find a Dentist</h1>
        <p className="text-muted-foreground mt-2">Browse our network of qualified dental professionals</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dentists.map((dentist) => (
          <Card key={dentist.id}>
            <CardHeader>
              <CardTitle>{dentist.name}</CardTitle>
              <CardDescription>{dentist.specialization}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <span className="font-medium">Experience:</span> {dentist.experience} years
              </p>
              <p>
                <span className="font-medium">Address:</span> {dentist.address}
              </p>
              <p className="text-sm text-muted-foreground">{dentist.bio}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/checkup/request?dentistId=${dentist.id}`} className="w-full">
                <Button className="w-full">Request Checkup</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
