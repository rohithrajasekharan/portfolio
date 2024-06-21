import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Socials() {
  return (
      <div className="space-y-4 min-w-full">
        <Card className="flex justify-between rounded-lg border p-4">
          <div className="flex">
            <TwitterIcon className="w-16 h-8 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-medium">X</h3>
              <p className="text-sm text-muted-foreground">Follow @dedsec4242</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Follow
          </Button>
        </Card>
        <Card className="flex justify-between rounded-lg border p-4">
          <div className="flex">
            <GithubIcon className="w-16 h-8 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-medium">Github</h3>
              <p className="text-sm text-muted-foreground">Follow @rohithrajsekharan</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Follow
          </Button>
        </Card>
        <Card className="flex justify-between rounded-lg border p-4">
          <div className="flex">
            <LinkedinIcon className="w-16 h-8 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-medium">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Add to Network</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Follow
          </Button>
        </Card>
        <Card className="flex justify-between rounded-lg border p-4">
          <div className="flex">
            <HashnodeIcon className="w-16 h-8 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-medium">Hashnode</h3>
              <p className="text-sm text-muted-foreground">Read blog posts</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Follow
          </Button>
        </Card>
      </div>
  )
}

function GithubIcon(props:any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30"
     fill="none" stroke="currentColor"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  )
}

function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg {...props}
    fill="none"
    stroke="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
</svg>
  )
}


function HashnodeIcon(props:any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"fill="none"
    stroke="currentColor">
<path fill="none" d="M42.164,17.126L30.874,5.835c-3.781-3.781-9.967-3.781-13.748,0L5.836,17.126	c-3.781,3.781-3.781,9.967,0,13.748l11.291,11.291c3.781,3.781,9.967,3.781,13.748,0l11.291-11.291	C45.945,27.093,45.945,20.907,42.164,17.126z M24,31c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7	C31,27.866,27.866,31,24,31z"></path>
</svg>
  )
}