import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative">
        <video autoPlay loop muted
          playsInline className="absolute top-0 left-0 w-full h-full object-cover ">
          <source src="/assets/petals.m4v" type="video/mp4; codecs=hvc1" />
          <source src="/assets/petals.webm" type="video/webm; codecs=vp9" />
        </video>
      </div>
      <div className="p-12 font-bold flex-col flex-1 flex 
                      items-center justify-center z-10 text-black 
                      text-center drop-shadow-[0_5px_3px_rgba(0,0,0,0.2)]">
        <h1 className="text-5xl mb-6 xl:text-6xl">Shiro</h1>
        <h2 className="text-2xl mb-2 xl:text-3xl tracking-tight">
          <span>App Development,</span>{' '}<span>done right.</span>
        </h2>
      </div>
      <div className="flex flex-row justify-between">

        <div>
          <video autoPlay loop muted
            playsInline className="relative w-200 h-200 s object-cover">
            <source src="/assets/petals.m4v" type="video/mp4; codecs=hvc1" />
            <source src="/assets/petals.webm" type="video/webm; codecs=vp9" />
          </video>
        </div>

      </div>

    </div>
  )
}

export default Masthead
