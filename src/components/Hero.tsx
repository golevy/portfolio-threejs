import * as React from "react"
import { cn } from "~/lib/utils"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          "absolute inset-0 top-32 max-w-7xl mx-auto flex flex-row items-start gap-5",
          "sm:px-16 px-6"
        )}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-[#915eff]">Levy</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"></p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero
