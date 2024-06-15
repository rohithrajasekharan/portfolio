import ProfileSection from "@/components/home/profileSection"
import AnimeRecommendation from "@/components/home/animeRecommendation"
import Projects from "@/components/home/projects"
import WorkExperience from "@/components/home/workExperience"
import Blogs from "@/components/home/Blogs"

export default function Component() {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center space-y-4 lg:items-start lg:w-1/3">
          <ProfileSection/>
          <AnimeRecommendation/>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <Projects/>
          <WorkExperience/>
          <Blogs/>
        </div>
      </div>
    </div>
  )
}



