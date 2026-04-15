interface InstructorsSummaryBlockProps {
    instructorId? : number;
    instructorPhoto? : string;
    instructorName? : string;
    instructorRating?: number;
    instructorExperience? : number;
    instructorTotalReviews? : number;
}

const InstructorsSummaryBlock:React.FC<InstructorsSummaryBlockProps> = ({instructorId,instructorName,instructorPhoto}) => {

    return (
        <div className="flex flex-col bg-white py-2 px-4 gap-2 ">
            <h2 className="leading-[130%] md:text-[#696969]">Instructor</h2>
            <div className="flex items-center ">
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
        </div>
    )
}

export default InstructorsSummaryBlock;