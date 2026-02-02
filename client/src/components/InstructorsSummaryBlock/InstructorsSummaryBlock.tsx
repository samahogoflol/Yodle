import { StarIcon } from "../UI/Icons/StarIcon";

interface InstructorsSummaryBlockProps {
    instructorId? : number;
    instructorPhoto? : string;
    instructorName? : string;
    instructorRating?: number;
    instructorExperience? : number;
    instructorTotalReviews? : number;
}

const InstructorsSummaryBlock:React.FC<InstructorsSummaryBlockProps> = ({instructorExperience,instructorId,instructorName,instructorPhoto,instructorRating,instructorTotalReviews}) => {
    return (
        <div className="bg-white p-4 leading-[130%] mt-6">
            <h2>Instructor</h2>
            <div className="flex items-center mt-3 mb-3">
                {instructorPhoto? (<>
                <img 
                    className={`w-7 h-7 object-cover rounded-[50%] ${instructorId === 4 ? "object-top" : null}`} 
                    src={instructorPhoto} 
                    alt={`Instructor's ${instructorName} photo`} 
                    /> 
                </>): "Not Selected"}
                <p className="pl-2 text-[20px]">{instructorName}</p>
            </div>
            {instructorPhoto? (<>{(
            <div className="flex items-center">
                <StarIcon/> 
                <p className="pl-2 pr-5 ">{instructorRating} ({instructorTotalReviews})</p>
                <p>{instructorExperience} years exp</p>
            </div>
            )}</>): null}
            
        </div>
    )
}

export default InstructorsSummaryBlock;