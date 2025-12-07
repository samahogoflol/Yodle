import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Payment from "../../components/Payment/Payment";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";
import BigSnow from "../../components/UI/Icons/BigSnow";

import Header from "../../components/Header/Header";

const SecureCheckout = () => {

    return (
        <div className="relative z-10 leading-[130%] ">
            <div className="mt-5 pb-40">
                <Header/>
            </div>
            <h2 className="text-[56px] font-semibold text-center leading-[100%]">Secure Checkout</h2>
            <div className="grid grid-cols-5 px-[189px] gap-7 z-10 pt-[85px] pb-[184px]">  
                <div className="flex flex-col col-span-3 gap-11">
                    <div><ContactInfo/></div>
                    <div><Payment/></div>
                </div>
                <div className="col-span-2 z-10" >
                    <SummaryBlock
                        showLocation={true}
                        showDataAndTime={true}
                        showInstructor={true}
                        showParticipants={false}
                        showType={false}
                        buttonText="Place your order"
                        totalPriceStyles="flex text-[26px] font-semibold justify-between w-full p-4"
                        linkButtonTo="/bookingConfirmed"
                        />
                </div> 
                <div className="absolute top-[5vw] right-[7vw] rotate-60">
                    <BigSnow
                        witdh="64px"
                        height="64px"
                        viewBox="0 0 574 640"
                    />
                </div>
                <div className="absolute top-[30vw] left-[5vw] rotate-60">
                    <BigSnow
                        witdh="64px"
                        height="64px"
                        viewBox="0 0 574 640"
                    />
                </div>
            </div>
           <div className="absolute bottom-0 right-0">
                <BigSnow
                    witdh="477px"
                    height="594px"
                    viewBox="0 0 477 264"
                />      
           </div>
        </div>
    )  
}

export default SecureCheckout;