import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Payment from "../../components/Payment/Payment";
import { PromocodeButton } from "../../components/PromocodeButton/PromocodeButton";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";
// import BigSnow from "../../components/UI/Icons/BigSnow";

const SecureCheckout = () => {

    const {isMobile} = useWindowWidth()

    return (
        <div className="relative z-10 leading-[130%] mt-26 md:mt-40">
            <h1 className="text-[38px] md:text-[56px] md:font-semibold text-center leading-[100%]">Secure Checkout</h1>
            <div className="md:grid md:grid-cols-5 px-4 md:px-[189px] gap-7 z-10 pt-[30px] md:pt-[85px] pb-15 md:pb-[184px]">
                <div className="flex flex-col col-span-3 gap-5 md:gap-11">
                    <ContactInfo/>
                    <Payment/>
                    {isMobile && (<PromocodeButton/>)}
                </div>
                <div className="col-span-2 z-10" >
                    {!isMobile && (<PromocodeButton/>)}
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
                {/* <div className="absolute top-[5vw] right-[7vw] rotate-60">
                    <BigSnow
                        width="64px"
                        height="64px"
                        viewBox="0 0 574 640"
                    />
                </div> */}
                {/* <div className="absolute top-[30vw] left-[5vw] rotate-60">
                    <BigSnow
                        width="64px"
                        height="64px"
                        viewBox="0 0 574 640"
                    />
                </div> */}
            </div>
           {/* <div className="absolute bottom-0 right-0">
                <BigSnow
                    width="477px"
                    height="594px"
                    viewBox="0 0 477 264"
                />      
           </div> */}
        </div>
    )  
}

export default SecureCheckout;