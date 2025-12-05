import { PersonIcon } from "../UI/Icons/PersonIcon";

interface ParticipantsSummaryCardProps {
    numberOfParticipants : number;
}

const ParticipantsSummaryCard:React.FC<ParticipantsSummaryCardProps> = ({numberOfParticipants}) => {
    return (
        <div className="bg-white p-4 leading-[130%] mt-6">
            <h2>Number of participants</h2>
            <div className="text-[#EA4300] flex items-center pt-3">
                <PersonIcon/>
                <p className="text-black pl-2 text-[20px]">{numberOfParticipants}</p>
            </div>
        </div>
    )
}

export default ParticipantsSummaryCard;