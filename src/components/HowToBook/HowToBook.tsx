import littleSnow from "../../assets/icons/snow_64x64.png"
import bigSnow from "../../assets/icons/bigSnow.png"

const HowToBook = () => {
    return (
        <div id="how-to-book" className="container mt-25 relative">
            <div className="absolute right-[-10vw] top-[4vw] ">
                <img className="w-full h-full object-cover" src={bigSnow} alt="decoration" />
            </div>
            <div className="absolute left-[28vw] bottom-[12vw]">
                <img className="w-full h-full object-cover" src={littleSnow} alt="decoration" />
            </div>
            <h2 className="text-[56px] font-semibold text-center">How to book your lesson</h2>
            <div className="mt-15 flex-col">
                <div className="grid grid-cols-3 gap-45 mb-10">
                    <div className="w-[440px] h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[26px] font-semibold">Choose Your Location</h2>
                            <p className="text-[60px] opacity-40">01</p>
                        </div>
                        <div>
                           <p className="text-[20px] mt-20">Select your favorite ski resort</p>
                        </div>
                    </div>
                    <div className="w-[440px] h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[26px] font-semibold">Pick Your Date & Time</h2>
                            <p className="text-[60px] opacity-40">02</p>
                        </div>
                        <div>
                           <p className="text-[20px] mt-20">Choose date, time, and lesson duration</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-45 mb-10">
                     <div className="w-[440px] h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5 col-start-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[26px] font-semibold">Select Your Instructor</h2>
                            <p className="text-[60px] opacity-40">03</p>
                        </div>
                        <div>
                           <p className="text-[20px] mt-20">Browse certified pros and check their ratings</p>
                        </div>
                    </div>
                    <div className="w-[440px] h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5 z-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[26px] font-semibold">Secure Payment</h2>
                            <p className="text-[60px] opacity-40">04</p>
                        </div>
                        <div>
                           <p className="text-[20px] mt-20">Book instantly with our secure checkout</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default HowToBook;