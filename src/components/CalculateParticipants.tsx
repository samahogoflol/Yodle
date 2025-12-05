import { Plus, Minus } from "./UI/Icons/MinusAndPlus";
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
        <div className="w-full bg-[#80AAEF] mt-16 p-7 rounded">
           <h2 className="text-[26px] font-semibold mb-6">Number of Participants</h2>
           <div className="flex items-center gap-2">
            <div 
                className="py-3" 
                onClick={handleMinus}>
                <Minus
                className={currentParticipants <= 1? unActiveClass : "cursor-pointer" }
                />
            </div>
            <div className="px-3 border-1 text-[20px]">{currentParticipants}</div>
            <div 
            className="py-3" 
            onClick={handlePlus}>
                <Plus
                className={currentParticipants >= 4 ? unActiveClass : "cursor-pointer "}
                />
            </div>
            <p className="text-[20px]">Participants (4 max)</p>
           </div>
        </div>
    )
}

export default CalculateParticipants;