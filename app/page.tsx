import DeveloperAnimation from '@/Components/DeveloperAnimation';
import React from 'react'

const Page = () => {
  return (
    <main className='container mx-auto'>
      <section className='min-h-screen w-full flex flex-col items-center justify-center lg:flex-row'>
        <div className="">
          <h1 className='text-5xl font-bold uppercase text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>Roommetrics Developments</h1>
          <p className='text-center text-lg pt-4  md:text-xl lg:text-3xl xl:text-5xl'><span className='text-primary font-semibold'>Modern</span> Websites for <span className='text-primary font-semibold'>modern</span> businesses</p>
        </div>
        <div className="">
          <DeveloperAnimation/>
        </div>
      </section>
    </main>
  )
}

export default Page;
