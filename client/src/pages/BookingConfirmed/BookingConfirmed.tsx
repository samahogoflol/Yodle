import { Link } from "react-router-dom";
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";

import DataAndTimeSummaryCard from "../../components/DataAndTimeSummaryCard/DataAndTimeSummaryCard";
import InstructorsSummaryBlock from "../../components/InstructorsSummaryBlock/InstructorsSummaryBlock";
import LocationSummaryCard from "../../components/LocationSummaryCard/LocationSummaryCard";

import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";
import { calculateBookingPrice } from "../../components/Features/calculateBookingPrice";
import type { BookingDetailsProps } from "../../types/BookingDetailsProps";

import BigSnow from "../../components/UI/Icons/BigSnow";
import TotalPriceSummaryBlock from "../../components/TotalPriceSummaryBlock/TotalPriceSummaryBlock";
import ButtonSearchInstruktor from "../../components/UI/ButtonSearchInstructor";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const BookingConfirmed = () => {

    const {isMobile} = useWindowWidth()

    const {bookingDetails} = useBookingDetails()

    const finalPrice = bookingDetails.instructor 
        ? calculateBookingPrice(bookingDetails as BookingDetailsProps)
        : 0;

    return (
        <div>
            {isMobile && (<div className="mt-[26px]"><Header/></div>)}
            <div className="flex flex-col py-15 md:py-[90px] relative z-10 p-4">
                <div className="bg-[#2E78E5] p-4 md:p-7 leading-[130%] z-10 md:w-9/20 md:ml-auto md:mr-auto">
                    <section className="flex flex-col gap-5 md:gap-6">
                        <h2 className="text-center text-white text-[22px] md:text-[26px] md:font-semibold leading-[120%]">Booking confirmed!</h2>
                        <span className="text-center text-white  text-[18px] md:text-[20px] mb-5 md:mb-6 leading-[120%]">Confirmation Number: <br/> #SK-2025-4782</span>
                    </section>
                    <div className="flex flex-col gap-5">
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
                            instructorPhoto={bookingDetails.instructor?.photoMain}
                            instructorRating={bookingDetails.instructor?.rating}
                            instructorTotalReviews={bookingDetails.instructor?.howManyFeedback}
                        />

                        <div>
                            <h5 className="text-center text-white font-normal text-[18px] md:text-[20px]">A confirmation email has been sent to your email address</h5>    
                        </div>

                        <TotalPriceSummaryBlock
                            totalPriceStyles="flex text-[26px] font-semibold justify-between w-full md:p-4 text-white md:mt-6"
                            finalPrice={finalPrice.toFixed(2)}
                        />
                        {!isMobile && (
                            <Link to="/">
                                <div className="flex justify-center">
                                    <ButtonSearchInstruktor
                                    name="Back to Home"
                                    onClick={() => null}
                                    className="mt-6"
                                    />
                                </div>
                            </Link>
                        )} 
                    </div>
                </div>

                {isMobile && (
                    <Link to="/">
                        <div className="flex justify-center">
                            <ButtonSearchInstruktor
                                name="Back to Home"
                                onClick={() => null}
                                className="mt-6"
                            />
                        </div>
                    </Link>
                )}

                <div className="hidden md:block absolute top-[17vw] right-0">
                    <BigSnow
                        width="477px"
                        height="594px"
                        viewBox="0 0 477 594"
                    />
                </div>
                <div className="absolute bottom-[-30px] right-15 md:bottom-0 md:top-[4vw] md:right-[7vw] md:rotate-60">
                    <BigSnow
                        width="64px"
                        height="64px"
                        viewBox="0 0 574 640"
                    />
                </div>
                <div className="hidden md:block absolute top-[50%] left-[5vw] rotate-60">
                    <BigSnow
                        width="64px"
                        height="64px"
                        viewBox="0 0 574 640"
                    />
                </div>
                <div className="block md:hidden absolute bottom-[-15px] left-15">
                    <BigSnow
                        width="34px"
                        height="34px"
                        viewBox="0 0 574 640"
                    />
                </div>
            </div>
            {isMobile && (<Footer/>)}
    </div> 
    )
}

export default BookingConfirmed;