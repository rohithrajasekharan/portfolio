
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Projects(){
    return(
        <section className="space-y-4">
        <h2 className="text-xl font-semibold">Side Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Ecommerce backend using Go</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">An ecommerce backend api server with neon postgres as database that uses jwt for authentication. </h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">Go</Badge>
                    <Link href='https://github.com/rohithrajasekharan/go-ecom' target="blank">
                    <Button variant="ghost">View</Button>
                    </Link>
                </div>
            </Card>
            {/* <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Project 2</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">TypeScript-powered React app with custom hooks</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Button variant="ghost">View</Button>
                </div>
            </Card>
            <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Project 3</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Serverless functions with Rust and Deno</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Button variant="ghost">View</Button>
                </div>
            </Card>
            <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Project 4</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Rust-based microservices for scalable backend</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Button variant="ghost">View</Button>
                </div>
            </Card>
            <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Project 5</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">TypeScript-powered React app with custom hooks</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Button variant="ghost">View</Button>
                </div>
            </Card>
            <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Project 6</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Serverless functions with Rust and Deno</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Button variant="ghost">View</Button>
                </div>
            </Card>
            <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Project 7</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">TypeScript-powered React app with custom hooks</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Button variant="ghost">View</Button>
                </div>
            </Card>
            <Card className="w-full p-4 space-y-2">
                <h3 className="font-semibold">Project 8</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Serverless functions with Rust and Deno</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">Rust</Badge>
                    <Button variant="ghost">View</Button>
                </div>
            </Card> */}
            <Card className="w-full flex items-center justify-center min-h-32">
            <Link href='https://github.com/rohithrajasekharan?tab=repositories' target="blank">
            <Button variant="ghost">View More</Button>              
              </Link>
            </Card>
          </div>
          </section>
    )
}