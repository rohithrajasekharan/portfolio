import ProfileSection from "@/components/home/profileSection"
import ThemeSwap from "@/components/home/themeSwap"
import Skills from "@/components/home/skills"
import Projects from "@/components/home/projects"
import WorkExperience from "@/components/home/workExperience"
import Blogs from "@/components/home/blogs"
import Socials from "@/components/home/socials"

export default function Component() {
  return (
    <div className="dark:bg-black bg-white">        
    <ThemeSwap/>
      <div className="flex flex-col lg:flex-row container gap-x-16 py-10 space-y-4">
        <div className="flex flex-col items-center space-y-8 lg:items-start lg:w-1/3">
          <ProfileSection/>
          <Socials/>
          <Skills/>
        </div>
        <div className="flex-1 space-y-8">
          <Projects/>
          <WorkExperience/>
          <Blogs/>
        </div>
      </div>
    </div>
  )
}



