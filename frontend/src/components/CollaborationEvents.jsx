import React from 'react';
import Slider from "react-slick";
import Newsletter from './newsletter';

import Event1 from '../assets/1-event.jpg';
import Collab2 from '../assets/2-collab.jpg';
import Event3 from '../assets/3-event.jpg';
import Promote4 from '../assets/4-promote.jpg';
import Promote5 from '../assets/5-promote.jpg';
import Event6 from '../assets/6-event.jpg';
import Invite7 from '../assets/7-invite.jpg';
import Invite8 from '../assets/8-invite.jpg';
import Collab9 from '../assets/9-collab.jpg';
import Collab10 from '../assets/10-collab.jpg';
import reel1 from '../assets/travel-reel-1.mp4';
import reel2 from '../assets/lifestyle-reel-1.mp4';


import logo1 from '../assets/logos/chanel.png';
import logo2 from '../assets/logos/cofee.avif';
import logo3 from '../assets/logos/humane.png';
import logo4 from '../assets/logos/LV.png';
import logo5 from '../assets/logos/restaurant.jpg';
import logo6 from '../assets/logos/apple.jpg';
import logo7 from '../assets/logos/nivea.png';
import logo8 from '../assets/logos/coffee.png';


const CollaborationEvents = () => {

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className=" bg-[#f4f9f6] pt-18 md:pt-32 lg:pt-32 text-gray-500 font-sans">
      
      <h2 id='collab' className=" text-[20px] md:text-[39px] lg:text-[58px] font-bold text-center text-[#70c196] ">COLLABORATION & EVENTS</h2>
      <section className=" py-4 md:py-15 lg:py-15 px-20 ">
        <p className=" text-[13px] md:text-xl lg:text-lg mb-5  text-[#70c196]">
          Celebrating shared stories, creative synergies, and unforgettable experiences.
          From brand partnerships to curated launch parties, my journey as a lifestyle and travel creator
          has been enriched by incredible collaborations and memorable events.
        </p>
        <p className=" text-[11px] md:text-[15px] ">
          I’ve had the privilege to work with passionate brands and attend exclusive experiences
          that<br/> align with my values — authenticity, creativity, and a love for beautiful moments.
        </p>
      </section>


      <section className="px-6 md:px-20 py-12 space-y-12">
        <div>
          <h3 className="  md:text-[22px] lg:text-[35px] font-semibold text-center">GALLERY</h3>
          <div className="flex overflow-auto space-x-4 p-10">
            <img src={Event1} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />  
            <video
              className=" h-44 md:h-64 lg:h-74 rounded-lg "
              src={reel1}
              autoPlay
              muted
              loop
            />
            <img src={Collab2} alt="Event 1" className="rounded-lg  h-44 md:h-64 lg:h-74 " />
            <img src={Event6} alt="Event 1" className="rounded-lg  h-44 md:h-64 lg:h-74 " />
            <img src={Promote4} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />
            <video
              className=" h-44 md:h-64 lg:h-74 rounded-lg "
              src={reel2}
              autoPlay
              muted
              loop
            />
            <img src={Promote5} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />
            <img src={Event3} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />
            <img src={Invite7} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />
            <img src={Invite8} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />
            <img src={Collab9} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />
            <img src={Collab10} alt="Event 1" className="rounded-lg h-44 md:h-64 lg:h-74 " />
          </div>
      </div>


        {/* Brand Logos */}
        <div className='text-center'>
          <h3 className="  md:text-[22px] lg:text-2xl font-semibold mt-20 mb-10 ">Brands I've Worked With</h3>
          <div className="max-w-4xl mx-auto md:px-2 lg:px-2">
            <Slider {...settings}>
            <div><img src={logo1} alt="Brand 1" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border" /></div>
            <div><img src={logo5} alt="Brand 2" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border "/></div>
            <div><img src={logo3} alt="Brand 3" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border" /></div>
            <div><img src={logo4} alt="Brand 4" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border "/></div>
            <div><img src={logo2} alt="Brand 5" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border" /></div>
            <div><img src={logo6} alt="Brand 6" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border "/></div>
            <div><img src={logo7} alt="Brand 7" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border" /></div>
            <div><img src={logo8} alt="Brand 8" className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border "/></div>
          </Slider>
          </div>
        </div>


        {/* feedback */}
        <div>
          <h3  id='work' className=" md:text-[18px] lg:text-[19px] font-semibold mb-4 mt-23">What Partners Say</h3>
          <blockquote className="bg-[#ecf1ee] p-6 rounded-lg shadow-inner max-w-65 md:max-w-105 lg:max-w-xl text-[9px] md:text-[14px] lg:text-[12px] ">
            “Working with <strong>Clarie</strong> was seamless and creatively fulfilling. Their attention to detail and unique storytelling makes us want to work with them more in the future.”
            <footer className="mt-4 text-[8px] md:text-sm lg:text-sm text-gray-500">— PR Representative, Chanel </footer>
          </blockquote>
        </div>
      </section>

      <Newsletter/>

      {/* WWM Section */}
      <section className=" px-8 md:px-20 lg:px-6 py-31 text-center text-white bg-[#f98e8e] ">
        <h3 className=" md:text-3xl lg:text-3xl font-semibold mb-4">Want to work together?</h3>
        <p className=" text-[11px] md:text-lg lg:text-lg mb-6 ">
          Whether it’s co-creating content, attending curated brand events, or being featured<br/> in campaigns — I’d love to hear from you.
        </p>
        <a href="/work-with-me" >
          <p className="inline-block animate-pulse bg-[#e64c4c] hover:bg-[#e86363] text-white text-[9px] md:text-[17px] lg:text-[16px] py-3 px-6 rounded-full transition">Work with Me</p>
        </a>
      </section>
      <hr className='text-[#bc4f4f]' />
    </div>
  );
};

export default CollaborationEvents;
