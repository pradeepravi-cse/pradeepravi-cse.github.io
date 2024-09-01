"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

import EastonMedia from "@/app/assets/images/easton_media_logo.jpeg";
import Blueally from "@/app/assets/images/blueally_logo.jpeg";
import Capsule8 from "@/app/assets/images/capsule8_logo.jpeg";
import Virtusa from "@/app/assets/images/virtusa_logo.jpeg";
import Mindgraph from "@/app/assets/images/mindgraph_logo.jpeg";
import Image from "next/image";
import PageBreak from "./PageBreak";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; logo?: React.ReactNode }
>(({ className, children, logo }, ref) => {
  return (
    <div  className="md:items-center flex md:flex-col flex-row items-start h-fit w-full mt-8">
      <div
        className={cn(
          "z-10 flex h-[60px] w-[60px] items-center p-1 justify-center rounded-full border-2 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className
        )}
        ref={ref}
      >
        {logo ?? <></>}
      </div>
      <div className="pl-2 pb-3 md:pl-none md:pb-none  md:text-center ">{children}</div>
    </div>
  );
});

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative  px-8 flex mt-20 flex-col w-full  m-auto items-center justify-center overflow-hidden"
      ref={containerRef}
    >
            <PageBreak />
      <h1 className="text-center font-bold text-2xl border-4 border-boston-blue-950 py-2 px-8 w-[300px] mb-10">
        Career Path
      </h1>
      <p className="text-md text-slate-600 text-center w-full md:max-w-[70%] mb-5">I started as a web designer, creating user-friendly and visually appealing websites. My journey led me into development, where I integrated complex systems and enhanced functionality. Now, as an Associate Solution Designer, I collaborate on crafting innovative digital solutions that align with both business goals and user needs.</p>
      <div className="flex  h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-col md:flex-row justify-between">
          <Circle
            ref={div1Ref}
            logo={
              <Image
                src={EastonMedia}
                height={60}
                width={60}
                alt="EastonMedia"
                className="rounded-full"
              />
            }
          >
            <h1 className="font-bold text-md text-boston-blue-900 max-w-[250px]">Easton Media Pvt. Ltd.</h1>
            <p className="text-sm text-boston-blue-900">Web Designer</p>
            <p className="italic text-xs text-slate-500">Jul 2016 - Nov 2017</p>
          </Circle>
          <Circle
            ref={div2Ref}
            logo={
              <Image
                src={Blueally}
                height={60}
                width={60}
                alt="EastonMedia"
                className="rounded-full"
              />
            }
          >
            <h1 className="font-bold text-md text-boston-blue-900 max-w-[250px]" >Blueally Infotech(India) Pvt. Ltd.</h1>
            <p className="text-sm text-boston-blue-900">UI/UX Designer</p>
            <p className="italic text-xs text-slate-500">May 2018 - Jul 2019</p>
            
            <p className="text-sm text-boston-blue-900 mt-5">Jr. Web Designer</p>
            <p className="italic text-xs text-slate-500">Nov 2017 - May 2018</p>
          </Circle>

          <Circle
            ref={div3Ref}
            logo={
              <Image
                src={Capsule8}
                height={60}
                width={60}
                alt="EastonMedia"
                className="rounded-full"
              />
            }
          >
            <h1 className="font-bold text-md text-boston-blue-900 max-w-[250px]">Capsule8 India Pvt. Ltd.</h1>
            <p className="text-sm text-boston-blue-900">Web Developer</p>
            <p className="italic text-xs text-slate-500">Aug 2019 - Apr 2020</p>
          </Circle>
          <Circle
            ref={div4Ref}
            logo={
              <Image
                src={Virtusa}
                height={60}
                width={60}
                alt="EastonMedia"
                className="rounded-full"
              />
            }
          >
            <h1 className="font-bold text-md text-boston-blue-900 max-w-[250px]">Virtusa Consulting Service Pvt. Ltd.</h1>
            <p className="text-sm text-boston-blue-900">Consultant - Technology</p>
            <p className="italic text-xs text-slate-500">Apr 2020 - Jul 2021</p>
          </Circle>
          <Circle
            ref={div5Ref}
            logo={
              <Image
                src={Mindgraph}
                height={60}
                width={60}
                alt="EastonMedia"
                className="rounded-full"
              />
            }
          >
            <h1 className="font-bold text-md text-boston-blue-900 max-w-[250px]">Mindgraph Solution Sdn. Bhd</h1>
            <p className="text-sm text-boston-blue-900">Associate Solution Designer</p>
            <p className="italic text-xs text-slate-500">Jul 2024 - Present</p>

            <p className="text-sm text-boston-blue-900 mt-5">Sr. Software Engineer</p>
            <p className="italic text-xs text-slate-500">Sep 2021 - Jul 2024</p>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
      />
    </div>
  );
}

const Icons = {
  openai: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
