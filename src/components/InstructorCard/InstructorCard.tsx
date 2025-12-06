import { SkiingIcon } from "../../components/UI/Icons/Skiing";
import { Snowboarding } from "../UI/Icons/Snowboarding";
import { CheckmarkIcon } from "../UI/Icons/Checkmark";
import start from "../../assets/icons/star.png"
import type { InstructorsProps } from "../../types/instructors";
import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";

interface InstructorCardProps {
    instructor: InstructorsProps; 
}

const InstructorCard:React.FC<InstructorCardProps> = ({instructor}) => {

    const {bookingDetails, setBookingDetails} = useBookingDetails()

    const handleSelectInstructor = () => {
    setBookingDetails((prevState) => ({
        ...prevState, 
        instructor: instructor, 
    }));
    };

    const isSelected = bookingDetails.instructor?.id === instructor.id;
    const selectedStyle = "bg-[#2E78E5] !bg-[#2E78E5] text-black";
    const hoverStyle = "hover:bg-[#2E78E5] hover:text-white";

    return (
        <div 
        onClick={handleSelectInstructor} 
        className={`${isSelected ? selectedStyle : hoverStyle} grid grid-cols-10 p-6 gap-5 bg-white cursor-pointer `}
        > 
            <div className="col-span-1.5">
                <img 
                    src={instructor?.photoMain} 
                    alt={instructor.name}
                    className={`w-15 h-15 object-cover rounded-[50%] ${instructor.id === 4 ? "object-top" : null}`}
                />
            </div>
            <div className="col-span-9">
                <div className="flex justify-between">
                    <p className="text-[26px] font-semibold">{instructor.name}</p>
                    <p className="text-[26px] font-semibold">{instructor.price} $ / hr</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={start} alt="rating" />
                    {instructor.rating} ({instructor.howManyFeedback})
                    <span className="ml-5">{instructor.experience} years exp</span>
                </div>
                <div className="py-6">{instructor.aboutInstructor}</div>
                
                {instructor.lessons && (
                    <div className="flex gap-5"> 
                        {instructor.lessons.map((lessonObject) => {
                            const [[lessonType, lessonName]] = Object.entries(lessonObject);
                            return (
                                <div key={lessonType} className="p-2 flex items-center gap-3 w-fit bg-[#D3DCF8]"> 
                                    {lessonName === "Skiing" ? (
                                        <div className="flex items-center gap-3 text-black hover:text-black">
                                            <SkiingIcon/>
                                            {lessonName}
                                        </div>
                                    ) : (
                                      <div className="flex items-center gap-3 text-black hover:text-black">
                                        <Snowboarding/>
                                        {lessonName}
                                      </div>  
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
                {instructor.time && (
                    <div className="flex gap-5 mt-6"> 
                        {instructor.time.map((lessonObject) => {
                            const [[lessonType, lessonName]] = Object.entries(lessonObject);
                            return (
                                <div key={lessonType} className="p-2 flex items-center gap-3 w-fit bg-[#D3DCF8] text-black hover:text-black">
                                    <CheckmarkIcon/>
                                    {lessonName}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InstructorCard;