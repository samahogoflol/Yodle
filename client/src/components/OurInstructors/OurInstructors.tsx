import "../../styles/index.css"
import star from "../../assets/icons/star.png"
import BigSnow from "../UI/Icons/BigSnow";

import { useState } from "react";
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";

import { INSTRUCTORS_MOCK_DATA } from "../../data/instructorsMock";

const OurInstructors = () => {

    const {isMobile} = useWindowWidth()

    const [openCardId, setOpenCardId] = useState<number | null>(null);

    const hoverOpen = (id:number) => {
        setOpenCardId(id)
    }

    const hoverClose = () => {
        setOpenCardId(null)
    }


    return (
        <div id="our-instructors" className="pl-4 md:px-10 mt-15 md:mt-30 leading-[130%] relative">
            <h2 className="text-[38px] md:text-[56px] font-normal md:font-semibold leading-[130%]">Our featured instructors</h2>
            <p className="text-[18px] pr-5 md:pr-0 md:w-[567px] md:h-[78pxv] md:text-[20px] mt-8 md:mt-15 leading-[120%] md:leading-[130%]">Every instructor on our platform is fully vetted and covered by comprehensive liability insurance, so you can focus on learning and enjoying the mountain. </p>
           <div className={`
                ${isMobile 
                    ? "flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar" 
                    : "grid grid-cols-4 gap-10"} 
                    mt-10 mb-12 md:mb-25`
            }>
                {INSTRUCTORS_MOCK_DATA.filter((item) => item.mainPageReview).map((instructor) => {
                    const isOpen = isMobile || instructor.id === openCardId;
                        return (
                            <div 
                                key={instructor.id} 
                                className={`
                                ${isMobile ? "min-w-[80vw] snap-center" : "w-[325px]"} 
                                h-[420px] relative overflow-hidden cursor-pointer`}
                                onMouseEnter={() => hoverOpen(instructor.id)}
                                onMouseLeave={hoverClose}
                            >
                                <article className="h-full">
                                    <img 
                                        className="w-full md:w-[325px] md:h-[346px] object-cover" 
                                        src={instructor.photoMain} 
                                        alt={`Our Instructor - ${instructor.name}`} 
                                    />
                                    <div className="bg-white text-black p-5 text-[26px] font-semibold">
                                        <h3>{instructor.name}</h3>
                                    </div>

                                    <div 
                                        className={`absolute bottom-0 md:bottom-3 left-0 w-full text-black bg-white pt-2 pb-2 transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                                        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(100%)',}}
                                    >
                                        <div className="p-5 text-black">
                                            <h3 className="text-[22px] md:text-[26px] font-medium md:font-semibold leading-[130%]">{instructor.name}</h3>
                                            <p className="mt-2 text-[16px] leading-[130%]">{instructor.aboutInstructor}</p>
                                            <p className="mt-2 mb-2 text-[18px] md:text-[20px] leading-[130%]"> {instructor.experience} years exp</p>
                                            <div className="flex items-center gap-2 pt-2 leading-[130%]">
                                                <img  src={star} alt="raiting" />
                                                <p className="text-[18px] md:text-[20px] leading-[130%]">{instructor.rating}</p>
                                            </div>   
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })}
            <div className="hidden md:block w-[291px] text-[20px] leading-[130%]">
                We connect winter sports enthusiasts with certified ski and snowboard instructors who are passionate about teaching.
            </div>
          </div>  

            <div className="absolute top-[23vw] right-[6vw] z-[-1] md:top-[7vw] md:right-[22vw]">
                <BigSnow
                    width="48px"
                    height="48px"
                    viewBox="0 0 574 640"
                />
            </div>
        </div>  
    )
}

export default OurInstructors;