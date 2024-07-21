
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Projects() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="w-full p-4 space-y-2 flex flex-col">
          <CardContent className="flex-1" >
            <h3 className="font-semibold">Ecommerce backend using Go</h3>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">An ecommerce backend api server with neon postgres as database that uses jwt for authentication. </h3>
          </CardContent>
          <CardFooter className="flex-shrink-0 flex items-center justify-between">
            <Badge variant="secondary">Go</Badge>
            <Link href='https://github.com/rohithrajasekharan/go-ecom' target="blank">
              <Button variant="ghost">View</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full p-4 space-y-2 flex flex-col">
          <CardContent className="flex-1" >
            <h3 className="font-semibold">OMS Microservices</h3>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Microservice architecture for an order management system that has features like grpc communication, service discovery, hot reload using air etc.</h3>
          </CardContent>
          <CardFooter className="flex-shrink-0 flex items-center justify-between">
            <Badge variant="secondary">Go</Badge>
            <Link href='https://github.com/rohithrajasekharan/go-oms' target="blank">
              <Button variant="ghost">View</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full p-4 space-y-2 flex flex-col">
          <CardContent className="flex-1" >
            <h3 className="font-semibold">Web Scraper using go</h3>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">A simple webscraper in go that uses colly to scrape a given url to find the list of products and return it as json.</h3>
          </CardContent>
          <CardFooter className="flex-shrink-0 flex items-center justify-between">
            <Badge variant="secondary">Go</Badge>
            <Link href='https://github.com/rohithrajasekharan/go-webscraper' target="blank">
              <Button variant="ghost">View</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full p-4 space-y-2 flex flex-col">
          <CardContent className="flex-1" >
            <h3 className="font-semibold">Chat with document using AI</h3>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">An AI application that lets you upload a document and chat with it to get generative responses based on the content with matching embeddings from pinecodedb.</h3>
          </CardContent>
          <CardFooter className="flex-shrink-0 flex items-center justify-between">
            <Badge variant="secondary">Next.js</Badge>
            <Link href='https://github.com/rohithrajasekharan/pdf-chat' target="blank">
              <Button variant="ghost">View</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-full p-4 space-y-2 flex flex-col">
          <CardContent className="flex-1" >
            <h3 className="font-semibold">Chatbot using Vercel AI sdk</h3>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">A simple AI chatbot made using shadcn ui library and vercel AI SDK (model used: gemini-1.5-flash-latest).</h3>
          </CardContent>
          <CardFooter className="flex-shrink-0 flex items-center justify-between">
            <Badge variant="secondary">Next.js</Badge>
            <Link href='https://github.com/rohithrajasekharan/ai-chatbot' target="blank">
              <Button variant="ghost">View</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full p-4 space-y-2 flex flex-col">
              <CardContent className="flex-1" >
              <h3 className="font-semibold">Git implementation using Typescript</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">An implementation of git features like repository, branching, committing, staging and input commands using Typescript.</h3>
              </CardContent>
                  <CardFooter className="flex-shrink-0 flex items-center justify-between">
                    <Badge variant="secondary">Typescript</Badge>
                    <Link href='https://github.com/rohithrajasekharan/git-implementation' target="blank">
                    <Button variant="ghost">View</Button>
                    </Link>
                </CardFooter>
            </Card>

            {/* <Card className="w-full p-4 space-y-2 flex flex-col">
              <CardContent className="flex-1" >
              <h3 className="font-semibold">ERC21 token operations</h3>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">An RSS aggregator that scrapes the followed RSS feeds and stores the content in a postgres database for future reference.</h3>
              </CardContent>
                  <CardFooter className="flex-shrink-0 flex items-center justify-between">
                    <Badge variant="secondary">web3</Badge>
                    <Link href='https://github.com/rohithrajasekharan/go-oms' target="blank">
                    <Button variant="ghost">View</Button>
                    </Link>
                </CardFooter>
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