

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
          <HeroSection/>
          <ElegantDivider/>
          <ServicesSection/>
          <ElegantDivider/>
          <ProjectSection/>
          <ElegantDivider withDot={false}/>


          {/* Placeholder section with subtle styling */}
          <section className='min-h-screen w-full flex items-center justify-center'>
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/40 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/50 animate-pulse"></div>
              </div>
              <p className="text-white/50 text-lg">Weitere Inhalte folgen...</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Page;