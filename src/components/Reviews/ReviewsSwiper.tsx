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
import BigSnow from '../UI/Icons/BigSnow';


const ReviewsSwiper = () => {

    const [openCardId, setOpenCardId] = useState<number | null>(null);
    const handleCardClick = (id: number) => {
        setOpenCardId(prevId => (prevId === id ? null : id));
    }

 return (
    <div className="w-3/4 pl-10 pt-30 pb-25 relative">
        <div className="absolute left-[92vw] top-[45vw]" >
            <BigSnow
             witdh='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="absolute bottom-[-1.2vw] left-[7vw]" >
            <BigSnow
             witdh='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="absolute bottom-[-2.1vw] left-[11vw]" >
            <BigSnow
             witdh='80'
             height='80'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="absolute bottom-[-1.2vw] left-[18vw]" >
            <BigSnow
             witdh='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
       <div className="absolute bottom-[-1vw] left-[32vw]" >
            <BigSnow
             witdh='50'
             height='50'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="absolute bottom-[-1.5vw] left-[46vw]" >
            <BigSnow
             witdh='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="absolute bottom-[-2vw] left-[52vw]">
            <BigSnow
             witdh='60'
             height='60'
             viewBox='0 0 630 590'
            />
        </div>
         <div className="absolute bottom-[-1.5vw] left-[70vw]">
            <BigSnow
             witdh='60'
             height='60'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="absolute bottom-[-0.5vw] left-[77vw]" >
            <BigSnow
             witdh='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="absolute bottom-[-1vw] left-[86vw]" >
            <BigSnow
             witdh='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
      <div className="absolute bottom-[-1.5vw] left-[96vw]" >
            <BigSnow
             witdh='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div id='reviews'>
            <h2 className='text-[56px] leading-[100%] font-semibold pb-15'>The skiers who were with us <br />— they liked it too</h2>
            <p className='text-[20px] leading-[130%] pb-10'>Don't just take our word for it—hear from skiers who've experienced the difference our <br />instructors make. </p>
        </div> 
        <div className={`swiper-button-prev-custom absolute bottom-[6.8vw] left-[69vw] z-10 text-black w-30 h-30 rotate-180 `}>{<NextArrowIcon/>}</div>
        <div className="swiper-button-next-custom absolute bottom-[6.8vw] left-[78vw] z-10">{<NextArrowIcon/>}</div>
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