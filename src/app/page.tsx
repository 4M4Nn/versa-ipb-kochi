import LoadingScreen from "@/components/loading/LoadingScreen"
import HeroSection from "@/components/sections/HeroSection"
import NumbersSection from "@/components/sections/NumbersSection"
import CoursesSection from "@/components/sections/CoursesSection"
import StatementSection from "@/components/sections/StatementSection"
import RecruitersSection from "@/components/sections/RecruitersSection"
import WhyIPBSection from "@/components/sections/WhyIPBSection"
import ApplicationSection from "@/components/sections/ApplicationSection"
import MobileStickyBar from "@/components/ui/MobileStickyBar"

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <main>
        <HeroSection />
        <NumbersSection />
        <CoursesSection />
        <StatementSection />
        <RecruitersSection />
        <WhyIPBSection />
        <ApplicationSection />
      </main>
      <MobileStickyBar />
    </>
  )
}
