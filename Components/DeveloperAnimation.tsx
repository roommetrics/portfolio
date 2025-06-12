'use client'

import React from 'react'
import developer from '@/public/animations/developer.json'
import Lottie from 'lottie-react'

const DeveloperAnimation = () => {
  return (
    <div className='w-full h-full'>
      <Lottie
        animationData={developer}
        autoplay
        loop
        className="w-full h-auto mx-auto z-10"
      />
    </div>
  )
}

export default DeveloperAnimation
