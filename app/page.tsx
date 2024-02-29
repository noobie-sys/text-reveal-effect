'use client'
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const homeRef = useRef(null)


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const refElement = homeRef.current;
    const text : HTMLDivElement[] = gsap.utils.toArray('.text')

    text.forEach((el , i) => {
     gsap.to(el , {
      backgroundSize : "100%",
      ease : 'none',
      scrollTrigger : {
        trigger : el,
        // markers : true,
        start : "top 100%",
        end : "center 30%",
        scrub : 1
      }
     })
    })
  } , {scope : homeRef})
  return (
    <main  className="flex min-h-[300vh] flex-col items-center justify-between p-24">
      <div className="h-[100vh] w-full justify-center flex items-center">
        <h1 className="text-[10vw] text-center text-slate-300 uppercase">Scroll Down</h1>
      </div>
      <div ref={homeRef} className="text-scroll-effect-parent-div relative ">
       
          <h1 className="text">
            TEXT EFFECT
          </h1>
          <h1 className="text">
            GSAP
          </h1>
          <h1 className="text">
            CRAZYYY
          </h1>
          <h1 className="text">
            HOVER ON ME
            
          </h1>
          <h1 className="text">
            LIKE THIS?
            
          </h1>
      
      </div>
      <div className="h-screen w-full text-[10vw] uppercase flex justify-center items-center text-slate-400"> 
        Enjoy
      </div>
    </main>
  );
}
