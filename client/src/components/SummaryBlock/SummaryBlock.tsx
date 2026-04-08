import type { BookingDetailsProps } from "../../types/BookingDetailsProps";
import { Link } from "react-router-dom";
import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";
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
    linkButtonTo?: string; 
    formId?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; 
}

const SummaryBlock:React.FC<SummaryBlockProps> = ({showLocation, showDataAndTime, showInstructor, showType, showParticipants, buttonText, totalPriceStyles, linkButtonTo, formId, onClick}) => {

    const {bookingDetails} = useBookingDetails();

    const finalPrice = bookingDetails.instructor 
    ? calculateBookingPrice(bookingDetails as BookingDetailsProps)
    : 0;

    return (
        <div>
             <div className="bg-[#80AAEF] rounded p-4 md:p-7 flex flex-col gap-4">
                <h2 className="text-[22px] md:text-[26px] md:font-semibold md:mb-6 leading-[130%]">Summary</h2>
                {showType && (
                    <TypeSummeryCard typeOfSport={bookingDetails.typeOfSport} />
                )}
                {showLocation && (
                    <LocationSummaryCard resort={bookingDetails.resort} location={bookingDetails.location} />
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
                    <ParticipantsSummaryCard numberOfParticipants={bookingDetails.numberOfParticipants} />
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
            </div>

            <div className="w-full mt-6">
                {formId ? (
                    <div className="flex justify-center">
                        <ButtonSearchInstruktor
                            name={buttonText}
                            type="submit" 
                            form={formId}
                        />
                    </div>
                ) : (
                    <Link onClick={onClick} to={linkButtonTo || "#"}>
                        <div className="flex justify-center">
                            <ButtonSearchInstruktor
                                name={buttonText}
                            />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default SummaryBlock;