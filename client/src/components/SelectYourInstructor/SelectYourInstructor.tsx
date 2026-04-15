import Dropdown from "../UI/Dropdown";

import { filtersOptions, type SortCriteria } from "../constants/sort";

interface SelectYourInstructorProps {
    onFilterChange : (criteria: SortCriteria) => void;
    sortCriteria : string;
}

const SelectYourInstructor:React.FC<SelectYourInstructorProps> = ({onFilterChange, sortCriteria}) => {

    return (
        <div className="bg-[#80AAEF] rounded w-full px-4 md:px-7 flex flex-col md:flex-row md:justify-between">
            <div className="text-[26px] font-semibold leading-[130%] pt-4 md:pt-7 md:pb-[35px]">
                 <h2 className="text-[22px] leading-[120%] font-medium md:text-[26px] md:leading-[130%] md:font-semibold">Your Instructor</h2>
            </div>
            <div className="pt-4 md:pt-7 pb-4 md:pb-6">
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