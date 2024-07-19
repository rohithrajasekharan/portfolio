import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ProfileSection(){
    return(<>
    <Avatar>
            <Image width={100} height={100} src="/profile-pic.png" alt="Rohith Rajasekharan" priority/>
          </Avatar>
          <h1 className="text-2xl font-bold">Rohith Rajasekharan</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Driven by a deep passion for technology, I excel in web development, particularly with frameworks like React, TypeScript, and Golang. My comprehensive experience extends beyond the front-end, encompassing back-end development, blockchain technologies, and the creation of command-line tools. I am a lifelong learner, constantly seeking opportunities to expand my knowledge and contribute to innovative web solutions.</p>
          <div className="flex space-x-4">
            <Link href='/Resume.pdf' target="blank">
            <Button variant="outline">Download Resume</Button>
            </Link>
            <Link href="mailto:rohithrajasekharan@outlook.com">
            <Button>Connect</Button>
            </Link>
          </div>
          </>)
}