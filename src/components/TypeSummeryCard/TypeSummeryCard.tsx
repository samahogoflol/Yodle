import { SkiingIcon } from "../UI/Icons/Skiing";

interface TypeSummeryCardProps {
    typeOfSport : string;
}

const TypeSummeryCard:React.FC<TypeSummeryCardProps> = ({typeOfSport}) => {
    return (
        <div className="bg-white p-4 leading-[130%] mt-6">
            <h2>Type</h2>
            <div className="text-[#EA4300] flex items-center pt-3">
                <SkiingIcon/>
                <p className="text-black pl-2 text-[20px]">{typeOfSport}</p>
            </div>
        </div>
    )
}

export default TypeSummeryCard;