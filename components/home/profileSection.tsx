import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ProfileSection() {
  return (<>
    <Avatar>
      <Image width={100} height={100} src="/profile-pic.png" alt="Rohith Rajasekharan" priority />
    </Avatar>
    <h1 className="text-2xl font-bold">Rohith Rajasekharan</h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">{`Senior software engineer with a genuine interest in fundamental engineering principles rather than framework-specific implementations. Committed to implementing type-safe and memory-safe practices while contributing to architectural design discussions. I enjoy working in fast-paced settings that provide opportunities to expand capabilities and skills. My approach balances established software engineering principles with an openness to new technologies and methodologies.`}
      </p>
    <div className="flex space-x-4">
      <Link href='/Rohith_Rajasekharan_Resume.pdf' target="blank">
        <Button variant="outline">Download Resume</Button>
      </Link>
      <Link href="mailto:rohithrajasekharan@outlook.com">
        <Button>Connect</Button>
      </Link>
    </div>
  </>)
}