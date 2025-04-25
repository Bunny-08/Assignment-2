import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SmileIcon as Tooth, Calendar, FileText, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Dental Checkups Made Simple
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Schedule dental checkups, upload images, and receive professional feedback all in one place.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/checkup/request">
                <Button size="lg">Request a Checkup</Button>
              </Link>
              <Link href="/dentists">
                <Button variant="outline" size="lg">
                  Find a Dentist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Book appointments with dentists at your convenience.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                  <Tooth className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Professional Dentists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Connect with qualified dental professionals.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Receive detailed PDF reports of your dental checkups.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Patient Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access your dental history and upcoming appointments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
