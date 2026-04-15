import Location from "../UI/Icons/Location";

interface LocationSummaryCardProps {
    resort : string;
    location : string;
}

const LocationSummaryCard: React.FC<LocationSummaryCardProps> = ({ resort, location}) => {
    
    return (
        <div className="bg-white py-2 px-4">
             <h5 className="leading-[130%] md:text-[#696969]">Location</h5>
                <div className="text-[#EA4300] flex align-center pt-2">
                    <Location/>
                    <h2 className="text-black pl-2 text-[18px] md:text-[20px] leading-[120%]">{resort && location? (<>{resort}, {location}</>) :  "Not selected"}</h2>
                </div>
        </div>
    );
};

export default LocationSummaryCard;