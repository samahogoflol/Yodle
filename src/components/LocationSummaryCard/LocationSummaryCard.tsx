import Location from "../UI/Icons/Location";

interface LocationSummaryCardProps {
    resort : string;
    location : string;
}

const LocationSummaryCard: React.FC<LocationSummaryCardProps> = ({ resort, location}) => {
    
    return (
        <div className="bg-white p-4 leading-[130%]">
             <h2>Location</h2>
                <div className="text-[#EA4300] flex align-center pt-3">
                    <Location/>
                    <p className="text-black pl-2 text-[20px]">{resort}, {location}</p>
                </div>
        </div>
    );
};

export default LocationSummaryCard;