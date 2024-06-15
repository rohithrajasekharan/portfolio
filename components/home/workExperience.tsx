export default function WorkExperience(){
    return(
        <>
          <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10">
        <h2 className="text-xl font-semibold mt-8">Work Experience</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <BriefcaseIcon className="h-6 w-6 text-gray-500" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Software Engineer</h3>
                <p className="text-sm text-gray-500">Tata Consultancy Services | 2019 - Present</p>
                <p className="text-sm">
                  Developed and maintained scalable, high-performance backend systems using Rust. Collaborated with
                  cross-functional teams to deliver innovative solutions that improved overall system performance and
                  reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
            <div className="grid gap-10">
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="font-medium">Project A - E-commerce Platform</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Developed a scalable and user-friendly e-commerce platform with advanced features like personalized
                  recommendations, multi-currency support, and seamless checkout experience.
                </div>
                <div className="text-gray-500 dark:text-gray-400">Duration: June 2020 - December 2021</div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="font-medium">Project B - SaaS Analytics Platform</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Designed and implemented a SaaS-based analytics platform that provided real-time insights and
                  customizable reporting for enterprise customers.
                </div>
                <div className="text-gray-500 dark:text-gray-400">Duration: January 2022 - Present</div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="font-medium">Project C - Mobile App Development</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Developed and maintained a cross-platform mobile application for iOS and Android, incorporating
                  features like push notifications, in-app purchases, and offline functionality.
                </div>
                <div className="text-gray-500 dark:text-gray-400">Duration: April 2021 - September 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

function BriefcaseIcon(props:any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}