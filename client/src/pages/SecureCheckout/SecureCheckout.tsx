import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";
import { fullCheckoutSchema } from '../../components/validation/secureChekoutSchmas';
import { PromocodeButton } from "../../components/PromocodeButton/PromocodeButton";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Payment from "../../components/Payment/Payment";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";

const SecureCheckout = () => {

    const { isMobile } = useWindowWidth();
    const navigate = useNavigate();

    const methods = useForm({
        resolver: zodResolver(fullCheckoutSchema),
        mode: 'onBlur'
    });

    const onSubmit = () => {
        void navigate("/bookingConfirmed");
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        void methods.handleSubmit(onSubmit)(e);
    };

    return (
        <FormProvider {...methods}>
            <div className="relative z-10 leading-[130%] mt-26 md:mt-40">
                <h1 className="text-[38px] md:text-[56px] md:font-semibold text-center leading-[100%]">Secure Checkout</h1>
                <form id="checkout-form" onSubmit={onFormSubmit}>
                    <div className="md:grid md:grid-cols-5 px-4 md:px-[189px] gap-7 z-10 pt-[30px] md:pt-[85px] pb-15 md:pb-[184px]">
                        
                        <div className="flex flex-col col-span-3 gap-5 md:gap-11">
                            <ContactInfo />
                            <Payment />
                            {isMobile && (<PromocodeButton />)}
                        </div>
                        
                        <div className="col-span-2 z-10" >
                            {!isMobile && (<PromocodeButton />)}
                            <SummaryBlock
                                showLocation={true}
                                showDataAndTime={true}
                                showInstructor={true}
                                showParticipants={false}
                                showType={false}
                                buttonText="Place your order"
                                totalPriceStyles="flex text-[26px] font-semibold justify-between w-full p-4"
                                formId="checkout-form" 
                            />
                        </div> 
                        
                    </div>
                </form>
            </div>
        </FormProvider>
    )  
}

export default SecureCheckout;