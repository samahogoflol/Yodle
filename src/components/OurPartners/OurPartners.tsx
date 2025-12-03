import logo1 from "../../assets/partners/mt_hood_logo.png"
import logo2 from "../../assets/partners/Sugar_bowl_logo.png"
import logo3 from "../../assets/partners/china_peak_logo.png"
import logo4 from "../../assets/partners/MBSA_logo.png"


const OurPartners = () => {
    return (
        <div id="partners" className="bg-white text-center py-25">
            <h2 className="text-[56px] font-semibold">Reliable ski lesson partners for</h2>
            <div className="flex px-[146px] gap-[182px] mt-20">
                <img src={logo1} alt="MT. Hood Company" />
                <img src={logo2} alt="Sugar Bowl Company" />
                <img src={logo3} alt="China Peak Company" />
                <img src={logo4} alt="MT. Baker Company" />
            </div>
        </div>
    ) 
}

export default OurPartners;
