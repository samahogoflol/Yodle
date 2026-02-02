import Header from "../../components/Header/Header";
import CalculateParticipants from "../../components/CalculateParticipants";
import InstructorCard from "../../components/InstructorList/InstructorList";
import SelectYourInstructor from "../../components/SelectYourInstructor/SelectYourInstructor";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";
import TimeAndDuration from "../../components/Time&Duration/TimeAndDuration";
import { BigSnowFull } from "../../components/UI/Icons/BigFullSnow";
import BigSnow from "../../components/UI/Icons/BigSnow";

import { INSTRUCTORS_MOCK_DATA } from "../../data/instructorsMock";
import type { InstructorsProps } from "../../types/instructors";

import { useState } from "react";

import { type SortCriteria} from "../../components/constants/sort";


const sortInstructors = (
    data: InstructorsProps[], 
    criteria: SortCriteria 
): InstructorsProps[] => {
    let sortedData = [...data]; 

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
            const valA = a[sortKey!] ?? 0; 
            const valB = b[sortKey!] ?? 0;

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

    const [filterCriteria, setFilterCriteria] = useState<SortCriteria>("RATING_DESC");

    const handleFilterUpdate = (newCriteria : SortCriteria) => {
        setFilterCriteria(newCriteria)
    }

    const workingInstructors = INSTRUCTORS_MOCK_DATA.filter(item => item.isWorking);

    const instructorsToDisplay = sortInstructors(
        workingInstructors as InstructorsProps[], 
        filterCriteria
    );

    return (
        <div className="mb-16 relative z-10 ">
            <div className="mt-5">
                <Header/>
            </div>
            <h2 className="text-center text-[56px] font-semibold mt-40 mb-[85px]">Find Your Instructor</h2>
            <div className="grid grid-cols-3 px-[85px] gap-7 z-10">
                <div className="col-span-2 z-10">
                    <TimeAndDuration/>
                    <CalculateParticipants/>
                    <SelectYourInstructor
                    sortCriteria={filterCriteria}
                    onFilterChange={handleFilterUpdate}
                    />
                    <div>
                        <InstructorCard
                        instructors={instructorsToDisplay}
                        />
                    </div>
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
                    witdh="64px"
                    height="64px"
                    viewBox="0 0 574 640"
                />
            </div>
            <div className="absolute top-[10vw] left-[10vw] rotate-60">
                <BigSnow
                    witdh="64px"
                    height="64px"
                    viewBox="0 0 574 640"
                />
        </div>

        </div>
    )
}

export default FindYourInstructor;