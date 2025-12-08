// import Dropdown from "../UI/Dropdown";
// import { useState } from "react";
// import { PriceBug } from "../UI/Icons/PriceBug";

interface FilterValues {
    price : string;
    experience : string;
    rating : string;
}

interface SelectYourInstructorProps {
    onFilterChange : (criteria: FilterValues) => void;
}

const SelectYourInstructor:React.FC<SelectYourInstructorProps> = () => {

    // const [price, setPrice] = useState("Any Price")
    // const [experience, setExperience] = useState("Any Experience")
    // const [rating, setRating] = useState("Any Rating")

    // const priceOptions = ["Highest Price", "Lowest Price", "Any Price"];

    // const handlePriceChange = (newPriceValue : string) => {
    //     setPrice(newPriceValue);

    //     onFilterChange({
    //         price: newPriceValue, 
    //         experience: experience, 
    //         rating: rating,
    // });
    // }
 

    return (
        <div className="bg-[#80AAEF] rounded w-full mt-16 px-7  flex  justify-between items-center">
            <div>
                 <h2 className="text-[26px] font-semibold leading-[130%]">Your Instructor</h2>
            </div>

            {/* <div className="pb-12">
                <Dropdown
                icon={<PriceBug/>}
                options={priceOptions}
                value={price}
                onChange={handlePriceChange}
                className=" text-black border-black w-full"
                />
            </div> */}
        </div>
    )
}

export default SelectYourInstructor;