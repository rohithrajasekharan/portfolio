import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfileSection(){
    return(<>
    <Avatar>
            <img src="/profile-pic.png" alt="Rohith Rajasekharan" />
          </Avatar>
          <h1 className="text-2xl font-bold">Rohith Rajasekharan</h1>
          <p className="text-sm text-gray-600">Driven by a deep passion for technology, I excel in front-end development, particularly with frameworks like React, TypeScript, and Rust. My comprehensive experience extends beyond the front-end, encompassing back-end development, blockchain technologies, and the creation of command-line tools. I am a lifelong learner, constantly seeking opportunities to expand my knowledge and contribute to innovative web solutions.</p>
          <div className="flex space-x-4">
            <Button variant="outline">Download Resume</Button>
            <Button>Connect</Button>
          </div>
          </>)
}