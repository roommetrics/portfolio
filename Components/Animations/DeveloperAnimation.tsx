import React from 'react'

const DeveloperAnimation = () => {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
      <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-tr from-primary to-blue-500 rounded-full animate-pulse opacity-80"></div>
    </div>
  )
}

export default DeveloperAnimation
