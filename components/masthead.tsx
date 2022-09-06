import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "./scroll-observer";

const Masthead: React.FC = () => {

  const [imageLoaded, setImageLoaded] = useState(false)

  // Parallax effect
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  // Initialize progress
  let progress = 0

  // reference container and update progress
  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  return (
    <div
      ref={refContainer}
      
      className="min-h-screen relative flex flex-col items-start 
                justify-center sticky top-0  -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`
      }}
    >

      <div className="p-10 font-bold flex-col flex-1 flex 
                      items-center justify-center z-20 text-slate-200 
                      text-center pb-5 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
        <h1 className="text-5xl mb-6 xl:text-6xl">Shiro</h1>
        <h2 className="text-2xl mb-2 xl:text-3xl tracking-tight">
          <span>Let your next app</span>{' '}<span>bloom.</span>
        </h2>
        <div className={`flex-grow-0 pt-10 m-12 transition-opacity 
                        duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src="/assets/logo-icon.png"
            width={100}
            height={100}
            alt="logo"
            onLoad={handleImageLoaded}
          />
        </div>
      </div>
      <div >
        <video autoPlay loop muted
          playsInline className="absolute invert right-0 bottom-0 object-cover">
          <source src="/assets/petals.m4v" type="video/mp4; codecs=hvc1" />
          <source src="/assets/petals.webm" type="video/webm; codecs=vp9" />
        </video>
      </div>

      <div className={`flex-grow-0 invert p-10 md:pb-5 transition-all duration-1000
                      ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-20'}`}
      >
        <Image
          src="/assets/arrow-down.png"
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  )
}

export default Masthead
