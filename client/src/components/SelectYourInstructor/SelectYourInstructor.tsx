import Dropdown from "../UI/Dropdown";

import { filtersOptions, type SortCriteria } from "../constants/sort";

interface SelectYourInstructorProps {
    onFilterChange : (criteria: SortCriteria) => void;
    sortCriteria : string;
}

const SelectYourInstructor:React.FC<SelectYourInstructorProps> = ({onFilterChange, sortCriteria}) => {

    return (
        <div className="bg-[#80AAEF] rounded w-full mt-16 px-7 flex justify-between">
            <div className="text-[26px] font-semibold leading-[130%] pt-7 pb-[35px]">
                 <h2 >Your Instructor</h2>
            </div>

            <div className="pt-7 pb-6">
                <Dropdown
                options={filtersOptions}
                value={sortCriteria}
                onChange={(newCriteria) => onFilterChange(newCriteria)}
                className="justify-start w-full gap-6 px-3 bg-primary-selected text-white"
                isFilterBtn={true}       
                />
            </div>
        </div>
    )
}

export default SelectYourInstructor;