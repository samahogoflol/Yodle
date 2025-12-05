import type { InstructorsProps } from "../../types/instructors";
import InstructorCard from "../InstructorCard/InstructorCard";

interface InstructorListProps {
    instructors : InstructorsProps[]
}

const InstructorList:React.FC<InstructorListProps> = ({instructors}) => {
    return(
        <div className="flex flex-col gap-6 pb-7 px-7 bg-[#80AAEF] mt-[-10px]">
            {instructors.map((instructor) => (
                <InstructorCard
                    key={instructor.id}
                    instructor={instructor}
                />
            ))}
        </div>
    )
}

export default InstructorList;