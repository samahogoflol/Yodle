import { CalendarIcon } from "../UI/Icons/CalendarIcon";
import { CheckmarkIcon } from "../UI/Icons/Checkmark";

interface DataAndTimeSummaryCardProps {
    date : Date | null;
    bookingStartTime : string;
    bookingEndTime : string;
    bookingDetails : string;
}

const DataAndTimeSummaryCard:React.FC<DataAndTimeSummaryCardProps> = ({date, bookingEndTime, bookingStartTime, bookingDetails}) => {
    return (
        <div>
            <div className="bg-white p-4 leading-[130%] mt-6">
                  <h2>Date & Time</h2>
                  <div className="text-[#EA4300] flex align-center pt-3">
                    <CalendarIcon/>
                    <p className="text-black pl-2 text-[20px]">
                        {date?.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            }) || 'Not selected'},
                    </p>
                    <p className="text-black pl-1 text-[20px]">{bookingStartTime} - {bookingEndTime} </p>
                  </div>
                  <div className="flex items-center mt-3">
                    <CheckmarkIcon/>
                    <p className="text-black pl-2 ">{bookingDetails} lesson</p>
                  </div>
            </div>
        </div>
    )
}

export default DataAndTimeSummaryCard;