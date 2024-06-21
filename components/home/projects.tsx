
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects(){
    return(
        <>
        <h2 className="text-xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            <Card className="w-full">
              <CardContent>
                <img src="/placeholder.svg" alt="Project 1" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">Rust-based microservices for scalable backend</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Button variant="ghost">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <img src="/placeholder.svg" alt="Project 2" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">TypeScript-powered React app with custom hooks</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Button variant="ghost">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <img src="/placeholder.svg" alt="Project 3" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">Serverless functions with Rust and Deno</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Button variant="ghost">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </>
    )
}