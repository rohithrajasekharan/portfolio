import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  return (
      <Card className="justify-between rounded-lg border p-4 space-y-8">
      <h2 className="text-xl font-semibold">Skills</h2>
        <div>
          <h3 className="text-md font-semibold">HTML/CSS</h3>
          <Progress value={90} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Proficient in writing semantic HTML and styling with CSS, including responsive design and modern CSS
            techniques.
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold">JavaScript</h3>
          <Progress value={85} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Experienced in writing clean, efficient, and maintainable JavaScript code, including modern ES6+
            features and frameworks/libraries like React.
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold">React</h3>
          <Progress value={80} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Skilled in building complex, responsive, and scalable web applications using React, including state
            management, hooks, and modern best practices.
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
          <h3 className="text-lg font-semibold">SQL</h3>
          <Progress value={70} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Proficient in writing complex SQL queries, understanding database design principles, and working with
            relational databases like PostgreSQL and MySQL.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Git</h3>
          <Progress value={90} className="mt-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Experienced in using Git for version control, including branching, merging, and collaborating with teams
            on complex projects.
          </p>
        </div>
      </Card>
  )
}