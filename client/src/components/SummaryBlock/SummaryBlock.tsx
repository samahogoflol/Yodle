import type { BookingDetailsProps } from "../../types/BookingDetailsProps";

import { Link } from "react-router-dom";

import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";

import { calculateBookingPrice } from "../Features/calculateBookingPrice";
import ButtonSearchInstruktor from "../UI/ButtonSearchInstructor";
import LocationSummaryCard from "../LocationSummaryCard/LocationSummaryCard";
import DataAndTimeSummaryCard from "../DataAndTimeSummaryCard/DataAndTimeSummaryCard";
import TypeSummeryCard from "../TypeSummeryCard/TypeSummeryCard";
import ParticipantsSummaryCard from "../ParticipantsSummaryCard/ParticipantsSummaryCard";
import InstructorsSummaryBlock from "../InstructorsSummaryBlock/InstructorsSummaryBlock";
import TotalPriceSummaryBlock from "../TotalPriceSummaryBlock/TotalPriceSummaryBlock";

interface SummaryBlockProps {
    showLocation: boolean;
    showDataAndTime: boolean;
    showInstructor: boolean;
    showType : boolean;
    showParticipants : boolean;
    buttonText : string;
    totalPriceStyles : string;
    linkButtonTo : string;
}


const SummaryBlock:React.FC<SummaryBlockProps> = ({showLocation, showDataAndTime, showInstructor, showType, showParticipants, buttonText, totalPriceStyles, linkButtonTo}) => {

    const {bookingDetails} = useBookingDetails();
    const {isMobile} = useWindowWidth();

    const finalPrice = bookingDetails.instructor 
    ? calculateBookingPrice(bookingDetails as BookingDetailsProps)
    : 0;

    return (
        <div className="bg-[#80AAEF] rounded p-7 flex flex-col gap-4">
            <h2 className="text-[26px] font-semibold mb-6">Summary</h2>
            {showType && (
                <TypeSummeryCard
                    typeOfSport={bookingDetails.typeOfSport}
                />
           )}
            {showLocation && (
               <LocationSummaryCard
               resort={bookingDetails.resort}
               location={bookingDetails.location}
               />
            )}
            {showDataAndTime && (
            <DataAndTimeSummaryCard
                date={bookingDetails.date}
                bookingEndTime={bookingDetails.bookingEndTime}
                bookingStartTime={bookingDetails.bookingStartTime}
                bookingDetails={bookingDetails.lessonTime}
            />
            )}
          
            {showParticipants && (
            <ParticipantsSummaryCard
                numberOfParticipants={bookingDetails.numberOfParticipants}
            />
            )}
            {showInstructor && (
            <InstructorsSummaryBlock
                instructorId={bookingDetails.instructor?.id}
                instructorPhoto={bookingDetails.instructor?.photoMain}
                instructorName={bookingDetails.instructor?.name}
                instructorRating={bookingDetails.instructor?.rating}
                instructorExperience={bookingDetails.instructor?.experience}
                instructorTotalReviews={bookingDetails.instructor?.howManyFeedback}
            />
            )}
                <div className="pt-3 md:pt-6">
                   <TotalPriceSummaryBlock
                    finalPrice={finalPrice.toFixed(2)}
                    totalPriceStyles={totalPriceStyles}
                    />
                </div>
                {!isMobile && (
                    <Link to={linkButtonTo}>
                        <div className="flex justify-center">
                            <ButtonSearchInstruktor
                                name={buttonText}
                                onClick={() => null}
                                className="mt-6"
                                />
                        </div>
                    </Link>
                )}
        </div>
    );
}

export default SummaryBlock;