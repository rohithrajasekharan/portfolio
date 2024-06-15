export default function AnimeRecommendation(){
    return(
        <div className="bg-gray-100 p-4 rounded-md space-y-4 dark:bg-gray-800">
            <h2 className="text-xl font-semibold">Anime Recommendations</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <TvIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm">Fullmetal Alchemist: Brotherhood</p>
              </div>
              <div className="flex items-center space-x-2">
                <TvIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm">Steins;Gate</p>
              </div>
              <div className="flex items-center space-x-2">
                <TvIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm">Attack on Titan</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold">Passionate About</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CodeIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm">Rust</p>
              </div>
              <div className="flex items-center space-x-2">
                <CodeIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm">TypeScript</p>
              </div>
              <div className="flex items-center space-x-2">
                <CodeIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm">React</p>
              </div>
            </div>
          </div>
    )
}


function CodeIcon(props:any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function TvIcon(props:any) {
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
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}
