import reel1 from "../assets/lifestyle-reel-1.mp4";
import reel2 from "../assets/travel-reel-1.mp4";
import reel3 from "../assets/life-reel-1.mp4";

const content = () => {
  return (
    <>

    {/* 2 */}
    <div id="about" className="bg-[#f4f9f6] border-l-3 md:border-l-5 lg:border-l-8 p-7 lg:p-18 text-base text-[10px] md:text-lg  ">
          <p>
            Hi, I’m <br/><span className="font-semibold text-[20px] md:text-3xl lg:text-4xl">Clarie</span><br />
            Welcome to my world of curated moments, meaningful adventures, and everyday beauty. I’m a lifestyle & travel creator helping people find inspiration in the little things — whether it’s a weekend getaway, a cozy morning routine, or a thoughtful life upgrade (or a life lesson learned along the way).
          </p>
    </div>


    {/* 4 */}
    <div className="bg-[#ff8282] px-6 md:px-15 lg:px-20 pt-10 md:pt-22 lg:pt-40 text-white md:text-[31px] lg:text-4xl ">
        
        <div className=" flex justify-around">
            {/* 4.1 */}
            <div>
              <p className="text-center font-bold pb-4 md:pb-10 lg:pb-10">LIFESTYLE</p>
              <div className=" border border-white">
                <video
                  className=" h-[130px] md:h-[360px] lg:h-[599px] lg:w-[337px]"
                  src={reel1}
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              </div>
            </div>

            {/* 4.2 */}
            <div>
              <p className="text-center font-bold pb-4 md:pb-10 lg:pb-10">TRAVEL</p>
              <div className=" border border-white">
                <video
                  className=" h-[130px] md:h-[361px] lg:h-[599px] lg:w-[337px]"
                  src={reel2}
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              </div>
            </div>

            {/* 4.3 */}
            <div>
              <p className="text-center font-bold pb-4 md:pb-10 lg:pb-10">LIFE</p>
              <div className=" border border-white">
                <video
                  className=" h-[130px] md:h-[360px] lg:h-[599px] lg:w-[337px]"
                  src={reel3}
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              </div>
            </div>
        </div>

        <p className=" pt-8 pb-8 md:pb-20 lg:pb-20 text-center text-[9px] md:text-[15px] lg:text-[15px] ">
          <i>From faraway cities to quiet mornings at home — these are the moments that shape my lifestyle, fuel my creativity, and ground me in what matters most.</i>
        </p>

        <div id='shop' className="text-center lg:p-10 ">
          <a href="/shop-my-life" >
            <button className="bg-[#e64c4c] hover:bg-[#e86363] mb-8 md:mb-16 lg:mb-18 py-5.5 md:py-11 lg:py-11 px-1 text-[8px] md:text-[17px] lg:text-[17px] rounded-[50%] cursor-pointer animate-bounce">SHOP MY LIFE</button>          
          </a>
        </div>
    
    </div>
    </>
  );
};

export default content;
