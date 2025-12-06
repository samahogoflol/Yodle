import { INSTRUCTORS_MOCK_DATA } from '../../data/instructorsMock';

import star from "../../assets/icons/star.png"

import { Swiper, SwiperSlide } from 'swiper/react'; 

// @ts-ignore
import { Navigation, Pagination } from 'swiper/modules';

import { useState } from 'react';

import "../../styles/index.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import NextArrowIcon from '../UI/Icons/NextArrowIcon';


const ReviewsSwiper = () => {

    const [openCardId, setOpenCardId] = useState<number | null>(null);
    const handleCardClick = (id: number) => {
        setOpenCardId(prevId => (prevId === id ? null : id));
    }

 return (
    <div className="w-3/4 p-10 relative"> 
        <div className={`swiper-button-prev-custom absolute bottom-[2.8vw] left-[67vw] z-10 text-black w-30 h-30 rotate-180 `}>{<NextArrowIcon/>}</div>
        <div className="swiper-button-next-custom absolute bottom-[2.8vw] left-[76vw] z-10">{<NextArrowIcon/>}</div>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
                breakpoints={{
                640: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
            }}
            navigation={{
                prevEl: '.swiper-button-prev-custom', 
                nextEl: '.swiper-button-next-custom', 
            }}
            loop={false}
        >
     {INSTRUCTORS_MOCK_DATA.map((instructor) => {

        const isOpen = instructor.id === openCardId;

            return (
                instructor.mainPageReviewSlider && ( 
                    <SwiperSlide key={instructor.id}>
                    <div 
                        className="w-[325px] h-full relative overflow-hidden cursor-pointer bg-white leading-[130%]" // Використовуємо фіксовану висоту для абсолютної позиції
                        onClick={() => handleCardClick(instructor.id)} // Обробник кліку
                    >
                        <article className="h-full">

                            <img 
                                 className="w-[325px] h-[346px] object-cover"
                                 src={instructor.photoInAWork} 
                                 alt="Instructor's Work Photo" 
                     />

                            <div className="text-[20px] font-semibold flex items-center gap-3 pt-5 pl-5 pb-2.5 w-full ">
                                <img 
                                     className={`w-15 h-15 rounded-[50%] object-cover ${instructor.id === 10 ? "object-cover" : "object-top"}`} 
                                     src={instructor.photoMain} 
                                     alt="Instructor's Photo" 
                                 />
                                <p>{instructor.name}</p>
                            </div>

                            <div className='flex items-center pl-5 pb-5 gap-2.5 text-[20px]'>
                                <img src={star} alt="rating" />
                                <p>{instructor.rating.toFixed(1)}</p>
                            </div>

                               {/* 4. Ковзний оверлей (Absolute) */}
                                <div 
                                 className={`absolute bottom-0 left-0 w-full text-black bg-white transition-transform duration-500`}
                                 style={{ 
                                 transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                                }}
                            >
                                <div className="p-5 text-black">
                                    <div className="text-[20px] font-semibold flex items-center gap-3 pt-5  pb-2.5 w-full ">
                                <img 
                                     className={`w-15 h-15 rounded-[50%] object-cover ${instructor.id === 10 ? "object-cover" : "object-top"}`} 
                                     src={instructor.photoMain} 
                                     alt="Instructor's Photo" 
                                 />
                                <p>{instructor.name}</p>
                                    </div>
                                    <div className="flex items-center gap-3 pt-[11px]">
                                        <img src={star} alt="rating" />
                                        <p className="text-[20px]">{instructor.rating.toFixed(1)}</p>
                                    </div> 
                                    <p className="mt-2.5 text-[20px] mb-5">{instructor.aboutInstructor}</p> 
                                 </div>
                            </div>
                        </article>
                    </div>
                </SwiperSlide>
                 )
            )
        })}
         </Swiper>
     </div>
 );
};

export default ReviewsSwiper;