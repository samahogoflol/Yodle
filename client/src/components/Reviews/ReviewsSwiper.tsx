import { REVIEWS_MOCK_DATA } from '../../data/reviewsMock';

import star from "../../assets/icons/star.png"

import { Swiper, SwiperSlide } from 'swiper/react'; 

// @ts-ignore
import { Navigation, Pagination } from 'swiper/modules';

import "../../styles/index.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import NextArrowIcon from '../UI/Icons/NextArrowIcon';
import BigSnow from '../UI/Icons/BigSnow';


const ReviewsSwiper = () => {

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
        <div className={` cursor-pointer swiper-button-prev-custom absolute bottom-[6.8vw] left-[69vw] z-10 text-black w-30 h-30 rotate-180 `}>{<NextArrowIcon/>}</div>
        <div className=" cursor-pointer swiper-button-next-custom absolute bottom-[6.8vw] left-[78vw] z-10">{<NextArrowIcon/>}</div>
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
     {REVIEWS_MOCK_DATA.map((review) => {

            return (
                REVIEWS_MOCK_DATA && ( 
                    <SwiperSlide key={review.id}>
                    <div 
                        className="w-[325px] h-full relative overflow-hidden cursor-pointer bg-white leading-[130%]"
                    >
                        <article className="h-102 leading-[130%]">
                                <div className="p-5 text-black">
                                    <div className="text-[20px] font-semibold flex items-center gap-3 pt-2.5 pb-2.5 w-full ">
                                        <img 
                                            className={`w-15 h-15 rounded-[50%] object-cover ${review.id === 10 ? "object-cover" : "object-top"}`} 
                                            src={review.photoMain} 
                                            alt="Customer's photo" 
                                        />
                                        <p>{review.name}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src={star} alt="rating" />
                                        <p className="text-[20px]">{review.grade.toFixed(1)}</p>
                                    </div> 
                                    <p className="mt-2.5 text-[20px] mb-5">{review.review}</p> 
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