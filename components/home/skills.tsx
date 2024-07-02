import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  return (
      <Card className="justify-between rounded-lg border p-4 space-y-8">
      <h2 className="text-xl font-semibold">Skills</h2>
        <div>
          <h3 className="text-md font-semibold">Go</h3>
          <Progress value={90} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Proficient in writing server side code using go making full use of go routines and following the 
            principles of effective go.
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Typescript</h3>
          <Progress value={85} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Rooting for Type Safety across the industry by building projects making full use of type safe programming.
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold">React</h3>
          <Progress value={80} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Most of my industrial experience lies in creating React applications for the airline industry. Have seen and moved along with
            the evolution from class components to server side components.
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Node.js</h3>
          <Progress value={75} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Experienced in building server-side applications and APIs using Node.js, including the use of popular
            frameworks like Express.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Next.js</h3>
          <Progress value={70} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            My favourite way of working with react applications that may or may not need SEO. Most of my side projects are done in 
            Next.js
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">MongoDB / Sql</h3>
          <Progress value={90} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Worked with various Relational/Non-Relational databases and made use of popular ORMs. Also proficient in Graphql.
          </p>
        </div>
      </Card>
  )
}