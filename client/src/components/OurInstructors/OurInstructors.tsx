import "../../styles/index.css"
import star from "../../assets/icons/star.png"
import BigSnow from "../UI/Icons/BigSnow";

import { useState } from "react";

import { INSTRUCTORS_MOCK_DATA } from "../../data/instructorsMock";

const OurInstructors = () => {

    const [openCardId, setOpenCardId] = useState<number | null>(null);

    const hoverOpen = (id:number) => {
        setOpenCardId(id)
    }

    const hoverClose = () => {
        setOpenCardId(null)
    }


    return (
        <div id="our-instructors" className="container mt-30 leading-[130%] relative">
            <h2 className="text-[56px] font-semibold">Our Featured Instructors</h2>
            <p className="w-[567px] h-[78pxv] text-[20px] mt-15">Every instructor on our platform is fully vetted and covered by comprehensive liability insurance, so you can focus on learning and enjoying the mountain. </p>

        
          <div className="grid grid-cols-4 mt-10 gap-40 mb-25">
            {INSTRUCTORS_MOCK_DATA.filter((item) => item.mainPageReview).map((instructor) => {

                const isOpen = instructor.id === openCardId;

              return (
        <div 
            key={instructor.id} 
            className="w-[325px] h-[420px] relative overflow-hidden cursor-pointer" 
            onMouseEnter={() => hoverOpen(instructor.id)}
            onMouseLeave={hoverClose}
        >
            <article className="h-full">
                <img 
                    className="w-[325px] h-[346px] object-cover" 
                    src={instructor.photoMain} 
                    alt={`Our Instructor - ${instructor.name}`} 
                />
                <div className="bg-white text-black p-5 text-[26px] font-semibold">
                    <h3>{instructor.name}</h3>
                </div>

                <div 
                    className={`absolute bottom-3 left-0 w-full text-black bg-white pt-2 pb-2 transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                    
                    style={{ 
                        transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    }}
                >
                    <div className="p-5 text-black ">
                        <h3 className="text-[26px] font-semibold">{instructor.name}</h3>
                        <p className="mt-2 text-[16px]">{instructor.aboutInstructor}</p>
                        <p className="mt-2 mb-2 text-[20px]"> {instructor.experience} years exp</p>
                        <div className="flex items-center gap-2 pt-2">
                            <img  src={star} alt="raiting" />
                            <p className="text-[20px]">{instructor.rating}</p>
                        </div>   
                    </div>
                </div>
                
            </article>
        </div>
    );
            })}
            <div className="w-[291px] text-[20px]">
                We connect winter sports enthusiasts with certified ski and snowboard instructors who are passionate about teaching.
            </div>
          </div>  

            <div className="absolute top-[7vw] right-[22vw]">
                <BigSnow
                    witdh="64px"
                    height="64px"
                    viewBox="0 0 574 640"
                />
            </div>

          </div>  
    )
}

export default OurInstructors;