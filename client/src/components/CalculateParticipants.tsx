import { PlusIcon, MinusIcon } from "./UI/Icons/MinusAndPlus";
import { useBookingDetails } from "../utilities/customHooks/useBookingDetails";

const CalculateParticipants = () => {

    const {bookingDetails, setBookingDetails} = useBookingDetails()

    const currentParticipants = bookingDetails.numberOfParticipants;

    const handlePlus = () => {
        if (currentParticipants < 4) {
             setBookingDetails((prevState) => ({
                ...prevState,
                numberOfParticipants: prevState.numberOfParticipants + 1,
            }));
        }
    };

    const handleMinus = () =>{
        if (currentParticipants > 1) {
            setBookingDetails((prevState) => ({
                ...prevState,
                numberOfParticipants: prevState.numberOfParticipants - 1,
            }));
        }
    };
    
    const unActiveClass = "text-[#696969] cursor-default"

    return (
        <div className="w-full bg-[#80AAEF]  p-4 md:p-7 rounded">
           <h2 className="text-[22px] mb-4 md:text-[26px] md:font-semibold md:mb-6">Number of Participants</h2>
           <div className="flex items-center gap-1 md:gap-2 p-4 md:py-5 md:px-4 bg-white">
            <div 
                className="py-3" 
                onClick={handleMinus}>
                <MinusIcon
                className={currentParticipants <= 1? unActiveClass : "cursor-pointer " }
                />
            </div>
            <div className="px-3 text-[20px] md:bg-primary-selected md:text-white">{currentParticipants}</div>
            <div 
            className="py-3" 
            onClick={handlePlus}>
                <PlusIcon
                className={currentParticipants === 4 ? unActiveClass : "cursor-pointer "}
                />
            </div>
            <p className="text-[18px] md:text-[20px] ml-2 md:ml-0">participants (4 max)</p>
           </div>
        </div>
    )
}

export default CalculateParticipants;