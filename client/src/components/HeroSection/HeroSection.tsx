import heroImg from "../../assets/images/hero-img.png"
import heroImgMobile from "../../assets/icons/HeroImgMobile.png"
import halfSnow from "../../assets/icons/hafl-snow-icons.png"
import snow116 from "../../assets/icons/snow_116x127.png"
import SearchInstructor from "../SearchInctructor/SearchInstructor"
import OurInstructors from "../OurInstructors/OurInstructors"
import BigSnow from "../UI/Icons/BigSnow"

const HeroSection = () => {
    return(
        <>
            <section className="flex flex-col md:flex md:flex-row">
                <div className="h-fit w-full md:w-1/2 order-1 md:order-0 relative flex pl-4 pb-[30px] md:justify-center mt-5 md:mt-[16.5vw]">
                    <section className="z-10">
                        <h1 className="font-normal  text-[38px] md:text-[56px]">Snow skills start here</h1>
                        <p className="font-medium text-[22px] md:text-[26px] leading-[110%] md:leading-[130%]">Book your ski or snowboard <br/> instructor online</p>
                    </section>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <img className="hidden md:block w-full object-cover z-50" src={heroImg} alt="It's a main photo"/>
                    <div className="absolute top-[62vw] left-[8vw] md:left-[12vw] md:top-[23vw] md:z-10 ">
                        <BigSnow
                        width="44px"
                        height="44px"
                        viewBox="0 0 630 630"
                        />
                    </div>
                </div>
                <div>
                    <img className="w-full object-cover overflow-hidden md:hidden" src={heroImgMobile} alt="" />
                </div>
                    
                <div className="hidden md:block z-0 absolute top-[18vw]">
                    <img src={halfSnow} alt="snowImg" />
                </div>
               
                <img className=" hidden md:block absolute right-[7vw] top-[45vw]" src={snow116} alt="snowImg" />

                <div className="px-4 order-2 md:order-0 md:absolute md:top-[39.6vw] md:left-[12.8vw]" >
                    <SearchInstructor/>
                </div>
            </section>
            <div>
                <OurInstructors/>
            </div>
        </>
    )
}

export default HeroSection;