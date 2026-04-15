import { PersonIcon } from "../UI/Icons/PersonIcon";

interface ParticipantsSummaryCardProps {
    numberOfParticipants : number;
}

const ParticipantsSummaryCard:React.FC<ParticipantsSummaryCardProps> = ({numberOfParticipants}) => {
    return (
        <div className="bg-white py-2 px-4">
            <h2 className="leading-[130%] text-[#696969]">Number of participants</h2>
            <div className="text-[#EA4300] flex items-center pt-2">
                <PersonIcon
                    height="20px"
                    width="20px"
                    viewBox="0 0 20 20"
                />
                <p className="text-black pl-2 text-[18px] md:text-[20px]">{numberOfParticipants}</p>
            </div>
        </div>
    )
}

export default ParticipantsSummaryCard;