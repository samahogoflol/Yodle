// import littleSnow from "../../assets/icons/snow_64x64.png"
// import bigSnow from "../../assets/icons/bigSnow.png"
import { HowToBookCard } from "./HowToBookCard";

const HowToBook = () => {
    return(
        <div id="how-to-book" className="pt-15 md:pt-30 pb-20 md:pb-30">
            <h1 className="hidden md:block md:text-[56px] text-center leading-[100%] pb-15">How to book your lesson</h1>
            <h1 className="md:hidden text-[38px] text-center leading-[100%] pb-10 md:pb-15">How to book <br/> your lesson</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-15 mb-5">
                <HowToBookCard
                    title="Choose your location"
                    number="01"
                    subtitle="Select your favorite ski resort"
                />
                <HowToBookCard
                    title="Pick your date & time"
                    number="02"
                    subtitle="Choose date, time, and lesson duration"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-15 mb-5">
                <div className="hidden md:block"></div>
               <HowToBookCard
                    title="Select your instructor"
                    number="03"
                    subtitle="Browse certified pros and check their ratings"
                />
                <HowToBookCard
                    title="Secure payment"
                    number="04"
                    subtitle="Book instantly with our secure checkout"
                /> 
            </div>
        </div>  
    )

    // return (
    //     <div id="how-to-book" className="mt-15 md:mt-25 relative">
    //         <div className="hidden md:block absolute right-[-10vw] top-[4vw]">
    //             <img className="w-full h-full object-cover" src={bigSnow} alt="decoration" />
    //         </div>
    //         <div className="absolute left-[-4vw] top-[16vw] md:left-[28vw] md:bottom-[12vw] z-10">
    //             <img className="w-full h-full object-cover" src={littleSnow} alt="decoration" />
    //         </div>
    //         <h2 className=" md:hidden text-[38px] md:text-[56px] font-medium md:font-semibold text-center leading-[100%]">How to book <br/> your lesson</h2>
    //         <h1 className="hidden md:block md:text-[56px] text-center leading-[100%]">How to book your lesson</h1>
    //         <div className="mt-15 flex-col">
    //             <div className="px-4 md:pl-10 flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-45 mb-5">
    //                 <div className="md:w-[440px] md:h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5 py-5 md:py-0 z-10">
    //                     <div className="flex justify-between items-center">
    //                         <h2 className="text-[22px] md:text-[26px] md:font-semibold leading-[130%]">Choose your location</h2>
    //                         <p className="text-[42px] md:text-[60px] opacity-40 leading-[84%]">01</p>
    //                     </div>
    //                     <div>
    //                     </div>
    //                        <p className="text-[16px] md:text-[20px] opacity-80 mt-18.5 md:mt-20 pr-15 md:pr-0">Select your favorite ski resort</p>
    //                 </div>
    //                 <div className="md:w-[440px] md:h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5 py-5 md:py-0 z-10">
    //                     <div className="flex justify-between items-center">
    //                         <h2 className="text-[22px] md:text-[26px] md:font-semibold leading-[130%]">Pick your date & time</h2>
    //                         <p className="text-[42px] md:text-[60px] opacity-40 leading-[84%]">02</p>
    //                     </div>
    //                     <div>
    //                        <p className="text-[16px] md:text-[20px] opacity-80 mt-18.5 md:mt-20 pr-15 md:pr-0">Choose date, time, and lesson duration</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="flex flex-col md:grid md:grid-cols-3 md:gap-45 gap-5 mb-20 md:mb-25 px-4 md:px-0">
    //                  <div className="md:w-[440px] md:h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5 col-start-2 py-5 md:py-0 z-10">
    //                     <div className="flex justify-between items-center">
    //                         <h2 className="text-[22px] md:text-[26px] md:font-semibold leading-[130%]">Select your instructor</h2>
    //                         <p className="text-[42px] md:text-[60px] opacity-40 leading-[84%]">03</p>
    //                     </div>
    //                     <div>
    //                        <p className="text-[16px] md:text-[20px] opacity-80 mt-18.5 md:mt-20 pr-15 md:pr-0">Browse certified pros and check their ratings</p>
    //                     </div>
    //                 </div>
    //                 <div className="md:w-[440px] md:h-[220px] bg-[#2E78E5] text-[#FDFDFD] px-5 py-5 md:py-0 z-10">
    //                     <div className="flex justify-between items-center">
    //                         <h2 className="text-[22px] md:text-[26px] md:font-semibold leading-[130%]">Secure payment</h2>
    //                         <p className="text-[42px] md:text-[60px] opacity-40 leading-[84%]">04</p>
    //                     </div>
    //                     <div>
    //                        <p className="text-[16px] md:text-[20px] opacity-80 mt-18.5 md:mt-20 pr-15 md:pr-0">Book instantly with our secure checkout</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default HowToBook;