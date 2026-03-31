import { SkiingIcon } from "../UI/Icons/Skiing";

interface TypeSummeryCardProps {
    typeOfSport : string;
}

const TypeSummeryCard:React.FC<TypeSummeryCardProps> = ({typeOfSport}) => {
    return (
        <div className="bg-white px-4 py-2 md:py-4">
            <h5 className="leading-[130%] text-[#696969]">Type</h5>
            <div className="text-[#EA4300] flex items-center pt-3">
                <SkiingIcon/>
                <h5 className="text-black pl-2 text-[18px] md:text-[20px]leading-[120%] ">{typeOfSport ? (<>{typeOfSport}</>) : "Not selected"}</h5>
            </div>
        </div>
    )
}

export default TypeSummeryCard;