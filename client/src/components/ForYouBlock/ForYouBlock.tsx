import "../../styles/index.css"

import img from "../../assets/images/forYouBlockImg.png"
import arrow from "../../assets/icons/bigBlueArrow.png"

const ForYouBlock = () => {
    return (
       <div className="block bg-white md:grid grid-cols-2 pt-15 md:py-25 md:gap-[65px] leading-[130%]">
            <div className="pl-4 pr-14 md:pr-0 md:pl-30">
                <h1 className="text-[38px] md:text-[56px] mb-10 md:mb-15 leading-[100%]">This is for you if</h1>
                <div className="mb-10 flex gap-8 md:gap-15 items-center w-full md:w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[18px] md:text-[20px] leading-[130%]">You’re hitting the slopes for the first time and want to learn with confidence.</p>
                </div>
                <div className="mb-10 flex gap-8 md:gap-15 items-center w-full md:w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[18px] md:text-[20px] leading-[130%]">You value safety, a personal approach, and comfortable learning.</p>
                </div>
                <div className="mb-10 flex gap-8 md:gap-15 items-center w-full md:w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[18px] md:text-[20px] leading-[130%]">You’re ready to improve your technique and take your skills to the next level.</p>
                </div>
                <div className="mb-10 flex gap-8 md:gap-15 items-center w-full md:w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[18px] md:text-[20px] leading-[130%]">You’re planning a winter trip and want to book your lessons in advance.</p>
                </div>
                <div className="mb-10 flex gap-8 md:gap-15 items-center w-full md:w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[18px] md:text-[20px] leading-[130%]">You’re looking for a trusted instructor in your chosen location.</p>
                </div>
                <div className="mb-10 flex gap-8 md:gap-15 items-center w-full md:w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[18px] md:text-[20px] leading-[130%]">You want to make your skiing or snowboarding experience even more fun.</p>
                </div>
            </div>
            <div>
                <img className="w-[full] h-full object-cover" src={img} alt="this is for you if..." />
            </div>
       </div>
    )
}

export default ForYouBlock;