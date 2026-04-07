import "../../styles/index.css"

import img from "../../assets/images/forYouBlock.png"
import arrow from "../../assets/icons/bigBlueArrow.png"

const ForYouBlock = () => {
    return (
       <div className="block bg-white md:grid grid-cols-2 pt-15 md:py-[6vw] gap-10 md:gap-[4vw] xl:gap-[65px] leading-[130%] w-full overflow-hidden">
            <div className="pl-4 pr-4 md:pr-0 md:pl-[5vw] lg:pl-[5vw] xl:pl-[7vw] flex flex-col justify-center">
                <h1 className="text-[38px] md:text-[4vw] xl:text-[56px] mb-10 md:mb-15 leading-[100%]">This is for you if</h1>
                
                <div className="mb-6 md:mb-10 flex gap-8 xl:gap-15 items-start md:items-center w-full max-w-[544px]">
                    <img className="shrink-0 w-8 md:w-auto mt-1 md:mt-0" src={arrow} alt="" />
                    <p className="hidden md:block text-[18px] md:text-[20px] leading-[130%]">You’re hitting the slopes for the first time and want to learn with confidence.</p>
                    <p className="md:hidden text-[18px]  leading-[120%]">You’re hitting the slopes for the <br/> first time and want to learn <br/> with confidence.</p>
                </div>
                <div className="mb-6 md:mb-10 flex gap-8 xl:gap-15 items-start md:items-center w-full max-w-[544px]">
                    <img className="shrink-0 w-8 md:w-auto mt-1 md:mt-0" src={arrow} alt="" />
                    <p className="hidden md:block  text-[18px] md:text-[20px] leading-[130%]">You value safety, a personal approach, and comfortable learning.</p>
                    <p className="md:hidden text-[18px] leading-[120%]">You value safety, a personal <br/> approach, and comfortable <br/> learning.</p>
                </div>
                <div className="mb-6 md:mb-10 flex gap-8 xl:gap-15 items-start md:items-center w-full max-w-[544px]">
                    <img className="shrink-0 w-8 md:w-auto mt-1 md:mt-0" src={arrow} alt="" />
                    <p className="hidden md:block  text-[18px] md:text-[20px] leading-[130%]">You’re ready to improve your technique and take your skills to the next level.</p>
                    <p className="md:hidden text-[18px] leading-[120%]">You’re ready to improve your <br/> technique and take your skills <br/> to the next level.</p>
                </div>
                <div className="mb-6 md:mb-10 flex gap-8 xl:gap-15 items-start md:items-center w-full max-w-[544px]">
                    <img className="shrink-0 w-8 md:w-auto mt-1 md:mt-0" src={arrow} alt="" />
                    <p className="hidden md:block  text-[18px] md:text-[20px] leading-[130%]">You’re planning a winter trip and want to book your lessons in advance.</p>
                    <p className="md:hidden text-[18px] leading-[120%]">You’re planning a winter trip <br/> and want to book your lessons <br/> in advance.</p>
                </div>
                <div className="mb-6 md:mb-10 flex gap-8 xl:gap-15 items-start md:items-center w-full max-w-[544px]">
                    <img className="shrink-0 w-8 md:w-auto mt-1 md:mt-0" src={arrow} alt="" />
                    <p className="hidden md:block  text-[18px] md:text-[20px] leading-[130%]">You’re looking for a trusted instructor in your chosen location.</p>
                    <p className="md:hidden text-[18px] leading-[120%]">You’re looking for a trusted <br/> instructor in your chosen <br/> location.</p>
                </div>
                <div className="mb-6 md:mb-10 flex gap-8 xl:gap-15 items-start md:items-center w-full max-w-[544px]">
                    <img className="shrink-0 w-8 md:w-auto mt-1 md:mt-0" src={arrow} alt="" />
                    <p className="hidden md:block text-[18px] md:text-[20px] leading-[130%]">You want to make your skiing or snowboarding experience even more fun.</p>
                    <p className="md:hidden text-[18px] leading-[120%]">You want to make your skiing or <br/> snowboarding experience even <br/> more fun.</p>
                </div>
            </div>
            
            <div className="w-full h-full mt-10 md:mt-0">
                <img className="w-full h-full object-cover" src={img} alt="this is for you if..." />
            </div>
       </div>
    )
}

export default ForYouBlock;