import Dropdown from "../UI/Dropdown";
import { useState } from "react";
import { PriceBug } from "../UI/Icons/PriceBug";
import { ExperienceBag } from "../UI/Icons/ExperienceBag";
import { RatingStar } from "../UI/Icons/RatingStar";

interface FilterValues {
    price : string;
    experience : string;
    rating : string;
}

interface SelectYourInstructorProps {
    onFilterChange : (criteria: FilterValues) => void;
}

const SelectYourInstructor:React.FC<SelectYourInstructorProps> = ({onFilterChange}) => {

    const [price, setPrice] = useState("Any Price")
    const [experience, setExperience] = useState("Any Experience")
    const [rating, setRating] = useState("Any Rating")


    const priceOptions = ["Highest Price", "Lowest Price", "Any Price"];
    const experienceOptions = ["Highest Experience", "Lowest Experience", "Any Experience"];
    const ratingOptions = ["Highest Rating", "Lowest Rating", "Any Rating"];

    const handlePriceChange = (newPriceValue : string) => {
        setPrice(newPriceValue);

        onFilterChange({
            price: newPriceValue, 
            experience: experience, 
            rating: rating,
    });
    }

    const handleExperienceChange = (newExperienceValue : string) => {
        setExperience(newExperienceValue)

        onFilterChange({
            price : price,
            experience : newExperienceValue,
            rating : rating,
        })
    }

    const handleRatingChange = (newRatingValue : string) => {
        setRating(newRatingValue)

        onFilterChange({
            price : price,
            experience : experience,
            rating : newRatingValue,
        })
    }
 

    return (
        <div className="bg-[#80AAEF] rounded w-full mt-16 px-7 pt-13">
            <h2 className="text-[26px] font-semibold leading-[130%]">Your Instructor</h2>

            <div className="flex pt-6 gap-12 pt- pb-12">
                <Dropdown
                icon={<PriceBug/>}
                options={priceOptions}
                value={price}
                onChange={handlePriceChange}
                className=" text-black border-black w-full"
                />
                <Dropdown
                icon={<ExperienceBag/>}
                options={experienceOptions}
                value={experience}
                onChange={handleExperienceChange}
                className=" text-black border-black w-full"
                />
                <Dropdown
                icon={<RatingStar/>}
                options={ratingOptions}
                value={rating}
                onChange={handleRatingChange}
                className=" text-black border-black w-full"
                />
            </div>
        </div>
    )
}

export default SelectYourInstructor;