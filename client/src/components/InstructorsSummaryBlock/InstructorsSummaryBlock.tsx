import { StarIcon } from "../UI/Icons/StarIcon";
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";

interface InstructorsSummaryBlockProps {
    instructorId? : number;
    instructorPhoto? : string;
    instructorName? : string;
    instructorRating?: number;
    instructorExperience? : number;
    instructorTotalReviews? : number;
}

const InstructorsSummaryBlock:React.FC<InstructorsSummaryBlockProps> = ({instructorExperience,instructorId,instructorName,instructorPhoto,instructorRating,instructorTotalReviews}) => {
    const {isMobile} = useWindowWidth();

    return (
        <div className="bg-white py-2 md:py-4 px-4 ">
            <h2 className="leading-[130%] md:text-[#696969]">Instructor</h2>
            <div className="flex items-center mt-3 mb-3">
                {instructorPhoto? (
                    <>
                        <img 
                            className={`w-7 h-7 object-cover rounded-[50%] ${instructorId === 4 ? "object-top" : null}`} 
                            src={instructorPhoto} 
                            alt={`Instructor's ${instructorName} photo`} 
                            /> 
                    </>
                ) :
                    "Not Selected"
                }
                <p className="pl-2 text-[18px] md:text-[20px]">{instructorName}</p>
            </div>

            {!isMobile && (
                <div className="flex items-center">
                    <StarIcon/> 
                    <h5 className="pl-2 pr-5 ">{instructorRating} ({instructorTotalReviews})</h5>
                    <h5>{instructorExperience} years exp</h5>
                </div>
            )}

        </div>
    )
}

export default InstructorsSummaryBlock;