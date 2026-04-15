import { CalendarIcon } from "../UI/Icons/CalendarIcon";

interface DataAndTimeSummaryCardProps {
    date : Date | null;
    bookingStartTime : string;
    bookingEndTime : string;
    bookingDetails : string;
}

const DataAndTimeSummaryCard:React.FC<DataAndTimeSummaryCardProps> = ({date, bookingEndTime, bookingStartTime}) => {
    return (
        <div>
            <div className="bg-white px-4 py-2 ">
                  <h2 className="leading-[130%] md:text-[#696969]">Date & Time</h2>
                  <div className="text-[#EA4300] flex align-center pt-2">
                    <CalendarIcon/>
                    <h5 className="text-black pl-2 text-[18px] md:text-[20px] leading-[120%]">
                        {date?.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            }) || 'Not selected'},
                    </h5>
                    <h5 className="text-black pl-1 text-[18px] leading-[120%] md:text-[20px]">{bookingStartTime && bookingEndTime ? (<>{bookingStartTime} - {bookingEndTime} </>) : null}</h5>
                  </div>
            </div>
        </div>
    )
}

export default DataAndTimeSummaryCard;