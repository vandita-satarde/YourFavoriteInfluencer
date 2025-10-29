import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import reel1 from "../assets/life-reel-1.mp4";
import reel2 from "../assets/lifestyle-reel-1.mp4";


const WorkWithMe = () => {
  return (
    <>
    <Navbar />
    <div className="bg-[#fcf2f2] text-[#964e4e] pt-17 ">
      <section className=" text-center py-24 px-6">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl text-[#fb7e7e] leading-tight">
          Let’s Create<br />Something Beautiful
        </h1>
        <p className="mt-6 text-[10px] md:text-[16px] lg:text-[16px] text-[#b86f6f] max-w-xl mx-auto">
          Authentic partnerships that resonate with conscious travelers and lifestyle enthusiasts.
        </p>
      </section>

      
      <section className="bg-[#fff] p-9 lg:py-21 mx-6 md:mx-16 lg:mx-52 shadow-sm">
        <div className="max-w-3xl mx-auto text-[11px] md:text-lg lg:text-lg">
          <h2 className=" text-[15px] md:text-3xl lg:text-3xl font-light mb-6">Sponsored Stories</h2>
          <p className=" mb-6">
            I work with brands I truly believe in — from eco-travel, to clean beauty and slow living essentials.
          </p>
          <ul className=" space-y-2 list-disc list-inside">
            <li>Professionally styled feed posts</li>
            <li>Instagram Stories with authentic voiceovers</li>
            <li>Detailed captions with your brand’s tone</li>
            <li>All usage rights included</li>
          </ul>
        </div>
      </section>

      <br/>
      <br/>
      <br/>

      <section className="bg-white p-9 lg:py-21 mx-6 md:mx-16 lg:mx-52 shadow-sm">
        <div className="max-w-3xl mx-auto text-[11px] md:text-lg lg:text-lg">
          <h2 className="text-[15px] md:text-3xl lg:text-3xl font-light mb-6">Video & Reels</h2>
          <p className=" mb-6">
            Show your product in motion. I craft scroll-stopping videos that blend naturally into everyday moments.
          </p>
          <ul className=" space-y-2 list-disc list-inside">
            <li>High-energy reels + soft storytelling edits</li>
            <li>Mini day-in-the-life videos featuring your product</li>
            <li>Travel vlogs that double as visual brand stories</li>
          </ul>
        </div>
      </section>

      <br/>
      <br/>
      <br/>

      <section className="bg-white px-8 lg:px-30 py-9 lg:py-21 mx-6 md:mx-16 lg:mx-52 shadow-sm">
        <div className="flex justify-around  ">
          <div className=" gap-3 md:gap-5 lg:gap-11 flex items-center justify-center">
            <video
              className=" h-30 md:h-65 lg:h-96 rounded-lg border-none "
              src={reel1}
              autoPlay
              muted
              loop
              
            />
            <video
              className=" h-30 md:h-65 lg:h-96 rounded-lg"
              src={reel2}
              autoPlay
              muted
              loop
             
            />
          </div>

          <div className="">
            <div className=" ">
              <iframe className="rounded-lg h-15 w-27 md:h-30 md:w-55 lg:h-42" src="https://www.youtube.com/embed/3Gv6ZSAKknk?si=0p1Ao6aHWLD4OBDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <br/><br/>
            <div className="  ">
              <iframe className="rounded-lg h-15 w-27 md:h-30 md:w-55 lg:h-42" src="https://www.youtube.com/embed/0YZDQUg-9j0?si=jUx3KjqBexPctRki" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

        </div>
      </section>

      
      <section className=" text-center py-40 px-6">
        <h3 className=" text-md md:text-3xl lg:text-3xl font-light mb-4">Ready to Collaborate?</h3>
        <p className="text-[11px] md:text-lg lg:text-lg mb-6">Let’s craft something your audience will remember.</p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vanditasatarde261@gmail.com"
          className="inline-block  font-medium px-6 py-3 rounded-full bg-[#e64c4c] hover:bg-[#e86363] text-white text-[10px] md:text-md lg:text-md transition"
        >
          Let’s Chat
        </a>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default WorkWithMe;
