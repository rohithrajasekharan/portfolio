export default function WorkExperience() {
  return (
    <>
      <section className="w-full space-y-8">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <BriefcaseIcon className="h-6 w-6 text-gray-500" />
            </div>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Software Engineer</h3>
            <p className="text-sm text-gray-500">Tata Consultancy Services | 2019 - Present</p>
            <p className="text-sm">
            As a full stack engineer, played a crucial role in developing and deploying key features to applications that significantly enhances flight operations for Singapore Airlines. 
            </p>
          </div>
        </div>
        <div className="relative pl-10 after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
          <div className="grid gap-10 ml-4">
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-22.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="font-medium">IRRAMS – International Relations Regulatory Approval Management S/M </div>
              <div className="text-gray-600 dark:text-gray-500 italic">Aug 2019 – Mar 2021</div>
              <div className="text-gray-500 dark:text-gray-400">
              Worked as a front-end developer to enhance and implement features for a web application that tracks overflight and landing approvals for flights. 
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-22.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="font-medium">ELB – Electronic Tech Log Book</div>
              <div className="text-gray-600 dark:text-gray-500 italic"> Mar 2021 – Dec 2022</div>
              <div className="text-gray-500 dark:text-gray-400">
              Worked as a front-end developer to develop a web application that logs events occurred during flights. 
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-22.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="font-medium">LSQ </div>
              <div className="text-gray-600 dark:text-gray-500 italic">Dec 2022 – Mar 2023 </div>
              <div className="text-gray-500 dark:text-gray-400">
              Worked as a full stack developer for a web application that acts as an inventory of items pertaining to a fleet or flights. 
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-22.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="font-medium">ACE – AirCrew Competency Ecosystem 	</div>
              <div className="text-gray-600 dark:text-gray-500 italic">Aug 2023 – Present</div>
              <div className="text-gray-500 dark:text-gray-400">
              Worked as a full stack developer on an ecosystem of apps that manages and tracks the progress and metrics of pilot training. 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BriefcaseIcon(props: any) {
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