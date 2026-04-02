import heroImg from "../../assets/images/hero-img.png"
import heroImgMobile from "../../assets/icons/HeroImgMobile.png"
import snow116 from "../../assets/icons/snow_116x127.png"
import SearchInstructor from "../SearchInctructor/SearchInstructor"
import OurInstructors from "../OurInstructors/OurInstructors"
import BigSnow from "../UI/Icons/BigSnow"
import { HalfSnow } from "../UI/Icons/HalfSnow"

const HeroSection = () => {
    return(
        <div>
            <div className="relative md:h-svh w-full">
                <section className="flex flex-col md:flex-row h-full w-full overflow-hidden">
                    <div className="w-full md:w-1/2 relative flex flex-col order-1 md:order-0 pl-4 md:pl-[7vw] md:pt-[10vw] pt-10 pb-[30px] md:py-0">
                        <div className="z-10">
                            <h1 className="text-[38px] md:text-[56px] leading-tight font-normal">Snow skills start here</h1>
                            <p className="mt-4 md:mt-6 text-[22px] md:text-[26px] leading-[110%] md:leading-[130%] font-medium">
                                Book your ski or snowboard <br className="hidden md:block"/> instructor online
                            </p>
                        </div>
                        <div className="hidden md:block absolute top-[11vw] left-0 z-0">
                            <HalfSnow className="w-[15vw] h-auto opacity-80" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative order-0 md:order-1 md:h-full">
                        <img className="hidden md:block w-full h-full object-cover z-0" src={heroImg} alt="Main skiing experience"/>
                        <img className="block md:hidden w-full object-cover z-0" src={heroImgMobile} alt="Main skiing experience mobile"/>
                        <div className="absolute top-[62vw] left-[8vw] md:left-[12vw] md:top-[18vw] z-10">
                            <BigSnow width="60" height="60" viewBox="0 0 630 630" />
                        </div>

                        <img className="hidden md:block absolute right-[8vw] bottom-[3vw] z-10 w-[8vw] max-w-[116px]" src={snow116} alt="snowImg" />
                    </div>
                </section>
                <div className="
                    px-4 md:px-0 
                    w-full md:w-[73%] 
                    order-2 
                    md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 
                    z-30
                ">
                    <SearchInstructor/>
                </div>
            </div>

            <div>
                <OurInstructors/>
            </div>
        </div>
    )
}

export default HeroSection;