import { motion } from "framer-motion";
import profile from "../assets/profile-pic-2.jpeg";
import profile1 from "../assets/profile-pic-6.jpg";
import profile2 from "../assets/profile-pic-7.jpg";



const HeroSection = () => {
  return (
    <>
    <section id="herosection" className="bg-[#f38f8f] pt-15 text-white ">
      <div className=" pl-15 md:pl-26 lg:pl-38 flex flex-col-reverse ">  
        <div className=" pt-48 md:pt-90 lg:pt-38 pb-20 md:pb-57 lg:pb-38">
          <h1 className=" text-[25px] md:text-[56px] lg:text-8xl font-bold text-[#dffbec] ">
            LIFE.<br/> 
            TRAVEL.<br/> 
            {/* EVERYDAY <span className="animate-pulse text-[#f35454] ease-out duration-800 ">MAGIC.</span> */}
            EVERYDAY {" "}
            <motion.span
              className="text-[#f35454]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              }}
            >
            MAGIC.
            </motion.span>
          </h1>

          <p className=" text-[10px] md:text-[15px] lg:text-lg text-[#e9efec] font-light lg:mb-6">
            Finding extraordinary in the ordinary – from travel to self-reflection
          </p>
        </div>

        <div className="mt-8 relative md:w-[420px] lg:w-[500px] " >
          <img src={profile} className=" left-36 md:left-90 lg:left-224 top-5 md:top-23 lg:top-1 absolute z-5 h-[85px] w-[85px] md:h-[135px] md:w-[135px] lg:h-[220px] lg:w-[220px] rounded-[50%] border-1 md:border-2 lg:border-2 shadow-sm shadow-gray-500 "/>
          <img src={profile1} className=" absolute left-46 md:left-110 lg:left-260 top-21 md:top-46 lg:top-38 h-[85px] w-[85px] md:h-[135px] lg:h-[210px] md:w-[135px] lg:w-[200px] rounded-[50%] border-1 md:border-2 lg:border-2 shadow-sm shadow-gray-500 "/>
          <img src={profile2} className=" absolute left-40 md:left-98 lg:left-242 top-40 md:top-75 lg:top-82 h-[84px] w-[84px] md:h-[135px] lg:h-[200px] md:w-[137px] lg:w-[190px] rounded-[50%] border-1 md:border-2 lg:border-2 shadow-sm shadow-gray-500 "/>
        </div>

      </div>
    </section>
    </>
  );
};

export default HeroSection;
