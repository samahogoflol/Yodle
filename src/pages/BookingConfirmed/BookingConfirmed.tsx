import DataAndTimeSummaryCard from "../../components/DataAndTimeSummaryCard/DataAndTimeSummaryCard";
import InstructorsSummaryBlock from "../../components/InstructorsSummaryBlock/InstructorsSummaryBlock";
import LocationSummaryCard from "../../components/LocationSummaryCard/LocationSummaryCard";

import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";
import { calculateBookingPrice } from "../../components/Features/calculateBookingPrice";
import type { BookingDetailsProps } from "../../types/BookingDetailsProps";

import BigSnow from "../../components/UI/Icons/BigSnow";
import TotalPriceSummaryBlock from "../../components/TotalPriceSummaryBlock/TotalPriceSummaryBlock";
import ButtonSearchInstruktor from "../../components/UI/ButtonSearchInstructor";

const BookingConfirmed = () => {

    const {bookingDetails} = useBookingDetails()

    const finalPrice = bookingDetails.instructor 
        ? calculateBookingPrice(bookingDetails as BookingDetailsProps)
        : 0;

    return (
        <div className="flex justify-center py-[90px] relative z-10">
            <div className="bg-[#2E78E5] p-7 leading-[130%] z-10 w-9/20">
            <section className="flex flex-col gap-6">
                <h2 className="text-center text-white text-[26px] font-semibold">Booking confirmed! </h2>
                <p className="text-center text-white text-[20px] mb-6">A confirmation email has been sent to your email address</p>
            </section>
            <div>
                <LocationSummaryCard
                    location={bookingDetails.location}
                    resort={bookingDetails.resort}
                />
                <DataAndTimeSummaryCard
                     date={bookingDetails.date}
                     bookingStartTime={bookingDetails.bookingStartTime}
                     bookingEndTime={bookingDetails.bookingEndTime}
                     bookingDetails={bookingDetails.lessonTime}
                />
                <InstructorsSummaryBlock
                    instructorExperience={bookingDetails.instructor?.experience}
                    instructorId={bookingDetails.instructor?.id}
                    instructorName={bookingDetails.instructor?.name}
                    instructorPhoto={bookingDetails.instructor?.photo}
                    instructorRating={bookingDetails.instructor?.rating}
                />
                <TotalPriceSummaryBlock
                    totalPriceStyles="flex text-[26px] font-semibold justify-between w-full p-4 text-white mt-6"
                    finalPrice={finalPrice.toFixed(2)}
                />
                <div className="flex justify-center">
                    <ButtonSearchInstruktor
                    name="Back to Home"
                    onClick={() => null}
                    />
                </div>
               
            </div>
         </div>

            <div className="absolute top-[17vw] right-0">
                <BigSnow
                    witdh="477px"
                    height="594px"
                    viewBox="0 0 477 594"
                />
            </div>
            <div className="absolute top-[4vw] right-[7vw] rotate-60">
                <BigSnow
                    witdh="64px"
                    height="64px"
                    viewBox="0 0 574 640"
                />
            </div>
            <div className="absolute top-[50%] left-[5vw] rotate-60">
                <BigSnow
                    witdh="64px"
                    height="64px"
                    viewBox="0 0 574 640"
                />
            </div>
        </div>
        
    )
}

export default BookingConfirmed;