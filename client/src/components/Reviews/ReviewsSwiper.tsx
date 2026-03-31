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
    <div className="w-full md:w-3/4 pl-4 md:pl-10 pt-15 md:pt-30 pb-25 relative overflow-x-hidden md:overflow-visible">
        <div className="absolute bottom-[-1.2vw] md:left-[7vw]" >
            <BigSnow
             width='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="hidden md:block absolute bottom-[-2.1vw] left-[11vw]" >
            <BigSnow
             width='80'
             height='80'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="hidden md:block absolute bottom-[-1.2vw] left-[20vw] md:left-[18vw]" >
            <BigSnow
             width='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
         <div className="md:hidden absolute bottom-[-1.2vw] left-[20vw] md:left-[18vw]" >
            <BigSnow
             width='30'
             height='30'
             viewBox='0 0 630 590'
            />
        </div>
       <div className="hidden md:block absolute bottom-[-1vw] left-[32vw]" >
            <BigSnow
             width='50'
             height='50'
             viewBox='0 0 630 590'
            />
        </div>
       
        <div className="hidden md:block absolute bottom-[-2vw] left-[52vw]">
            <BigSnow
             width='60'
             height='60'
             viewBox='0 0 630 590'
            />
        </div>
         <div className="md:hidden absolute bottom-[-3vw] left-[62vw]">
            <BigSnow
             width='30'
             height='60'
             viewBox='0 0 630 590'
            />
        </div>
         <div className="md:hidden absolute bottom-[-4.5vw] right-[-1vw]">
            <BigSnow
             width='80'
             height='80'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="hidden md:block absolute bottom-[-1.5vw] left-[70vw]">
            <BigSnow
             width='60'
             height='60'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="hidden md:block absolute bottom-[-0.5vw] left-[77vw]" >
            <BigSnow
             width='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div className="hidden md:block absolute bottom-[-1vw] left-[86vw]" >
            <BigSnow
             width='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
      <div className="hidden md:block absolute bottom-[-1.5vw] left-[96vw]" >
            <BigSnow
             width='40'
             height='40'
             viewBox='0 0 630 590'
            />
        </div>
        <div id='reviews'>
            <h2 className='block md:hidden text-[38px] md:text-[56px] leading-[100%] pb-8'>The skiers who <br/> were with us — <br/> they liked it too</h2>
            <h2 className='hidden md:block text-[56px] leading-[100%] pr-60 font-semibold pb-15'>The skiers who were with <br/> us —  they liked it too</h2>
            <p className='md:hidden text-[18px] leading-[130%] pb-10'>Don't just take our word for it—hear from <br/> skiers who've experienced the difference <br/> our instructors make. </p>
            <p className='hidden md:block text-[18px] md:text-[20px] leading-[130%] pb-10'>Don't just take our word for it—hear from skiers who've <br/> experienced the difference our instructors make. </p>
        </div>      
        
        <div className={`hidden md:block cursor-pointer swiper-button-prev-custom absolute bottom-[120px] right-[-40px] z-10 text-black w-30 h-30 rotate-180 `}>{<NextArrowIcon/>}</div>
        <div className="hidden md:block cursor-pointer swiper-button-next-custom absolute bottom-[120px] right-[-100px] z-10">{<NextArrowIcon/>}</div>
        
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1.2} 
            centeredSlides={false}
            spaceBetween={20}
            slidesPerGroup={1}
            slidesOffsetAfter={16}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
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
                    <div className="w-full h-full relative overflow-hidden cursor-pointer bg-white leading-[130%]">
                        <article className="h-102 leading-[130%]">
                                <div className="p-5 text-black">
                                    <div className="text-[20px] font-semibold flex items-center gap-3 pt-2.5 pb-2.5 w-full ">
                                        <img 
                                            className={`w-15 h-15 rounded-[50%] object-cover ${review.id === 10 ? "object-cover" : "object-top"}`} 
                                            src={review.photoMain} 
                                            alt="Customer's photo" 
                                        />
                                        <span className='text-[22px] md:text-[26px] font-normal md:font-semibold leading-[130%]'>{review.name}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src={star} alt="rating" />
                                        <p className="text-[18px] md:text-[20px]">{review.grade.toFixed(1)}</p>
                                    </div> 
                                    <p className="mt-2.5 text-[16px] leading-[120%] md:leading-[130%] md:text-[16px] mb-5">{review.review}</p> 
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