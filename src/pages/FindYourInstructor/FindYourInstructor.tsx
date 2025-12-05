import CalculateParticipants from "../../components/CalculateParticipants";
import InstructorCard from "../../components/InstructorList/InstructorList";
import SelectYourInstructor from "../../components/SelectYourInstructor/SelectYourInstructor";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";
import TimeAndDuration from "../../components/Time&Duration/TimeAndDuration";

import { INSTRUCTORS_MOCK_DATA } from "../../data/instructorsMock";
import type { InstructorsProps } from "../../types/instructors";

import { useState } from "react";

interface FilterValues {
    price: string;
    experience: string;
    rating: string;
}

const initialFilters: FilterValues = {
    price: "Any Price",
    experience: "Any Experience",
    rating: "Any Rating",
};

const sortInstructors = (
    data: InstructorsProps[], 
    criteria: FilterValues
): InstructorsProps[] => {
    let sortedData = [...data]; 

    let sortKey: keyof InstructorsProps | null = null;
    let direction: 'asc' | 'desc' = 'asc';

    if (criteria.rating !== "Any Rating") {
        sortKey = 'rating';
        direction = criteria.rating === "Highest Rating" ? 'desc' : 'asc';
    } else if (criteria.experience !== "Any Experience") {
        sortKey = 'experience';
        direction = criteria.experience === "Highest Experience" ? 'desc' : 'asc';
    } else if (criteria.price !== "Any Price") {
        sortKey = 'price'; 
        direction = criteria.price === "Highest Price" ? 'desc' : 'asc';
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

    const [filterCriteria, setFilterCriteria] = useState<FilterValues>(initialFilters);

    const handleFilterUpdate = (newCriteria : FilterValues) => {
        setFilterCriteria(newCriteria)
    }

    const workingInstructors = INSTRUCTORS_MOCK_DATA.filter(item => item.isWorking);

    const instructorsToDisplay = sortInstructors(
        workingInstructors as InstructorsProps[], 
        filterCriteria
    );

    return (
        <div className="mb-16">
            <h2 className="text-center text-[56px] font-semibold mt-10 mb-[85px]">Find Your Instructor</h2>
            <div className="grid grid-cols-3 px-[85px] gap-7">
                <div className="col-span-2">
                    <TimeAndDuration/>
                    <CalculateParticipants/>
                    <SelectYourInstructor
                    onFilterChange={handleFilterUpdate}
                    />
                    <div>
                        <InstructorCard
                        instructors={instructorsToDisplay}
                        />
                    </div>
                </div>
                <div>
                    <SummaryBlock 
                    showDataAndTime={true}
                    showInstructor={true}
                    showLocation={true}
                    showParticipants={true}
                    showType={true}
                    buttonText="Proceed to Checkout"/>
                </div>
            </div>
        </div>
    )
}

export default FindYourInstructor;