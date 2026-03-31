import CalculateParticipants from "../../components/CalculateParticipants";
import InstructorCard from "../../components/InstructorList/InstructorList";
import SelectYourInstructor from "../../components/SelectYourInstructor/SelectYourInstructor";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";
import TimeAndDuration from "../../components/Time&Duration/TimeAndDuration";
import { BigSnowFull } from "../../components/UI/Icons/BigFullSnow";
import BigSnow from "../../components/UI/Icons/BigSnow";
import { INSTRUCTORS_MOCK_DATA } from "../../data/instructorsMock";
import type { InstructorsProps } from "../../types/instructors";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";

import { type SortCriteria} from "../../components/constants/sort";
import ButtonSearchInstruktor from "../../components/UI/ButtonSearchInstructor";


const sortInstructors = (
    data: InstructorsProps[], 
    criteria: SortCriteria 
): InstructorsProps[] => {
    const sortedData = [...data]; 

    let sortKey: keyof InstructorsProps | null = null;
    let direction: 'asc' | 'desc' = 'asc';

    switch (criteria) {
        case "RATING_DESC":
            sortKey = 'rating';
            direction = 'desc'; 
            break;
        case "EXPERIENCE_DESC":
            sortKey = 'experience';
            direction = 'desc'; 
            break;
        case "PRICE_INC":
            sortKey = 'price';
            direction = 'asc'; 
            break;
        case "PRICE_DESC":
            sortKey = 'price';
            direction = 'desc'; 
            break;
        default:
            return sortedData;
    }

    if (sortKey) {
        sortedData.sort((a, b) => {
            const valA = a[sortKey] ?? 0; 
            const valB = b[sortKey] ?? 0;

            if (direction === 'asc') {
                return valA - valB;
            } else {
                return valB - valA;
            }
        });
    }

    return sortedData;
};

const FindYourInstructor = () => {

    const {isMobile}= useWindowWidth();
    const [filterCriteria, setFilterCriteria] = useState<SortCriteria>("RATING_DESC");
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => setCurrentStep((prev) => prev + 1);
    // const handlePrev = () => setCurrentStep((prev) => prev - 1);


    const handleFilterUpdate = (newCriteria : SortCriteria) => {
        setFilterCriteria(newCriteria)
    }

    const workingInstructors = INSTRUCTORS_MOCK_DATA.filter(item => item.isWorking);

    const instructorsToDisplay = sortInstructors(
        workingInstructors, 
        filterCriteria
    );

    return (
        <div className="mb-16 relative z-10">
            <h1 className="text-center text-[38px] md:text-[56px] font-medium md:font-semibold mt-20 md:mt-40 mb-[30px] md:mb-[85px] ">Find Your Instructor</h1>
            {!isMobile  && (
                <div>
                    <div className="grid grid-cols-3 px-[85px] gap-7 z-10">
                        <div className="col-span-2 z-10">
                            <TimeAndDuration/>
                            <CalculateParticipants/>
                            <SelectYourInstructor
                                sortCriteria={filterCriteria}
                                onFilterChange={handleFilterUpdate}
                            />
                            <InstructorCard
                                instructors={instructorsToDisplay}
                            />
                        </div>
                        <div className="z-10">
                            <SummaryBlock 
                                showDataAndTime={true}
                                showInstructor={true}
                                showLocation={true}
                                showParticipants={true}
                                showType={true}
                                buttonText="Proceed to Checkout"
                                totalPriceStyles="flex text-[26px] font-semibold justify-between w-full p-4"
                                linkButtonTo="/secureCheckout"
                            />
                        </div>
                    </div>
                    <div className="absolute top-[88vw] right-0">
                        <BigSnowFull/>
                    </div>
                    <div className="absolute top-[22vw] right-[7vw] rotate-60">
                        <BigSnow
                            width="64px"
                            height="64px"
                            viewBox="0 0 574 640"
                        />
                    </div>
                    <div className="absolute top-[10vw] left-[9vw] rotate-60">
                        <BigSnow
                            width="64px"
                            height="64px"
                            viewBox="0 0 574 640"
                        />
                    </div>
                </div>
            )}
            {isMobile && (
                <div className="px-4 z-10 ">
                    <div className="absolute top-10 right-1">
                         <BigSnow
                            width="44px"
                            height="44px"
                            viewBox="0 0 574 640"
                        />
                    </div>
                    {currentStep === 1 && (
                        <div className="animate-fade-in relative">
                            <TimeAndDuration />
                            <CalculateParticipants />
                            <ButtonSearchInstruktor 
                                onClick={handleNext}
                                name="Search Instructor"
                                className="w-full mt-5 flex items-center justify-center"  
                            />
                            <div className="absolute ">
                                <BigSnow
                                    width="90px"
                                    height="90px"
                                    viewBox="0 0 640 640"
                                />
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="">
                            {/* <button onClick={handlePrev} className="text-blue-500 mb-4">
                                ← Back
                            </button> */}
                            <SelectYourInstructor 
                                sortCriteria={filterCriteria}
                                onFilterChange={handleFilterUpdate}
                            />
                            <InstructorCard instructors={instructorsToDisplay} />
                            <ButtonSearchInstruktor 
                                onClick={handleNext}
                                name="Book lesson"
                                className="w-full mt-5 flex items-center justify-center"  
                            />
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="animate-fade-in">
                            {/* <button onClick={handlePrev} className="text-blue-500 mb-4">
                                ← Back to Instructors
                            </button> */}
                            <SummaryBlock 
                                showDataAndTime={true}
                                showInstructor={true}
                                showLocation={true}
                                showParticipants={true}
                                showType={true}
                                buttonText="Proceed to Checkout"
                                totalPriceStyles="flex text-[22px] md:text-[26px] font-medium md:font-semibold justify-between w-full md:p-4 opacity-70 md:opacity-100"
                                linkButtonTo="/secureCheckout"
                            />

                        <div className="flex justify-center">
                            <Link to="/secureCheckout">
                                
                                <ButtonSearchInstruktor
                                    name="Proceed to Checkout"
                                    className="mt-5 w-full flex justify-center"
                                    />
                            </Link>
                        </div>

                        </div>
                    )}

                </div>
            )}
        </div>
    )
}

export default FindYourInstructor;