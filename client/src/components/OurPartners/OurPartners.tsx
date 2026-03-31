import logo1 from "../../assets/partners/mt_hood_logo.png"
import logo2 from "../../assets/partners/Sugar_bowl_logo.png"
import logo3 from "../../assets/partners/china_peak_logo.png"
import logo4 from "../../assets/partners/MBSA_logo.png"
import test1 from "./MBSA_2х copy.png"
import test2 from "./Graveyard_2x.png"
import test3 from "./Sugar Bowl_2x.png"

const OurPartners = () => {
    return (
        <div id="partners" className="bg-white text-center py-15 md:py-25">
            <h2 className="text-[38px] md:text-[56px] font-medium md:font-semibold leading-[100%]">Reliable ski lesson partners for</h2>
            <div className="flex flex-col md:flex-row md:px-[146px] justify-between mt-10 md:mt-20">
                <img className="hidden md:block" src={logo1} alt="MT. Hood Company" />
                <img className="hidden md:block" src={logo2} alt="Sugar Bowl Company" />
                <img className="hidden md:block" src={logo3} alt="China Peak Company" />
                <img className="hidden md:block" src={logo4} alt="MT. Baker Company" />

                <div className="flex items-center justify-between px-15 mb-[40px] md:hidden ">
                    <img className="md:hidden" src={test2} width={140} alt="MT. Hood Company" />
                    <img className="md:hidden" src={test3} width={70} alt="Sugar Bowl Company" />
                </div>
                <div className="flex items-center justify-between px-15 md:hidden ">
                    <img className="md:hidden" src={test1} width={80} alt="MT. Baker Company" />
                    <img className="md:hidden" src={logo3} width={180} alt="China Peak Company" />
                </div>
            </div>
        </div>
    ) 
}

export default OurPartners;
