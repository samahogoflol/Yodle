import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import {format, isPast, isToday} from "date-fns"

import "../../styles/index.css"
import { CalendarIcon } from '../UI/Icons/CalendarIcon';

interface DataFieldProps {
    data: Date | null; 
    onSelect: (data: Date | null) => void;
    className?: string;
}

interface CustomInputProps {
    value?: string;
    onClick? : () => void;
    className? : string;
}

const DateField: React.FC<DataFieldProps> = ({ data, onSelect}) => {

    const isDateValid = (date: Date) => {
        return !isPast(date) || isToday(date);
    };
    
    const formattedDate = data ? format(data, 'MM/dd/yyyy') : '';

   const CustomInput = React.forwardRef<HTMLDivElement, CustomInputProps>(({ value, onClick, className, ...props }, ref) => (
        <div 
        onClick={onClick}   
        ref={ref}           
        {...props}          
        className={`w-[278px] h-[45px] p-3 border border-white text-white outline-none cursor-pointer 
         group-hover:border-black 
        ${value? "bg-primary-selected border-0 " : ""}
        ${!value ? "group-hover:border-black" : ""}
        ""`}
        >
            <div className={` ${!formattedDate ? "" : "group-hover:text-white"} flex items-center group-hover:text-black`}> 
            <input
                value={value}
                placeholder="Select a Date"
                className={`${!formattedDate ? "" : "group-hover:text-white"} bg-transparent outline-none w-[230px] placeholder-white cursor-pointer group-hover:placeholder-black  `}
                readOnly 
            />
             <CalendarIcon/>
            </div>
        </div>
    ));

    return (
        <div className="w-[278px] group ">
            
            <div className={`${!formattedDate ? " group-hover:text-black " :""} group flex items-center text-white gap-2 mb-3 group `}>
                <CalendarIcon/>
                <p>Date</p>
            </div>
            
            <DatePicker
                selected={data}
                onChange={(date: Date | null) => onSelect(date)} 
                filterDate={isDateValid}
                placeholderText="Select a Date"
                dateFormat="MM/dd/yyyy"
                calendarClassName="custom-calendar-popup"
                customInput={<CustomInput value={formattedDate}/>}
            />
        </div>
    );
};

export default DateField;