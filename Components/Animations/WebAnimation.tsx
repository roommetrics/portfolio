'use client'

import Lottie from 'lottie-react'
import React from 'react'
import web from '@/public/animations/website.json'

const WebAnimation = () => {
    return (
        <div>
            <Lottie animationData={web}
                loop={true}
                autoPlay={true}
                className="w-full h-auto"
            />
        </div>
    )
}

export default WebAnimation
