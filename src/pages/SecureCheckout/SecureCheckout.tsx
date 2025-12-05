import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Payment from "../../components/Payment/Payment";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";

const SecureCheckout = () => {

    return (
        <div>
            <h2 className="text-[56px] font-semibold text-center pt-40 pb-[85px]">Secure Checkout</h2>
            <div className="grid grid-cols-5 px-[189px] gap-7">  
                <div className="flex flex-col col-span-3 gap-11">
                    <div><ContactInfo/></div>
                    <div><Payment/></div>
                </div>
                <div className="col-span-2">
                    <SummaryBlock
                        showLocation={true}
                        showDataAndTime={true}
                        showInstructor={true}
                        showParticipants={false}
                        showType={false}
                        buttonText="Place your order"
                        />
                </div> 
            </div>
        </div>
    )  
}

export default SecureCheckout;