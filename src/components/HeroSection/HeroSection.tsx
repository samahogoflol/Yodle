import heroImg from "../../assets/images/hero-img.png"
import halfSnow from "../../assets/icons/hafl-snow-icons.png"
import snow64 from "../../assets/icons/snow_64x64.png"
import snow116 from "../../assets/icons/snow_116x127.png"
import Header from "../Header/Header"
import SearchInstructor from "../SearchInctructor/SearchInstructor"
import OurInstructors from "../OurInstructors/OurInstructors"


const HeroSection = () => {
    return(
        <>
        <div className="absolute bg-white w-full top-5">
            <Header/>
        </div>
            <section className="flex justify-between bg-[#D3DCF8]">
                <div className="w-1/2 relative flex justify-center z-10 mt-[16.5vw]">
                    <section>
                        <h1 className="font-medium text-[52px]">Snow skills start here</h1>
                        <p className="font-medium text-[26px] leading-[130%]">Book your ski or snowboard <br/> instructor online</p>
                    </section>
                </div>
                <div className="w-1/2">
                    <img className="w-full h-full object-cover" src={heroImg} alt="Is main foto" />
                </div>
                    
                <div className="z-0 absolute top-[18vw]">
                    <img src={halfSnow} alt="snowImg" />
                </div>
                

                <img  className="absolute right-[33vw] top-[21vw]" src={snow64} alt="snowImg" />
                <img className="absolute right-[7vw] top-[45vw]" src={snow116} alt="snowImg" />

                <div className="absolute top-[39.7vw] left-[12.8vw] z-50" >
                    <SearchInstructor/>
                </div>
            </section>

            <div className="bg-[#D3DCF8]">
                <OurInstructors/>
            </div>
        </>
    )
}

export default HeroSection;