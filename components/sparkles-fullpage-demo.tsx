"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";


export default function Page() {
  return (
    <div className="h-[40rem]  bg-black flex flex-col   object-cover h-48 w-full  ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
</div>
</div>
  )}


