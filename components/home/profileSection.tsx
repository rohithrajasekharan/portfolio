import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfileSection(){
    return(<>
    <Avatar>
            <img src="/placeholder.svg" alt="Rohith Rajasekharan" />
          </Avatar>
          <h1 className="text-2xl font-bold">Rohith Rajasekharan</h1>
          <p className="text-sm text-gray-600">I'm a Developer passionate about Rust, TypeScript, and React.</p>
          <div className="flex space-x-2">
            <GlobeIcon className="h-5 w-5 text-gray-500" />
            <TwitterIcon className="h-5 w-5 text-gray-500" />
            <LinkedinIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">View portfolio</Button>
            <Button>Follow</Button>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <p className="text-lg font-bold">12,420</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">420</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">16,632</p>
              <p className="text-sm text-gray-500">Liked</p>
            </div>
          </div>
          </>)
}

function TwitterIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }

  function GlobeIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }