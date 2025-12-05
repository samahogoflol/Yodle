import Dropdown from "../UI/Dropdown";
import TimerIcon from "../UI/Icons/LessonClock";
import ClockIcon from "../UI/Icons/Clock"
import DurationButton from "../UI/DurationButton";
import { parse, addHours, format } from 'date-fns';
import { useState , useMemo} from "react";
import { useBookingDetails } from "../../utilities/customHooks/useBookingDetails";

const TimeAndDuration = () => {

    const {bookingDetails, setBookingDetails} = useBookingDetails();

    const [availableTime, setAvailableTime] = useState("9:00 AM");
    const [isTimeSelected, setIsTimeSelected] = useState(false);
    // const [lessonDuration, setLessonDuration] = useState<string | null>(null);
    const timeOptions = ["9:00 AM", "10:00 AM", "11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"];
    const durationOptions = ["2 hours", "4 hours", "6 hours"];

    const handleChangeTime = (newTime: string) => { 
    const newBookingTime = newTime ? (newTime) : "";
    
    setBookingDetails(prevState => {
        const currentDuration = prevState.lessonTime;
        
        if (!currentDuration || !newBookingTime) {
             return {
                 ...prevState,
                 bookingStartTime: newBookingTime,
                 bookingEndTime: "", 
             };
        }
        
        const durationString = currentDuration.split(' ')[0];
        const durationInHours = Number(durationString);
        const startTime = parse(newBookingTime, 'h:mm a', new Date());
        const endTime = addHours(startTime, durationInHours);
        const newBookingEndTime = format(endTime, 'h:mm a');
        
        return {
            ...prevState,
            bookingStartTime: newBookingTime, 
            bookingEndTime: newBookingEndTime, 
        };
    });

    setAvailableTime(newTime)
    setIsTimeSelected(true)
}

    const handleSelectLessonTime = (duration : null | string) => {
    const newLessonTime = duration ? (duration) : "";

    setBookingDetails(prevState => {
        const currentStartTime = prevState.bookingStartTime;

        if (!currentStartTime || !newLessonTime) {
             return {
                 ...prevState,
                 lessonTime: newLessonTime,
                 bookingEndTime: "", 
             };
        }
        
        const durationString = newLessonTime.split(' ')[0];
        const durationInHours = Number(durationString);
        const startTime = parse(currentStartTime, 'h:mm a', new Date());
        const endTime = addHours(startTime, durationInHours);
        const newBookingEndTime = format(endTime, 'h:mm a');
    
        return {
            ...prevState,
            lessonTime: newLessonTime,
            bookingEndTime: newBookingEndTime,
        };
    });
}

    const {startTimeDisplay, endTimeDisplay, durationDisplay} = useMemo(() => {
    const currentDuration = bookingDetails.lessonTime; 

    if(!bookingDetails.bookingStartTime || !currentDuration) { 
        return {
            startTimeDisplay : "Select the time",
            endTimeDisplay : "Select the duration",
            durationDispaly : ""
        }
    }

    const durationString = currentDuration.split(' ')[0];
    const durationInHours = Number(durationString);
    const startTime = parse(bookingDetails.bookingStartTime, 'h:mm a', new Date());
    const endTime = addHours(startTime, durationInHours);
    const lessonStartTime = format(startTime, 'h:mm a');
    const lessonEndTime = format(endTime, 'h:mm a');

    return {
        
        startTimeDisplay: `${lessonStartTime} - ${lessonEndTime}`, 
        endTimeDisplay: lessonEndTime,
        durationDisplay: currentDuration,
    };

    },[bookingDetails.bookingStartTime, bookingDetails.lessonTime])

    return (
        <div>
            <div className="bg-[#80AAEF] py-7 px-6 rounded">
                <h3 className="text-[26px] font-semibold mb-6">Time & Duration</h3>
                <div className="grid grid-cols-2 text-[20pxh] gap-16">
                    <div>
                        <div className="flex items-center gap-2 text-[#EA4300] ">
                            <ClockIcon/>
                            <h3 className="text-black">Start Time</h3>
                        </div>
                            <Dropdown
                                options={timeOptions}
                                value={availableTime}
                                onChange={handleChangeTime}
                                className={`text-black border-black w-full mt-3 hover:bg-blue-600 
                                    ${isTimeSelected? "border-blue-400 bg-blue-600 " : null}
                                    `}
                            />
                    </div>
                        <div>
                            <div className="flex items-center gap-3 text-[#EA4300] mb-3">
                                <TimerIcon/>
                                <h3 className="text-black">Lesson Duration</h3>
                            </div>
                            <div className="flex justify-between">
                              {durationOptions.map((duration) => (
                                <DurationButton
                                key={duration}
                                duration={duration}
                                isActive={duration === bookingDetails.lessonTime}
                                onClick={() => handleSelectLessonTime(duration)}
                                
                                />
                              ))}
                            </div>
                        </div>
                            
                </div>
                    <div className="relative flex bg-white mt-6 pr-3 pt-3">
                        <div className="w-[74px] h-full text-[#EA4300] flex justify-center ">
                            <ClockIcon
                            className="absolute top-[2vw] w-[33.33px] h-[33.33px]"/>
                        </div>
                        <div className="flex justify-between w-full leading-[130%]">
                            <p>Your Lesson Time</p>
                            <p>Duration</p>
                        </div>
                    </div>
                        <div className="flex bg-white py-3 pr-3 justify-between pl-[70px] leading-[130%] text-[26px] font-semibold">
                            <p>{startTimeDisplay}</p>
                            <p>{bookingDetails.lessonTime? durationDisplay : endTimeDisplay}</p>
                        </div>
            </div>
        </div>
    )
}

export default TimeAndDuration;