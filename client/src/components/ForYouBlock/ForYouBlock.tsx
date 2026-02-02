import "../../styles/index.css"

import img from "../../assets/images/forYouBlockImg.png"
import arrow from "../../assets/icons/bigBlueArrow.png"

const ForYouBlock = () => {
    return (
       <div className=" bg-white grid grid-cols-2 py-25 leading-[130%]">
            <div className="container">
                <h2 className="text-[56px] font-semibold mb-15 leading-[100%]">This is for you if</h2>
                <div className="mb-10 flex gap-15 items-center w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[20px]">You’re hitting the slopes for the first time and want to learn with confidence.</p>
                </div>
               <div className="mb-10 flex gap-15 items-center w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[20px]">You value safety, a personal approach, and comfortable learning.</p>
                </div>
                 <div className="mb-10 flex gap-15 items-center w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[20px]">You’re ready to improve your technique and take your skills to the next level.</p>
                </div>
                 <div className="mb-10 flex gap-15 items-center w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[20px]">You’re planning a winter trip and want to book your lessons in advance.</p>
                </div>
                 <div className="mb-10 flex gap-15 items-center w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[20px]">You’re looking for a trusted instructor in your chosen location.</p>
                </div>
                 <div className="mb-10 flex gap-15 items-center w-[544px]">
                    <img src={arrow} alt="" />
                    <p className="text-[20px]">You want to make your skiing or snowboarding experience even more fun.</p>
                </div>
            </div>

            <div>
                <img className="w-[full] h-full object-cover" src={img} alt="this is for you if..." />
            </div>
       </div>
    )
}

export default ForYouBlock;