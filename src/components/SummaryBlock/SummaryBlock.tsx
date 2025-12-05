import Location from "../UI/Icons/Location";
import { CalendarIcon } from "../UI/Icons/CalendarIcon";
import { CheckmarkIcon } from "../UI/Icons/Checkmark";
import { SkiingIcon } from "../UI/Icons/Skiing";
import { PersonIcon } from "../UI/Icons/PersonIcon";
import { StarIcon } from "../UI/Icons/StarIcon";
import type { BookingDetailsProps } from "../../types/BookingDetailsProps";

import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";

import { calculateBookingPrice } from "../Features/calculateBookingPrice";
import ButtonSearchInstruktor from "../UI/ButtonSearchInstructor";


const SummaryBlock = () => {

    const {bookingDetails} = useBookingDetails()

   const finalPrice = bookingDetails.instructor 
    ? calculateBookingPrice(bookingDetails as BookingDetailsProps)
    : 0;

    return (
        <div className="bg-[#80AAEF] rounded p-7">
            <h2 className="text-[26px] font-semibold mb-6">Summary</h2>
            <div className="bg-white p-4 leading-[130%]">
                <h2>Location</h2>
                <div className="text-[#EA4300] flex align-center pt-3">
                    <Location/>
                    <p className="text-black pl-2 text-[20px]">{bookingDetails.resort}, {bookingDetails.location}</p>
                </div>
            </div>
            <div className="bg-white p-4 leading-[130%] mt-6">
                  <h2>Date & Time</h2>
                  <div className="text-[#EA4300] flex align-center pt-3">
                    <CalendarIcon/>
                    <p className="text-black pl-2 text-[20px]">
                        {bookingDetails.date?.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                        }) || 'Not selected'},
                    </p>
                    <p className="text-black pl-1 text-[20px]">{bookingDetails.bookingStartTime} - {bookingDetails.bookingEndTime} </p>
                  </div>
                  <div className="flex items-center mt-3">
                    <CheckmarkIcon/>
                    <p className="text-black pl-2 ">{bookingDetails.lessonTime} lesson</p>
                  </div>
            </div>
            <div className="bg-white p-4 leading-[130%] mt-6">
                <h2>Type</h2>
                <div className="text-[#EA4300] flex items-center pt-3">
                    <SkiingIcon/>
                    <p className="text-black pl-2 text-[20px]">{bookingDetails.typeOfSport}</p>
                </div>
            </div>
            <div className="bg-white p-4 leading-[130%] mt-6">
                <h2>Number of participants</h2>
                <div className="text-[#EA4300] flex items-center pt-3">
                    <PersonIcon/>
                    <p className="text-black pl-2 text-[20px]">{bookingDetails.numberOfParticipants}</p>
                </div>
            </div>
            <div className="bg-white p-4 leading-[130%] mt-6">
                <h2>Instructor</h2>
                <div className="flex items-center mt-3 mb-3">
                    <img 
                    className={`w-7 h-7 object-cover rounded-[50%] ${bookingDetails.instructor?.id === 4 ? "object-top" : null}`} 
                    src={bookingDetails.instructor?.photo} 
                    alt={`Instructor's ${bookingDetails.instructor?.name} photo`} 
                    /> 
                    <p className="pl-2 text-[20px]">{bookingDetails.instructor?.name}</p>
                </div>
                <div className="flex items-center">
                    <StarIcon/> 
                    <p className="pl-2 pr-5 ">{bookingDetails.instructor?.rating}</p>
                    <p>{bookingDetails.instructor?.experience} years exp</p>
                </div>
            </div>
                <div className="py-6">
                    <div className="flex text-[26px] font-semibold justify-between w-full p-4">
                        <p>Total</p>
                        <p>{finalPrice.toFixed(2)}</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <ButtonSearchInstruktor
                    name="Proceed to Checkout"
                    onClick={() => null}
                    />
                </div>
               
        </div>
    );
}

export default SummaryBlock;