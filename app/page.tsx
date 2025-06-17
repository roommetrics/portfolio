

import AboutSection from '@/Components/AboutSection';
import ElegantDivider from '@/Components/ElegantDivider';
import HeroSection from '@/Components/HeroSection';
import ProjectSection from '@/Components/ProjectSection';
import ServicesSection from '@/Components/ServicesSection';

const Page = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

        <main className='container mx-auto max-w-7xl px-6 lg:px-8 relative z-10'>
          <HeroSection />
          <ElegantDivider />
          <ServicesSection />
          <ElegantDivider />
          <ProjectSection />
          <ElegantDivider />
          <AboutSection/>
        </main>
      </div>
    </div>
  )
}

export default Page;